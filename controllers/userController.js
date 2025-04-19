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
  await slot.save();
  res.status(200).json({ message: 'Slot booked successfully' });
};