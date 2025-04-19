const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
  number: Number,
  isBooked: { type: Boolean, default: false },
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  bookedAt: { type: Date, default: null }
});

module.exports = mongoose.model('bike', bikeSchema);