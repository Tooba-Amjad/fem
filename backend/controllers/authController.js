const User = require('../Models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const upload = require('../middleware/uploads');
const path = require('path');
const crypto = require('crypto');

exports.register = async (req, res) => {
  const { fullName, email, contactNumber, password, role } = req.body;
  const profileImage = req.file ? path.basename(req.file.path) : '';

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ fullName, email, contactNumber, password: hashedPassword, role, profileImage });
    await user.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Register error:', error); // Detailed error on server console

    if (error.message.includes('File too large')) {
      return res.status(413).json({ message: 'File too large' });
    }
    
    // Send back detailed validation error info
    res.status(400).json({ 
      error: error.message, 
      details: error.errors || null 
    });
  }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: 'User not found' });

       const isPasswordValid = await bcrypt.compare(password, user.password);
       
        if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

        const token = jwt.sign({
            id: user._id,
            fullName: user.fullName,
            role: user.role,
            profileImage: user.profileImage // Add profileImage to token
        }, process.env.JWT_SECRET, { expiresIn: '365d' });

        res.json({
            message: 'Login successful',
            token,
            user: {
                fullName: user.fullName, // This should contain the full name
                email: user.email,
                role: user.role,
                profileImage: user.profileImage
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User with this email does not exist' });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        await user.save();

        
        const resetURL = `http://localhost:3000/reset-password/${resetToken}`;

        await sendEmail({
            to: user.email,
            subject: 'Password Reset Request',
            text: `You requested a password reset. Click this link to reset your password: ${resetURL}`,
        });

        res.status(200).json({ message: 'Password reset link sent to your email' });
    } catch (error) {
        res.status(500).json({ message: 'Error processing password reset request: ' + error.message });
    }
};

exports.resetPassword = async (req, res) => {
    const { token } = req.params; 
    const { newPassword } = req.body;

    try {
        const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpires: { $gt: Date.now() }, // Check token expiry
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);

        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();

        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error resetting password: ' + error.message });
    }
};



exports.upload = upload.single('profileImage');
