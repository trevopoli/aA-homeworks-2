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

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MessageStore = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\");\n\nclass Inbox {\n    constructor () {\n    }\n\n    render () {\n        const messagesUl = document.createElement(\"messagesUl\");\n        messagesUl.className = \"messages\";\n\n        const messages = MessageStore.getInboxMessages();\n\n        messages.forEach( message => {\n            let messageNode = this.renderMessage(message);\n            messagesUl.appendChild(messageNode);\n        })\n\n        return messagesUl;\n    }\n\n    renderMessage (message) {\n        const liNode = document.createElement(\"li\");\n        liNode.className = \"message\";\n        liNode.innerHTML = `<span class=\"from\">${message.from}</span>\n                            <span class=\"subject\">${message.subject}</span>\n                            <span class=\"body\">${message.body}</span>\n                            `;\n\n        return liNode;\n    }\n}\n\nmodule.exports = Inbox;\n\n//# sourceURL=webpack://mail_spa/./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! ./router */ \"./src/router.js\");\nconst Inbox = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\nconst Sent = __webpack_require__(/*! ./sent */ \"./src/sent.js\");\n\nconst ROUTES = {\n    'inbox': Inbox,\n    'sent': Sent\n}\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n\n    const content = document.querySelectorAll(\".content\");\n    const router = new Router(content[0], ROUTES);\n    router.start();\n\n    window.location.hash = \"#inbox\";\n\n    const sidebarNavLi = document.querySelectorAll(\".sidebar-nav li\");\n    sidebarNavLi.forEach( li => {\n        li.addEventListener('click', (event) => {\n            window.location.hash = li.innerText.toLowerCase();\n        });\n    });\n\n});\n\n//# sourceURL=webpack://mail_spa/./src/index.js?");

/***/ }),

/***/ "./src/message_store.js":
/*!******************************!*\
  !*** ./src/message_store.js ***!
  \******************************/
/***/ ((module) => {

eval("let messages = {\n    sent: [\n        {\n            to: \"friend@mail.com\",\n            subject: \"Check this out\",\n            body: \"It's so cool\"\n        },\n        {\n            to: \"person@mail.com\",\n            subject: \"zzz\",\n            body: \"so borrrring\" \n        }\n    ],\n    inbox: [\n        {\n            from: \"grandma@mail.com\",\n            subject: \"Fwd: Fwd: Fwd: Check this out\",\n            body:\n                \"Stay at home mom discovers cure for leg cramps. Doctors hate her\"\n        },\n        {\n            from: \"person@mail.com\",\n            subject: \"Questionnaire\",\n            body: \"Take this free quiz win $1000 dollars\"\n        }\n    ]\n};\n\nconst MessageStore = {\n    'getInboxMessages': function () {\n        return messages.inbox;\n    },\n    'getSentMessages': function () {\n        return messages.sent;\n    }\n};\n\nmodule.exports = MessageStore;\n\n//# sourceURL=webpack://mail_spa/./src/message_store.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((module) => {

eval("\nconst Router = function (node, routes) {\n    this.node = node;\n    this.routes = routes;\n}\n\nRouter.prototype.start = function () {\n    this.render();\n\n    window.addEventListener(\"hashchange\", event => {\n        this.render();\n    });\n}\n\nRouter.prototype.activateRoute = function () {\n    let hashName = window.location.hash.substring(1);\n    let component = this.routes[hashName];\n    return component;\n}\n\nRouter.prototype.render = function () {\n    const component = this.activateRoute();\n    this.node.innerHTML = \"\";\n    if (component) {\n        comp = new component\n        this.node.appendChild(comp.render());\n    }\n}\n\nmodule.exports = Router;\n\n//# sourceURL=webpack://mail_spa/./src/router.js?");

/***/ }),

/***/ "./src/sent.js":
/*!*********************!*\
  !*** ./src/sent.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MessageStore = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\");\n\nclass Sent {\n    constructor() {\n    }\n\n    render() {\n        const messagesUl = document.createElement(\"messagesUl\");\n        messagesUl.className = \"messages\";\n\n        const messages = MessageStore.getSentMessages();\n\n        messages.forEach(message => {\n            let messageNode = this.renderMessage(message);\n            messagesUl.appendChild(messageNode);\n        })\n\n        return messagesUl;\n    }\n\n    renderMessage(message) {\n        const liNode = document.createElement(\"li\");\n        liNode.className = \"message\";\n        liNode.innerHTML = `<span class=\"from\">${message.to}</span>\n                            <span class=\"subject\">${message.subject}</span>\n                            <span class=\"body\">${message.body}</span>\n                            `;\n\n        return liNode;\n    }\n}\n\nmodule.exports = Sent;\n\n//# sourceURL=webpack://mail_spa/./src/sent.js?");

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