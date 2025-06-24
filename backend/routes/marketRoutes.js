const express = require('express');
const router = express.Router();
const Market = require('../Models/marketModel');
const upload = require('../middleware/uploads');

const cpUpload = upload.any(); // Accept all file fields dynamically

// 🔹 CREATE Market
router.post('/', cpUpload, async (req, res) => {
  try {
  let { name, showInNavbar,  navbarDescription } = req.body;

    if (!name) return res.status(400).json({ message: 'Name is required' });
  
  
    let sections = [];
    if (req.body.sections) {
      sections = JSON.parse(req.body.sections);
    }

    // Map section images dynamically
    const filesMap = {};
    req.files.forEach((file) => {
      filesMap[file.fieldname] = file.filename;
    });

    sections.forEach((section, index) => {
      const imageKey = section.imageKey; // Added from frontend
      if (imageKey && filesMap[imageKey]) {
        section.image = filesMap[imageKey];
      }
    });

    const marketData = {
      name,
      showInNavbar,
      mainImage: filesMap['mainImage'] || null,
    
      navbarDescription,
      navbarImage: filesMap['navbarImage'] || null,
      sections
    };

    const market = new Market(marketData);
    await market.save();

    res.status(201).json(market);
  } catch (err) {
    console.error('Create market error:', err);
    res.status(400).json({ error: err.message, errors: err.errors || null });
  }
});



// 🔹 READ All Markets
router.get('/', async (req, res) => {
  try {
    const markets = await Market.find();
    res.json(markets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 READ Market by Slug
router.get('/:slug', async (req, res) => {
  try {
    const market = await Market.findOne({ slug: req.params.slug });
    if (!market) return res.status(404).json({ error: 'Market not found' });
    res.json(market);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 UPDATE Market by Slug (regenerate slug if name changes)
router.put('/:slug', cpUpload, async (req, res) => {
  try {
    const market = await Market.findOne({ slug: req.params.slug });
    if (!market) return res.status(404).json({ error: 'Market not found' });

    if (req.body.name) market.name = req.body.name;
    if (req.body.showInNavbar !== undefined) {
      market.showInNavbar = req.body.showInNavbar === 'true';
    }

    if (req.files.mainImage) {
      market.mainImage = req.files.mainImage[0].filename;
    }

    if (req.files.navbarImage) {
      market.navbarImage = req.files.navbarImage[0].filename;
    }

    if (req.body.sections) {
      const sections = JSON.parse(req.body.sections);
      sections.forEach((section, index) => {
        const fileField = `sectionImage${index}`;
        if (req.files[fileField] && req.files[fileField][0]) {
          section.image = req.files[fileField][0].filename;
        }
      });
      market.sections = sections;
    }

    await market.save(); // Triggers slug regeneration if name changed
    res.json(market);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 🔹 DELETE Market by Slug
router.delete('/:slug', async (req, res) => {
  try {
    const market = await Market.findOneAndDelete({ slug: req.params.slug });
    if (!market) return res.status(404).json({ error: 'Market not found' });
    res.json({ message: 'Market deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
