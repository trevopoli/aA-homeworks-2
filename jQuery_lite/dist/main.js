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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n    constructor (elArray) {\n        this.elArray = elArray;\n    }\n\n    html (...args) {\n        if(typeof args[0] === \"undefined\") {\n            return this.elArray[0].innerHTML;\n        } else {\n            this.elArray.forEach(el => {\n                el.innerHTML = args[0];\n            });\n        }\n    }\n\n    clear () {\n        this.html(\"\");\n    }\n\n    append (arg) {\n        let argHTML = [];\n\n        if (arg instanceof DOMNodeCollection){\n            arg.elArray.forEach( el => {\n                argHTML.push(el.outerHTML);\n            });\n        } else if (arg instanceof HTMLElement) {\n            argHTML.push(arg.outerHTML);\n        } else {\n            argHTML.push(arg);\n        }\n\n        let allHTML = argHTML.join(\"\");\n        this.elArray.forEach( el => {\n            let elHTML = el.innerHTML;\n            el.innerHTML = elHTML + allHTML;\n        });\n    }\n\n    addClass(className) {\n        this.elArray.forEach( el => {\n            el.classList.add(className);\n        });\n    }\n\n    removeClass(className) {\n        this.elArray.forEach(el => {\n            el.classList.remove(className);\n        });\n    }\n\n    attr(attrName, ...vals){\n        if(vals[0] === undefined) {\n            return this.elArray[0].getAttribute(attrName);\n        } else {\n            this.elArray.forEach( el => {\n                let values = vals.join(\" \");\n                el.setAttribute(attrName, values);\n            });\n        }\n    }\n\n    children() {\n        let childrenArr = [];\n\n        this.elArray.forEach( el => {\n            let childArr = Array.from(el.children);\n            childrenArr = childrenArr.concat(childArr);\n        });\n\n        return new DOMNodeCollection(childrenArr);\n    }\n\n    parent() {\n        let parentArr = [];\n\n        this.elArray.forEach(el => {\n            let parent = el.parentElement;\n            parentArr.push(parent);\n        });\n\n        return new DOMNodeCollection(parentArr);\n    }\n\n    find(nodeName) {\n        let foundNodes = [];\n\n        this.elArray.forEach(el =>  {\n            let nodes = el.querySelectorAll(nodeName);\n            if (nodes.length > 0) {\n                foundNodes = foundNodes.concat(Array.from(nodes));\n            }\n        });\n\n        return new DOMNodeCollection(foundNodes);\n    }\n\n    remove() {\n        this.elArray.forEach(el => {\n            el.parentElement.removeChild(el);\n        });\n    }\n\n    // not handling event delegation\n    on(eventType, callback) {\n        const eventKey = `event-${eventType}`;\n\n        this.elArray.forEach(el => {\n            el.addEventListener(eventType, callback);\n            if (typeof el[eventKey] === \"undefined\") {\n                el[eventKey] = [];\n            }\n            el[eventKey].push(callback);\n        });\n    }\n\n    off(eventType) {\n        const eventKey = `event-${eventType}`;\n\n        this.elArray.forEach(el => {\n            if(el[eventKey]) {\n                el[eventKey].forEach(callback => {\n                    el.removeEventListener(eventType, callback);\n                })}\n                el[eventKey] = [];\n            }\n        );\n    }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nconst _readyCallbacks = [];\n\nwindow.$l = function (arg) {\n    let nodeArray = null;\n\n    if (arg instanceof Function){\n        if (document.readyState === 'complete') {\n            arg();\n        } else {\n            _readyCallbacks.push(arg);\n        }\n    } else {\n        if (arg instanceof HTMLElement) {\n            nodeArray = [arg];\n        } else { \n            nodeArray = Array.from(document.querySelectorAll(arg));\n        }\n\n        const nodeCollection = new DOMNodeCollection(nodeArray);\n        return nodeCollection;\n    }\n}\n\n$l.extend = function (base, ...otherObjects) {\n    otherObjects.forEach((obj) => {\n        for (const property in obj) {\n            base[property] = obj[property];\n        }\n    });\n    return base;\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", function (event) {\n    _readyCallbacks.forEach(callback => callback());\n});\n\n//# sourceURL=webpack:///./src/index.js?");

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