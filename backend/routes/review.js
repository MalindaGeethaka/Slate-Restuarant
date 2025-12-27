const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().populate('user').populate('menuItem');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new review
router.post('/', async (req, res) => {
  const { user, menuItem, rating, comment } = req.body;
  const review = new Review({ user, menuItem, rating, comment });
  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
