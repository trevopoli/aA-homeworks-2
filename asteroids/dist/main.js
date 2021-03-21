/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nconst DEFAULTS = {\n    COLOR: \"#505050\",\n    RADIUS: 25,\n    SPEED: 4\n};\n\nfunction Asteroid (options) {\n    options = options || {};\n    options.color = DEFAULTS.COLOR;\n    options.pos = options.pos || options.game.randomPosition();\n    options.radius = DEFAULTS.RADIUS;\n    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);\n\n    MovingObject.call(this, options);\n}    \n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function (otherObject) {\n    if (otherObject instanceof Ship) {\n        otherObject.relocate();\n    };\n    if (otherObject instanceof Bullet) {\n        this.game.remove(otherObject);\n        this.game.remove(this);\n    };\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nfunction Bullet (options) {\n    options.radius = Bullet.RADIUS;\n\n    MovingObject.call(this, options);\n}\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.isWrappable = false;\n\nBullet.RADIUS = 2;\nBullet.SPEED = 10;\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nfunction Game () {\n    this.asteroids = [];\n    this.ships = [];\n    this.bullets = [];\n\n    this.addAsteroids();\n}\n\nGame.DIM_X = 800;\nGame.DIM_Y = 600;\nGame.NUM_ASTEROIDS = 4;\n\nGame.prototype.randomPosition = function (){\n    return [\n        Game.DIM_X * Math.random(),\n        Game.DIM_Y * Math.random()\n    ];\n}\n\nGame.prototype.addAsteroids = function addAsteroids() {\n    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n        this.asteroids.push(new Asteroid({ game: this }));\n    }\n}\n\nGame.prototype.addShip = function () {\n    this.ships.push(new Ship({ game: this, pos: this.randomPosition() }));\n\n    return this.ships[0];\n}\n\nGame.prototype.allObjects = function () {\n    let allObjects = this.asteroids.concat(this.ships, this.bullets);\n    return allObjects;\n}\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0,0,Game.DIM_X, Game.DIM_Y);\n    this.allObjects().forEach((asteroid) => asteroid.draw(ctx));\n}\n\nGame.prototype.moveObjects = function () {\n    this.allObjects().forEach( function (obj) {\n        obj.move();\n    });\n}\n\nGame.prototype.wrap = function wrap(pos) {\n    return [\n        Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)\n    ];\n};\n\nGame.prototype.isOutOfBounds = function (pos) {\n    return (pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y );\n}\n\nGame.prototype.checkCollisions = function () {\n    const allObjects = this.allObjects();\n\n    for (let i = 0; i < allObjects.length; i++) {\n        for (let j = i+1; j < allObjects.length; j++) { \n            if (allObjects[i].isCollidedWith(allObjects[j])) {\n                allObjects[i].collideWith(allObjects[j]);\n            };\n        };\n    };\n}\n\nGame.prototype.step = function () {\n    this.moveObjects();\n    this.checkCollisions();\n}\n\nGame.prototype.remove = function (obj) {\n    if (obj instanceof Asteroid){\n        let idx = this.asteroids.indexOf(obj);\n        if (idx > -1) {\n            this.asteroids.splice(idx, 1);\n        };\n    };\n    if (obj instanceof Bullet) {\n        let idx = this.bullets.indexOf(obj);\n        if (idx > -1) {\n            this.bullets.splice(idx, 1);\n        };\n    };\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n    this.ship = this.game.addShip();\n}\n\nGameView.MOVES = {\n    w: [0, -1],\n    a: [-1, 0],\n    s: [0, 1],\n    d: [1, 0],\n};\n\nGameView.prototype.start = function () {\n    this.bindKeyHandlers();\n    setInterval(() => {\n        this.game.step();\n        this.game.draw(this.ctx);\n    }, 20);\n}\n\nGameView.prototype.bindKeyHandlers = function () {\n    const ship = this.ship;\n\n    Object.keys(GameView.MOVES).forEach(function (k) {\n        const move = GameView.MOVES[k];\n        key(k, function () { ship.power(move); });\n    });\n\n    key('space', function () { ship.fireBullet(); });\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.GameView = GameView;\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    console.log('DOM fully loaded and parsed');\n    canvas = document.getElementById(\"game-canvas\");\n    ctx = canvas.getContext(\"2d\");\n    \n    const game = new Game();\n    new GameView(game, ctx).start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// const Game = require(\"./game\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction MovingObject (options) {\n    this.pos = options['pos'];\n    this.vel = options['vel'];\n    this.radius = options['radius'];\n    this.color = options['color'];\n    this.game = options['game'];\n}\n\nMovingObject.prototype.isWrappable = true;\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n    );\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function () {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    if (this.game.isOutOfBounds(this.pos) && !this.isWrappable) {\n        this.game.remove(this);\n    } else {\n        this.pos = this.game.wrap(this.pos);\n    };\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    let disBetween = Math.sqrt(((otherObject.pos[0]-this.pos[0])**2)+((otherObject.pos[1]-this.pos[1])**2));\n    return (disBetween < (this.radius + otherObject.radius));\n}\n\nMovingObject.prototype.collideWith = function (otherObject) {\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nconst SHIP_DEFAULTS = {\n    COLOR: \"#5203fc\",\n    RADIUS: 15,\n    SPEED: 0\n};\n\nfunction Ship (options) {\n    options = options || {};\n    options.color = SHIP_DEFAULTS.COLOR;\n    options.pos = options.pos || options.game.randomPosition();\n    options.radius = SHIP_DEFAULTS.RADIUS;\n    options.vel = Util.randomVec(SHIP_DEFAULTS.SPEED);\n\n    console.log(options);\n    MovingObject.call(this, options);\n};\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function () {\n    this.pos = this.game.randomPosition();\n    this.vel = Util.randomVec(SHIP_DEFAULTS.SPEED);\n}\n\nShip.prototype.power= function (impulse) {\n    this.vel[0] += impulse[0];\n    this.vel[1] += impulse[1];\n}\n\nShip.prototype.fireBullet = function () {\n    let bulletVel = [(this.vel[0] * Bullet.SPEED), (this.vel[1] * Bullet.SPEED)];\n    let bullet = new Bullet({ game: this.game, vel: bulletVel, pos: this.pos});\n    this.game.bullets.push(bullet);\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n\n    inherits: function inherits(childClass, parentClass) {\n        childClass.prototype = Object.create(parentClass.prototype);\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec: function randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    // Scale the length of a vector by the given amount.\n    scale: function scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n\n    wrap: function wrap(coord, max) {\n        if (coord < 0) {\n            return max - (coord % max);\n        } else if (coord > max) {\n            return coord % max;\n        } else {\n            return coord;\n        }\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;