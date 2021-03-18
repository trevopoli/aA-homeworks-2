const Game = require("./game.js");

window.Game = Game;

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
});