const Game = require("./game");

function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.ship = this.game.addShip();
}

GameView.MOVES = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
};

GameView.prototype.start = function () {
    this.bindKeyHandlers();
    setInterval(() => {
        this.game.step();
        this.game.draw(this.ctx);
    }, 20);
}

GameView.prototype.bindKeyHandlers = function () {
    const ship = this.ship;

    Object.keys(GameView.MOVES).forEach(function (k) {
        const move = GameView.MOVES[k];
        key(k, function () { ship.power(move); });
    });

    key('space', function () { ship.fireBullet(); });
}

module.exports = GameView;