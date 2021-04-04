class DOMNodeCollection {
    constructor (elArray) {
        this.elArray = elArray;
    }

    html (...args) {
        if(args[0] !== undefined) {
            this.elArray.forEach(el => {
                el.innerHTML = args[0];
            });
        } else {
            return this.elArray[0].innerHTML;
        }
    }

    clear () {
        this.html("");
    }

}

module.exports = DOMNodeCollection;