const firestore = require('firebase-admin').firestore();
const gamesQuery = firestore.collection('games');
const cardsQuery = firestore.collection('games-cards');
const models = require('../../models/games/games.model.js');

function getAllGames(req, res) {
    const result = [];
    gamesQuery
        .get()
        .then(snapshot => {
            for (let doc of snapshot.docs) {
                result.push(
                    models.GameModel({id: doc.id, ...doc.data()})
                );
            }
            return res.status(200).send(result)
        })
}

function getGame(req, res) {
    gamesQuery
        .doc(req.params.id)
        .get()
        .then(snapshot => res.status(200)
            .send(models.GameModel({id: snapshot.id, ...snapshot.data()})));
}

function createGame(req, res) {
    const _saveModel = models.SaveGameModel({name: req.body.name});
    gamesQuery
        .add(_saveModel)
        .then(snapshot => {
            req.setTimeout(500);
            res.status(200).send(models.GameModel({id: snapshot.id, ..._saveModel}));
        });
}

function removeGame(req, res) {
    gamesQuery
        .doc(req.params.id)
        .delete()
        .then(() => res.status(204).send())
        .catch((error) => res.status(500).send(error))
}

function getGameCardsDeck(req, res) {
    let result = {
        name: '',
        cards: []
    };
    gamesQuery.doc(req.params.id).get()
        .then(snapshot => {
            const _deckReference = snapshot.get('deckReference')._path.segments.join('/');
            return firestore.doc(_deckReference).get();
        })
        .then(snapshot => {
            result = {...result, ...snapshot.data()};
            return snapshot.ref.collection('cards').get()
        })
        .then(snapshot => {
            for (let doc of snapshot.docs) {
                result.cards.push({id: doc.id, ...doc.data()});
            }
            res.status(200).send(result);
        })
}

module.exports = {
    getAllGames,
    getGame,
    removeGame,
    createGame,

    getGameCardsDeck
};


