const Util = require("./util");
const Asteroid = require("./asteroid");
const Ship = require("./ship");
const Bullet = require("./bullet");

function Game () {
    this.asteroids = [];
    this.ships = [];
    this.bullets = [];

    this.addAsteroids();
}

Game.DIM_X = 800;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 4;

Game.prototype.randomPosition = function (){
    return [
        Game.DIM_X * Math.random(),
        Game.DIM_Y * Math.random()
    ];
}

Game.prototype.addAsteroids = function addAsteroids() {
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({ game: this }));
    }
}

Game.prototype.addShip = function () {
    this.ships.push(new Ship({ game: this, pos: this.randomPosition() }));

    return this.ships[0];
}

Game.prototype.allObjects = function () {
    let allObjects = this.asteroids.concat(this.ships, this.bullets);
    return allObjects;
}

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0,Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach((asteroid) => asteroid.draw(ctx));
}

Game.prototype.moveObjects = function () {
    this.allObjects().forEach( function (obj) {
        obj.move();
    });
}

Game.prototype.wrap = function wrap(pos) {
    return [
        Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)
    ];
};

Game.prototype.isOutOfBounds = function (pos) {
    return (pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y );
}

Game.prototype.checkCollisions = function () {
    const allObjects = this.allObjects();

    for (let i = 0; i < allObjects.length; i++) {
        for (let j = i+1; j < allObjects.length; j++) { 
            if (allObjects[i].isCollidedWith(allObjects[j])) {
                allObjects[i].collideWith(allObjects[j]);
            };
        };
    };
}

Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function (obj) {
    if (obj instanceof Asteroid){
        let idx = this.asteroids.indexOf(obj);
        if (idx > -1) {
            this.asteroids.splice(idx, 1);
        };
    };
    if (obj instanceof Bullet) {
        let idx = this.bullets.indexOf(obj);
        if (idx > -1) {
            this.bullets.splice(idx, 1);
        };
    };
}

module.exports = Game;