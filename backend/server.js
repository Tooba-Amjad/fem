const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const marketRoutes=require('./routes/marketRoutes')
const authRoutes = require('./routes/authRoutes');
const productRoutes=require('./routes/productRoutes');
const userRoutes=require('./routes/userRoutes');

const newRoute=require('./routes/newsRoutes');


const app = express();
app.use(cors());

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/market', marketRoutes);
app.use('/api/product',productRoutes)
app.use('/api/auth', authRoutes);
app.use('/api/news',newRoute)

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
