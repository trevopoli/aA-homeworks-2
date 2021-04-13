
const Router = function (node, routes) {
    this.node = node;
    this.routes = routes;
}

Router.prototype.start = function () {
    this.render();

    window.addEventListener("hashchange", event => {
        this.render();
    });
}

Router.prototype.activateRoute = function () {
    let hashName = window.location.hash.substring(1);
    let component = this.routes[hashName];
    return component;
}

Router.prototype.render = function () {
    const component = this.activateRoute();
    this.node.innerHTML = "";
    if (component) {
        comp = new component
        this.node.appendChild(comp.render());
    }
}

module.exports = Router;