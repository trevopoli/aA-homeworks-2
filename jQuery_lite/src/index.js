const DOMNodeCollection = require("./dom_node_collection");

const _readyCallbacks = [];

window.$l = function (arg) {
    let nodeArray = null;

    if (arg instanceof Function){
        if (document.readyState === 'complete') {
            arg();
        } else {
            _readyCallbacks.push(arg);
        }
    } else {
        if (arg instanceof HTMLElement) {
            nodeArray = [arg];
        } else { 
            nodeArray = Array.from(document.querySelectorAll(arg));
        }

        const nodeCollection = new DOMNodeCollection(nodeArray);
        return nodeCollection;
    }
}

$l.extend = function (base, ...otherObjects) {
    otherObjects.forEach((obj) => {
        for (const property in obj) {
            base[property] = obj[property];
        }
    });
    return base;
};

document.addEventListener("DOMContentLoaded", function (event) {
    _readyCallbacks.forEach(callback => callback());
});

$l.ajax = (options) => {
    const request = new XMLHttpRequest();
    const defaults = {
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        method: "GET",
        url: "",
        success: () => { },
        error: () => { },
        data: {},
    };
    options = $l.extend(defaults, options);
    options.method = options.method.toUpperCase();

    if (options.method === "GET") {
        options.url += `?${toQueryString(options.data)}`;
    }

    request.open(options.method, options.url, true);
    request.onload = (e) => {
        if (request.status === 200) {
            options.success(request.response);
        } else {
            options.error(request.response);
        }
    };

    request.send(JSON.stringify(options.data));
};

toQueryString = (obj) => {
    let result = "";
    for (const prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            result += `${prop}=${obj[prop]}&`;
        }
    }
    return result.substring(0, result.length - 1);
};