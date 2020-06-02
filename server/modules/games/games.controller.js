const router = require('express').Router();
const gamesService = require('./games.service.js');
const cardsService = require('../cards/cards.service.js');

router.get('/all', gamesService.getAllGames);
router.get('/:id', gamesService.getGame);
router.get('/:id/deck', gamesService.getGameCardsDeck);
router.post('/create', gamesService.createGame);
router.delete('/remove/:id', gamesService.removeGame);

module.exports = router;

