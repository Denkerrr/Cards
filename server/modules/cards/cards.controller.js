const router = require('express').Router();
const service = require('./cards.service.js');

router.get('/get/all', service.getAllCards);
router.get('/get/:id', service.getCard);
router.post('/create', service.createCard);

module.exports = router;
