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