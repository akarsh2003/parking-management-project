const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllBikeSlots, getAllCarSlots, bookBikeSlot, bookCarSlot } = require('../controllers/userController');

router.get('/bike', auth, getAllBikeSlots);
router.get('/car', auth, getAllCarSlots);
router.post('/bike/:slotId', auth, bookBikeSlot);
router.post('/car/:slotId', auth, bookCarSlot);

module.exports = router;