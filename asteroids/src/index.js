const Game = require("./game.js");
const GameView = require("./game_view.js");

window.GameView = GameView;

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    
    const game = new Game();
    new GameView(game, ctx).start();
});