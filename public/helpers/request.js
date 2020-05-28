import {__env} from "../../env.js";

export function request(method, url, body) {
    return new Promise( (resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, __env.apiUrl + url);
        xhr.onload = function () {
            const response = xhr.status === 200 ? JSON.parse(xhr.response) : xhr.response;
            resolve(response, xhr.status);
        };
        xhr.onerror = function () {
            reject(xhr.response);
        };
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(body);
    })
}
