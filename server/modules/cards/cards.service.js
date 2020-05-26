const firebaseQuery = require('firebase-admin').firestore().collection('cards');
const cardsModels = require('../../models/cards/cards.model.js');

function getAllCards(req, res) {
    const result = [];
    firebaseQuery
        .get()
        .then(snapshot => {
            for (let doc of snapshot.docs) {
                result.push(
                    cardsModels.CardModel({id: doc.id, ...doc.data()})
                );
            }
            return res.status(200).send(result)
        })
}

function getCard(req, res) {
    firebaseQuery
        .doc(req.params.id)
        .get()
        .then(snapshot => res.status(200)
            .send(cardsModels.CardModel({id: snapshot.id, ...snapshot.data()})));
}

function createCard(req, res) {
    const _saveModel = cardsModels.SaveCardModel({name: req.body.name});
    firebaseQuery
        .add(_saveModel)
        .then(snapshot => {
            req.setTimeout(500);
            res.status(200).send(cardsModels.CardModel({id: snapshot.id, ..._saveModel}));
        });
}

function removeCard(req, res) {
    firebaseQuery
        .doc(req.params.id)
        .delete()
        .then(() => res.status(204).send())
        .catch((error) => res.status(500).send(error))
}

module.exports = {
    getAllCards,
    getCard,
    removeCard,
    createCard
};


