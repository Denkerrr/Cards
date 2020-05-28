const router = require('express').Router();

router.use('/games', require('./modules/games/games.controller'));

module.exports = router;

