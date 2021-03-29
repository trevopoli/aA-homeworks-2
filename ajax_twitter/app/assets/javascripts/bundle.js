/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const APIUtil = {

    followUser: id => APIUtil.changeFollowStatus(id, 'POST'),

    unfollowUser: id => APIUtil.changeFollowStatus(id, 'DELETE'),

    changeFollowStatus: (id, method) => (
        $.ajax({
            type: method,
            url: `/users/${id}/follow`,
            dataType: 'json'
        })
    ),

    searchUsers: query => (
        $.ajax({
            type: 'GET',
            url: '/users/search',
            dataType: 'json',
            data: {query}
        })
    )
};

module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        this.render();
        this.handleClick();
    }

    render() {
        switch (this.followState) {
            case 'followed':
                this.$el.prop('disabled', false);
                this.$el.text("Unfollow!");
                break;
            case 'unfollowed':
                this.$el.prop('disabled', false);
                this.$el.text("Follow!");
                break;
            case 'following':
                this.$el.prop('disabled', true);
                this.$el.text("Following...");
                break;
            case 'unfollowing':
                this.$el.prop('disabled', true);
                this.$el.text("Unfollowing...");
                break;
        }
    };

    handleClick() {
        this.$el.on("click", event => {
            const followToggle = this;

            event.preventDefault();

            if (this.followState === "unfollowed"){
                this.followState = "following";
                this.render();
                APIUtil.followUser(followToggle.userId).then(() => {
                    followToggle.followState = "followed";
                    followToggle.render();
                });
            } else if (this.followState === "followed"){
                this.followState = "unfollowing";
                this.render();
                APIUtil.unfollowUser(followToggle.userId).then(() => {
                    followToggle.followState = "unfollowed";
                    followToggle.render();
                });
            }
        });
    }
}

module.exports = FollowToggle;

/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");


class UsersSearch {
    constructor (el) {
        this.$el = $(el);
        this.$input = this.$el.find('input[name=username]');
        this.$ul = this.$el.find("ul.users");
        this.handleInput();
    }

    handleInput() {
        const userSearch = this;

        this.$el.on("input", function () {
            console.log(userSearch.$input.val());
            APIUtil.searchUsers(userSearch.$input.val()).then((users)=>{
                userSearch.renderResults(users);
            });
        });
    }

    renderResults(users) {
        this.$ul.empty();

        for (let i = 0; i < users.length; i++) {
            const user = users[i];

            let $a = $('<a></a>');
            $a.text(`${user.username}`);
            $a.attr('href', `${user.id}`);

            let $li = $('<li></li>');
            $li.addClass("user");
            $li.append($a);

            let $followButton = $('<button></button');
            $followButton.data('user-id', `${user.id}`);
            $followButton.data('initial-follow-state', user.followed ? 'followed' : 'unfollowed');
            new FollowToggle($followButton);

            $li.append($followButton);

            this.$ul.append($li);
        }
    }
}

module.exports = UsersSearch;

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
const UsersSearch = __webpack_require__(/*! ./users_search */ "./frontend/users_search.js");

$(function () {

    const $followButtons = $('.follow-toggle');
    $followButtons.each( function (idx, el) {
        new FollowToggle(el);
    });

    const $usersSearch = $('.users-search');
    $usersSearch.each( function (idx, el) {
        new UsersSearch(el);
    });

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map