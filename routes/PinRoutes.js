const express = require('express');
const router = express.Router();

const { createPin, getPins } = require('../controller/PinController');

router.post('/pins', createPin);
router.get('/pins', getPins);

module.exports = router;
