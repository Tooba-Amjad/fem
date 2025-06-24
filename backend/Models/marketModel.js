const mongoose = require("mongoose");

// Section schema without 'link'
const sectionSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  list: [{ type: String }],
});

// Market schema with slug auto-generated from 'name'
const marketSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, unique: true },
    showInNavbar: { type: Boolean, default: false },
     
    navbarImage: { type: String },
     navbarDescription: { type: String }, // One line navbar description, optional
  
    mainImage: { type: String, required: true },
    sections: {
      type: [sectionSchema],
      validate: {
        validator: (arr) => arr.length > 0,
        message: "At least one section is required",
      },
    },
  },
  { timestamps: true }
);

// Auto-generate slug from name before saving
marketSchema.pre("save", function (next) {
  if (this.isModified("name") || !this.slug) {
    this.slug = this.name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")         // Replace spaces with -
      .replace(/[^\w\-]+/g, "")     // Remove non-word chars
      .replace(/\-\-+/g, "-");      // Replace multiple - with single -
  }
  next();
});

module.exports = mongoose.model("Market", marketSchema);
