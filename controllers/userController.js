const Slot = require('../models/Slot');
const Bike = require('../models/Bike');
const User = require('../models/User');
const Car = require('../models/Car');

exports.getAllBikeSlots = async (req, res) => {
  const slots = await Bike.find();
  res.json(slots);
};

exports.getAllCarSlots = async (req, res) => {
  const slots = await Car.find();
  res.json(slots);
};

exports.bookBikeSlot = async (req, res) => {
  const slot = await Bike.findById(req.params.slotId);
  if (!slot || slot.isBooked) return res.status(400).json({ message: 'Slot not available' });

  slot.isBooked = true;
  slot.bookedBy = req.user.id;
  slot.bookedAt = new Date();
  await slot.save();
  res.status(200).json({ message: 'Slot booked successfully' });
};

exports.bookCarSlot = async (req, res) => {
  const slot = await Car.findById(req.params.slotId);
  if (!slot || slot.isBooked) return res.status(400).json({ message: 'Slot not available' });

  slot.isBooked = true;
  slot.bookedBy = req.user.id;
  slot.bookedAt = new Date();
  await slot.save();
  res.status(200).json({ message: 'Slot booked successfully' });
};


exports.exitBikeBooking = async (req, res) => {
  try {
    const slot = await Bike.findById(req.params.slotId);
    if (!slot) {
      return res.status(404).json({ message: 'Bike slot not found' });
    }

    if (!slot.isBooked) {
      return res.status(400).json({ message: 'Slot is not currently booked' });
    }

    if (String(slot.bookedBy) !== req.user.id) {
      return res.status(403).json({ message: 'You are not authorized to release this slot' });
    }

    slot.isBooked = false;
    slot.bookedBy = null;
    slot.bookedAt = null;
    await slot.save();

    res.status(200).json({ message: 'Bike slot released successfully' });
  } catch (err) {
    console.error('Exit bike booking error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.exitCarBooking = async (req, res) => {
  try {
    const slot = await Car.findById(req.params.slotId);
    if (!slot) return res.status(404).json({ message: 'Car slot not found' });
    if (!slot.isBooked) return res.status(400).json({ message: 'Slot not booked' });
    if (String(slot.bookedBy) !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });

    slot.isBooked = false;
    slot.bookedBy = null;
    slot.bookedAt = null;
    await slot.save();

    res.status(200).json({ message: 'Car slot released successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

