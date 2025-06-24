const express = require('express');
const router = express.Router();
const News = require('../models/newModel'); // model ka naam capital hona chahiye by convention

const upload = require('../middleware/uploads'); // Aapka upload middleware path

// POST route to add news with file upload
router.post('/', upload.single('heroImage'), async (req, res) => {
  try {
    const { heroText, description } = req.body;
    const heroImage = req.file ? `/uploads/${req.file.filename}` : '';

    const news = new News({ heroText, heroImage, description });
    await news.save();
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Get all News Entries
router.get('/', async (req, res) => {
  try {
    const allNews = await News.find();
    res.json(allNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get News Entry by Slug
router.get('/:slug', async (req, res) => {
  try {
    const newsItem = await News.findOne({ slug: req.params.slug });
    if (!newsItem) return res.status(404).json({ error: 'News not found' });
    res.json(newsItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update News Entry by ID
router.put('/:id', async (req, res) => {
  try {
    const { heroText, heroImage, description } = req.body;
    const newsItem = await News.findById(req.params.id);
    if (!newsItem) return res.status(404).json({ error: 'News not found' });

    if (heroText) newsItem.heroText = heroText;
    if (heroImage) newsItem.heroImage = heroImage;
    if (description) newsItem.description = description;

    await newsItem.save();
    res.json(newsItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete News Entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedNews = await News.findByIdAndDelete(req.params.id);
    if (!deletedNews) return res.status(404).json({ error: 'News not found' });
    res.json({ message: 'News deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
