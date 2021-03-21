const Util = require("./util");
const MovingObject = require("./moving_object");
const Ship = require("./ship");
const Bullet = require("./bullet");

const DEFAULTS = {
    COLOR: "#505050",
    RADIUS: 25,
    SPEED: 4
};

function Asteroid (options) {
    options = options || {};
    options.color = DEFAULTS.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.radius = DEFAULTS.RADIUS;
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);

    MovingObject.call(this, options);
}    

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Ship) {
        otherObject.relocate();
    };
    if (otherObject instanceof Bullet) {
        this.game.remove(otherObject);
        this.game.remove(this);
    };
}

module.exports = Asteroid;