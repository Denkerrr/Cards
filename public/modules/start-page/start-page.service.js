import { request } from "../../helpers/request.js";

export function createCard(props) {
    return request(
        'POST',
        'http://localhost:5001/xyteka/us-central1/api/route/cards/create',
        JSON.stringify(props)
    );
}

export function getCards() {
    return request('GET', 'http://localhost:5001/xyteka/us-central1/api/route/cards/get/all')
}
