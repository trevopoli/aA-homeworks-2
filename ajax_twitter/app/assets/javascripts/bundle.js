/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        this.render();
        this.handleClick();
    }

    render() {
        if (this.followState === "followed") {
            this.$el.text("Unfollow!")
        } else {
            this.$el.text("Follow!")
        }
    };

    handleClick() {
        this.$el.on("click", event => {
            const followToggle = this;

            event.preventDefault();

            if (this.followState === "unfollowed"){
                $.ajax({
                    type: 'POST',
                    url: `/users/${this.userId}/follow`,
                    dataType: 'json',
                    success(response){
                        followToggle.followState = "followed";
                        followToggle.render();
                    }
                });
            } else if (this.followState === "followed"){
                $.ajax({
                    type: 'DELETE',
                    url: `/users/${this.userId}/follow`,
                    dataType: 'json',
                    success(response) {
                        followToggle.followState = "unfollowed";
                        followToggle.render();
                    }
                });
            }
        });
    }
}

module.exports = FollowToggle;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");

$(function () {
    const $followButtons = $('.follow-toggle');
    $followButtons.each( function (idx, el) {
        new FollowToggle(el);
    });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map