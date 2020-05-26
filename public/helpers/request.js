export function _request(method, url, body, done) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
        const response = xhr.status === 200 ? JSON.parse(xhr.response) : xhr.response;
        done(response, xhr.status);
    };
    xhr.onerror = function () {
        done(xhr.response, xhr.status);
    };
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(body);
}
