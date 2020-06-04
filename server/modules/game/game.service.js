const admin = require('firebase-admin');
const gameLoggerQuery = admin.firestore().collection('game-log');


function createGameLog(req, res) {
    gameLoggerQuery
        .add({turns: []})
        .then(snapshot => res.status(201).send(snapshot.id))
}

function getGameLog(req, res) {
    gameLoggerQuery
        .doc(req.params.gameId)
        .get()
        .then(snapshot => res.status(200)
            .send({id: snapshot.id, ...snapshot.data()}));
}

function setTurn(req, res) {
    const log = gameLoggerQuery.doc(req.params.gameId);

    log.update({turns: admin.firestore.FieldValue.arrayUnion(req.body.cardId)})
        .then(() => res.status(201).send(null));
}

module.exports = {
    createGameLog,
    getGameLog,
    setTurn,
};


