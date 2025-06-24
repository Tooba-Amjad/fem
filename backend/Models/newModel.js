const mongoose = require('mongoose');
const slugify = require('slugify');

const NewsSchema = new mongoose.Schema({
  heroText: { type: String, required: true },
  heroImage: { type: String, required: true },
  description: { type: String, required: true },
  slug: { type: String, unique: true, lowercase: true }
});

NewsSchema.pre('save', function (next) {
  if (this.isModified('heroText')) {
    this.slug = slugify(this.heroText, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model('News', NewsSchema);
