const router = require('express').Router();
const gameService = require('./game.service.js');

router.post('/create', gameService.createGameLog);
router.get('/:gameId', gameService.getGameLog);
router.post('/:gameId/setTurn', gameService.setTurn);

module.exports = router;

