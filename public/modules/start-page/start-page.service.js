import { request } from "../../helpers/request.js";

export function createCard(props) {
    return request(
        'POST',
        'http://localhost:3000/api/cards/create',
        JSON.stringify(props)
    );
}

export function getCards() {
    return request('GET', 'http://localhost:3000/api/cards/get/all')
}
