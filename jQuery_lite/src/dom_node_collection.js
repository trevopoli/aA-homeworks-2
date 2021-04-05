class DOMNodeCollection {
    constructor (elArray) {
        this.elArray = elArray;
    }

    html (...args) {
        if(typeof args[0] === "undefined") {
            return this.elArray[0].innerHTML;
        } else {
            this.elArray.forEach(el => {
                el.innerHTML = args[0];
            });
        }
    }

    clear () {
        this.html("");
    }

    append (arg) {
        let argHTML = [];

        if (arg instanceof DOMNodeCollection){
            arg.elArray.forEach( el => {
                argHTML.push(el.outerHTML);
            });
        } else if (arg instanceof HTMLElement) {
            argHTML.push(arg.outerHTML);
        } else {
            argHTML.push(arg);
        }

        let allHTML = argHTML.join("");
        this.elArray.forEach( el => {
            let elHTML = el.innerHTML;
            el.innerHTML = elHTML + allHTML;
        });
    }

    addClass(className) {
        this.elArray.forEach( el => {
            el.classList.add(className);
        });
    }

    removeClass(className) {
        this.elArray.forEach(el => {
            el.classList.remove(className);
        });
    }

    attr(attrName, ...vals){
        if(vals[0] === undefined) {
            return this.elArray[0].getAttribute(attrName);
        } else {
            this.elArray.forEach( el => {
                let values = vals.join(" ");
                el.setAttribute(attrName, values);
            });
        }
    }

    children() {
        let childrenArr = [];

        this.elArray.forEach( el => {
            let childArr = Array.from(el.children);
            childrenArr = childrenArr.concat(childArr);
        });

        return new DOMNodeCollection(childrenArr);
    }

    parent() {
        let parentArr = [];

        this.elArray.forEach(el => {
            let parent = el.parentElement;
            parentArr.push(parent);
        });

        return new DOMNodeCollection(parentArr);
    }

    find(nodeName) {
        let foundNodes = [];

        this.elArray.forEach(el =>  {
            let nodes = el.querySelectorAll(nodeName);
            if (nodes.length > 0) {
                foundNodes = foundNodes.concat(Array.from(nodes));
            }
        });

        return new DOMNodeCollection(foundNodes);
    }

    remove() {
        this.elArray.forEach(el => {
            el.parentElement.removeChild(el);
        });
    }

    // not handling event delegation
    on(eventType, callback) {
        const eventKey = `event-${eventType}`;

        this.elArray.forEach(el => {
            el.addEventListener(eventType, callback);
            if (typeof el[eventKey] === "undefined") {
                el[eventKey] = [];
            }
            el[eventKey].push(callback);
        });
    }

    off(eventType) {
        const eventKey = `event-${eventType}`;

        this.elArray.forEach(el => {
            if(el[eventKey]) {
                el[eventKey].forEach(callback => {
                    el.removeEventListener(eventType, callback);
                })}
                el[eventKey] = [];
            }
        );
    }
}

module.exports = DOMNodeCollection;