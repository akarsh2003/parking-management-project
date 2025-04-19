const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllBikeSlots, getAllCarSlots, bookBikeSlot } = require('../controllers/userController');

router.get('/bike', auth, getAllBikeSlots);
router.get('/car', auth, getAllCarSlots);
router.post('/book/:slotId', auth, bookBikeSlot);

module.exports = router;