const express = require('express');
const router = express.Router();
const accessController = require('../../controllers/core/accessController');

router.get('/access', accessController.findAccess);
module.exports = router;