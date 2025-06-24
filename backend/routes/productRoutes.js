const express = require("express");
const router = express.Router();
const Product = require("../Models/productModel");
const multer = require('multer');
const path = require('path');



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

function safeParseJSON(input, fallback) {
  if (typeof input !== 'string') return fallback;
  try {
    return JSON.parse(input);
  } catch (e) {
    console.warn('JSON parse failed for input:', input);
    return fallback;
  }
}

const mongoose = require('mongoose');
router.post(
  '/',
  upload.fields([
    { name: 'heroImage', maxCount: 1 },
    { name: 'navbarImage', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      console.log("Raw req.body:", req.body);

      const {
        title,
        slug,
        description,
        features,
        technicalTables,
        applicableMarkets,
        isNavbar,
        navbarDescription,
        subpages, // Corrected from 'subPages'
        status
      } = req.body;

      // Parse JSON fields safely
      const featuresParsed = features ? JSON.parse(features) : [];
      const technicalTablesParsed = technicalTables ? JSON.parse(technicalTables) : [];

      // Convert applicableMarkets to ObjectId array
      let applicableMarketsParsed = [];
      if (applicableMarkets) {
        if (Array.isArray(applicableMarkets)) {
          applicableMarketsParsed = applicableMarkets.map(id => new mongoose.Types.ObjectId(id));
        } else if (typeof applicableMarkets === "string") {
          applicableMarketsParsed = applicableMarkets.includes(',')
            ? applicableMarkets.split(',').map(id => new mongoose.Types.ObjectId(id.trim()))
            : [new mongoose.Types.ObjectId(applicableMarkets)];
        }
      }

      // Convert subpages to ObjectId array (corrected variable name)
      let subPagesParsed = [];
      if (subpages) {
        if (Array.isArray(subpages)) {
          subPagesParsed = subpages.map(id => new mongoose.Types.ObjectId(id));
        } else if (typeof subpages === "string") {
          subPagesParsed = subpages.includes(',')
            ? subpages.split(',').map(id => new mongoose.Types.ObjectId(id.trim()))
            : [new mongoose.Types.ObjectId(subpages)];
        }
      }

      // Convert isNavbar to boolean
      const isNavbarBool = isNavbar === 'true' || isNavbar === true;

      // Handle image uploads
      const heroImage = req.files['heroImage']?.[0]?.filename
        ? `/uploads/${req.files['heroImage'][0].filename}`
        : null;

      const navbarImage = req.files['navbarImage']?.[0]?.filename
        ? `/uploads/${req.files['navbarImage'][0].filename}`
        : null;

      // Create product
      const product = new Product({
        title,
        slug,
        description,
        features: featuresParsed,
        applicableMarkets: applicableMarketsParsed,
        technicalTables: technicalTablesParsed,
        media: {
          heroImage
        },
        isNavbar: isNavbarBool,
        navbarDescription,
        navbarImage,
        subPages: subPagesParsed,
        status
      });

      await product.save();

      res.status(201).json({
        message: 'Product created successfully',
        product
      });

    } catch (error) {
      console.error('Error in product creation:', error);
      res.status(500).json({
        error: 'Failed to create product',
        details: error.message
      });
    }
  }
);


// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate("applicableMarkets").populate("subPages");
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single product by ID

router.get("/:slug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug })
      .populate("applicableMarkets","name mainImage slug")
      .populate("subPages","media title slug");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Update a product
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a product
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
