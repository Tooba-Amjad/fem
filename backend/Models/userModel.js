const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'editor'], required: true }, // Restrict roles to admin or editor
    profileImage: { type: String }, // Store the URL or file path of the profile image
}, { timestamps: true });



module.exports = mongoose.models.User
  || mongoose.model('User', userSchema);