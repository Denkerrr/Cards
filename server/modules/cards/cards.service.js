const query = require('firebase-admin').firestore().collection('cards');

function getAllCards(req, res) {
    const result = [];
    query
        .get()
        .then(snapshot => {
            for (let doc of snapshot.docs) {
                result.push({id: doc.id, ...doc.data()});
            }
            return res.status(200).send(result)
        })
}

function getCard(req, res) {
    query.doc(req.params.id)
        .get()
        .then(snapshot => res.status(200).send({id: snapshot.id, ...snapshot.data()}));
}

//TODO УБРАТЬ ТАЙМАУТ И ПОСМОТРЕТЬ КАК ВЕРНУТЬ РЕЗУЛЬТАТ
function createCard(req, res) {
    query.add({name: req.body.name});
    req.setTimeout(500);
    res.status(201).send();
}

module.exports = {
    getAllCards,
    getCard,
    createCard
};


