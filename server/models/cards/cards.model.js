function CardModel(props) {
    return {
        id: props.hasOwnProperty('id') ? props.id : '',
        ...SaveCardModel(props)
    }
}

function SaveCardModel(props) {
    return {
        name: props.hasOwnProperty('name') ? props.name : '',
        description: props.hasOwnProperty('description') ? props.description : '',
        imageUrl: props.hasOwnProperty('imageUrl') ? props.imageUrl : '',
        redirectUrl: props.hasOwnProperty('redirectUrl') ? props.redirectUrl : ''
    }
}

module.exports = {
    CardModel,
    SaveCardModel
};
