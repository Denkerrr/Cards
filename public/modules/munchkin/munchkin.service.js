import {request} from "../../helpers/request.js";

export function getDeck() {
    return request(
        'GET',
        'api/games/' + '1wJeQpduUeLNP7cMi7hZ' + '/deck'
    )
}


export function createCard(props) {
    return request(
        'POST',
        'api/games/create'
    );
}
