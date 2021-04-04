const DOMNodeCollection = require("./dom_node_collection");

window.$l = function (arg) {
    let nodeArray = null;

    if (arg instanceof HTMLElement){
        nodeArray = [arg];
    } else { 
        nodeArray = Array.from(document.querySelectorAll(arg));
    }
    
    const nodeCollection = new DOMNodeCollection(nodeArray);
    return nodeCollection;
}