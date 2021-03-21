const Util = require("./util");
const MovingObject = require("./moving_object");
const Bullet = require("./bullet");

const SHIP_DEFAULTS = {
    COLOR: "#5203fc",
    RADIUS: 15,
    SPEED: 0
};

function Ship (options) {
    options = options || {};
    options.color = SHIP_DEFAULTS.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.radius = SHIP_DEFAULTS.RADIUS;
    options.vel = Util.randomVec(SHIP_DEFAULTS.SPEED);

    console.log(options);
    MovingObject.call(this, options);
};

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = Util.randomVec(SHIP_DEFAULTS.SPEED);
}

Ship.prototype.power= function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
}

Ship.prototype.fireBullet = function () {
    let bulletVel = [(this.vel[0] * Bullet.SPEED), (this.vel[1] * Bullet.SPEED)];
    let bullet = new Bullet({ game: this.game, vel: bulletVel, pos: this.pos});
    this.game.bullets.push(bullet);
}

module.exports = Ship;