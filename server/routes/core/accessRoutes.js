const express = require('express');
const router = express.Router();
const accessController = require('../../controllers/core/accessController');

router.get('/access/login', accessController.loginAccess);
module.exports = router;