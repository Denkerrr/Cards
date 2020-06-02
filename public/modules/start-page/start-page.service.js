import {request} from "../../helpers/request.js";

export function createCard(props) {
    return request(
        'POST',
        'api/games/create',
        JSON.stringify(props)
    );
}

export function getCards() {
    return request(
        'GET',
        'api/games/all'
    )
}
