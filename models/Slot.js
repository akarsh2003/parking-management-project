const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  type: { type: String, enum: ['car', 'bike'] },
  number: Number,
  isBooked: { type: Boolean, default: false },
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
});

module.exports = mongoose.model('Slot', slotSchema);
