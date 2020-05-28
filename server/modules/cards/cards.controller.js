const router = require('express').Router();
const service = require('./cards.service.js');

router.get('/get/all', service.getAllCards);

module.exports = router;

