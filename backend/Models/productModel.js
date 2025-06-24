const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const slugify = require("slugify");

const tableSchema = new Schema({
  heading: String, // Add this line
  data: [[String]] // 2D array of strings
}, { _id: false });


// Main product schema
const productSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  description: String,
  features: [String],
  applicableMarkets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Market" }],

  media: {
    heroImage: String
  },
  isNavbar: Boolean,
  navbarDescription: String,
  navbarImage: String,
   technicalTables: [tableSchema] ,
  subPages: [{ type: Schema.Types.ObjectId, ref: 'Product' }] // Reference to other products
});

// Auto-generate slug before save
productSchema.pre("save", function (next) {
  if (!this.slug && this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

module.exports = model("Product", productSchema);
