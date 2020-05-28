const router = require('express').Router();
const gamesService = require('./games.service.js');
const cardsService = require('../cards/cards.service.js');

router.get('/get/all', gamesService.getAllGames);
router.get('/get/:id', gamesService.getGame);
router.get('/get/:id/deck/get', gamesService.getGameCardsDeck);
router.post('/create', gamesService.createGame);
router.delete('/remove/:id', gamesService.removeGame);

module.exports = router;

