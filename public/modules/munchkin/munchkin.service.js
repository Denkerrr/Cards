import {request} from "../../helpers/request.js";

export function getDeck() {
    return request(
        'GET',
        'api/games/get/' + '1wJeQpduUeLNP7cMi7hZ' + '/deck/get'
    )
}


export function createCard(props) {
    return request(
        'POST',
        'api/games/create'
    );
}
