/**
 * AJAX client.
 * 
 * @version 1.0.0
 * 
 * @param {String} url 
 * @param {Object} config 
 * @param {Function} callback 
 */
function ajax(url, config, callback) {
    var req = new XMLHttpRequest();

    if (config) {
        req.open(config.method || 'GET', url);

        if (config.headers)
            for (var header in config.headers)
                req.setRequestHeader(header, config.headers[header]);
    } else
        req.open('GET', url);

    req.onload = function () {
        if (req.status === 200) {
            callback(undefined, req.response);
        } else {
            callback(new Error(req.statusText));
        }
    };

    req.onerror = function () {
        callback(new Error("Network Error"));
    };

    req.send();
}