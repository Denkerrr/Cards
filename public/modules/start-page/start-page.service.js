import {_request} from "../../helpers/request.js";

export function createCard(props) {
    return new Promise((resolve) => {
        _request(
            'POST',
            'http://localhost:5001/xyteka/us-central1/api/route/cards/create',
            JSON.stringify(props),
            (response, status) => {
                resolve(response)
            }
        );
    });
}

export function getCards() {
    return new Promise((resolve) => {
        _request(
            'GET',
            'http://localhost:5001/xyteka/us-central1/api/route/cards/get/all',
            null,
            (response, status) => {
                resolve(response)
            })
    });
}
