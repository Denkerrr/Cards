function GameModel(props) {
    return {
        id: props.hasOwnProperty('id') ? props.id : '',
        ...SaveGameModel(props)
    }
}

function SaveGameModel(props) {
    return {
        name: props.hasOwnProperty('name') ? props.name : '',
        description: props.hasOwnProperty('description') ? props.description : '',
        imageUrl: props.hasOwnProperty('imageUrl') ? props.imageUrl : '',
        redirectUrl: props.hasOwnProperty('redirectUrl') ? props.redirectUrl : ''
    }
}

module.exports = {
    GameModel,
    SaveGameModel
};
