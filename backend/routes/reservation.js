const express = require('express');
const Reservation = require('../models/Reservation');
const router = express.Router();

// Get all reservations
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new reservation
router.post('/', async (req, res) => {
  const { name, email, phone, date, time, guests, specialRequest } = req.body;
  const reservation = new Reservation({ name, email, phone, date, time, guests, specialRequest });
  try {
    const newReservation = await reservation.save();
    res.status(201).json(newReservation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
