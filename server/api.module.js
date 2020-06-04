const router = require('express').Router();

router.use('/game', require('./modules/game/game.controller'));
router.use('/games', require('./modules/games/games.controller'));

module.exports = router;

