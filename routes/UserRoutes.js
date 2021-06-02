const express = require('express');
const router = express.Router();

const { createRegister, userLogin } = require('../controller/UserController');

router.post('/users/register', createRegister);
router.post('/users/login', userLogin);

module.exports = router;
