const router = require('express').Router();

router.use('/cards', require('./modules/cards/cards.controller'));

module.exports = router;

