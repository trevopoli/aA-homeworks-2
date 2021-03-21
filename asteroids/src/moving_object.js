// const Game = require("./game");
const Util = require("./util");

function MovingObject (options) {
    this.pos = options['pos'];
    this.vel = options['vel'];
    this.radius = options['radius'];
    this.color = options['color'];
    this.game = options['game'];
}

MovingObject.prototype.isWrappable = true;

MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
    );
    ctx.fill();
}

MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (this.game.isOutOfBounds(this.pos) && !this.isWrappable) {
        this.game.remove(this);
    } else {
        this.pos = this.game.wrap(this.pos);
    };
}

MovingObject.prototype.isCollidedWith = function (otherObject) {
    let disBetween = Math.sqrt(((otherObject.pos[0]-this.pos[0])**2)+((otherObject.pos[1]-this.pos[1])**2));
    return (disBetween < (this.radius + otherObject.radius));
}

MovingObject.prototype.collideWith = function (otherObject) {
}

module.exports = MovingObject;