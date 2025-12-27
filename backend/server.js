const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());


// Example route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Menu routes
const menuRoutes = require('./routes/menu');
const reservationRoutes = require('./routes/reservation');
const userRoutes = require('./routes/user');
const reviewRoutes = require('./routes/review');

app.use('/api/menu', menuRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);

// Connect to MongoDB
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });