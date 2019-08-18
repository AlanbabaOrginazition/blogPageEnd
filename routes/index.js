const express = require('express');
const router = express.Router();

router.use('/menu', require('./menu/menu.js'));
router.use('/oauth', require('./oauth/auth.js'));
router.use('/upload', require('./upload/upload.js'));
module.exports = router;