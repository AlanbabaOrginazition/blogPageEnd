const express = require('express');
const router = express.Router();

router.use('/menu', require('./menuRoute'));
module.exports = router;