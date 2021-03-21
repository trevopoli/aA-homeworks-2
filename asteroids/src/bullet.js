const Util = require("./util");
const MovingObject = require("./moving_object");

function Bullet (options) {
    options.radius = Bullet.RADIUS;

    MovingObject.call(this, options);
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = false;

Bullet.RADIUS = 2;
Bullet.SPEED = 10;

module.exports = Bullet;