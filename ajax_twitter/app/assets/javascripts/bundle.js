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
    ),

    createTweet: data => (
        $.ajax({
            type: 'POST',
            url: '/tweets',
            dataType: 'json',
            data: data
        })
    ),

    fetchTweets: data => (
        $.ajax({
            type: 'GET',
            url: '/feed',
            dataType: 'json',
            data: data
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

/***/ "./frontend/infinite_tweets.js":
/*!*************************************!*\
  !*** ./frontend/infinite_tweets.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

class InfiniteTweets {
    constructor(el) {
        this.$el = $(el);
        this.lastCreatedAt = null;

        this.$el.on("click", ".fetch-more", event => {
            this.fetchTweets(event);
        });

        this.$el.on('insert-tweet', event => {
            this.insertTweet(event);
        });
    }

    fetchTweets(event) {
        event.preventDefault();

        const infiniteTweets = this;
        const data = {};
        if (this.lastCreatedAt) {
            data.max_created_at = this.lastCreatedAt
        };

        APIUtil.fetchTweets(data).then((data) => {
            console.log(data);

            infiniteTweets.insertTweets(data);

            if (data.length < 20) {
                infiniteTweets.$el
                    .find('.fetch-more')
                    .replaceWith('<b>No more tweets!</b>');
            }

            if (data.length > 0) {
                infiniteTweets.lastCreatedAt = data[data.length - 1].created_at;
            }

        });
    }

    insertTweet(event, data) {
        this.$el.find('ul.tweets').prepend(this.tweetElement(data));

        if (!this.lastCreatedAt) {
            this.lastCreatedAt = data.created_at;
        }
    }

    insertTweets(data) {
        console.log(data.map(this.tweetElement));
        this.$el.find('ul.tweets').append(data.map(this.tweetElement));
    }

    tweetElement(tweet) {
        const mentions = tweet.mentions.map(mention =>
            `<li class='tweetee'>
                <a href='/users/${mention.user.id}'>@${mention.user.username}</a>
            </li>`)
            .join('');

        const elementString = `
        <div class='tweet'>
            <h3 class='tweeter'>
                <a href='/users/${tweet.user.id}'>
                @${tweet.user.username}
            </a>
            </h3>
      
            <p>${tweet.content}</p>
      
            <ul>Mentions
                ${mentions}
            </ul>
        </div>`

        return $(elementString);
    }
}

module.exports = InfiniteTweets;

/***/ }),

/***/ "./frontend/tweet_compose.js":
/*!***********************************!*\
  !*** ./frontend/tweet_compose.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

class TweetCompose {
    constructor(el) {
        this.$el = $(el);
        this.$mentionedUsersDiv = this.$el.find('.mentioned-users');
        $(".chars-left").text(`140 characters remaining.`);
        this.addHandlers();
    }

    addHandlers() {
        this.$el.on("submit", (event) => {
            event.preventDefault();
            this.submit();
        });

        const $textArea = this.$el.find("textarea")
        $textArea.on("input", (event) => {
            let charsLeft = 140 - $textArea.val().length;
            $(".chars-left").text(`${charsLeft} characters remaining.`);
        });

        this.$el.find('.add-mentioned-user').on(
            'click', this.addMentionedUser.bind(this));

        this.$mentionedUsersDiv.on(
            'click', '.remove-mentioned-user', this.removeMentionedUser.bind(this));
    }

    addMentionedUser(event) {
        event.preventDefault();

        this.$mentionedUsersDiv.append(this.newUserSelect());
    }

    submit (){
        const newTweetData = this.$el.serializeJSON();
        $(":input").attr("disabled", true);

        APIUtil.createTweet(newTweetData).then((response) => {
            // console.log(response);     
            this.handleSuccess(response);
        });
    }

    handleSuccess(response) {
        this.clearInput();
        $(":input").attr("disabled", false);
        
        let $li = $("<li></li>").text(JSON.stringify(response.content));
        $(this.$el.data("tweets-ul")).prepend($li);
    }

    clearInput() {
        this.$el.find("textarea, select").val("");
    }

    newUserSelect() {
        const userOptions = window.users
            .map(user =>
                `<option value='${user.id}'>${user.username}</option>`)
            .join('');

        const html = `
      <div class="tweet-compose-select-mention">
        <select name='tweet[mentioned_user_ids][]'>
          ${userOptions}
        </select>

        <button class='remove-mentioned-user'>Remove</button>
      </div>`;

        return $(html);
    }

    removeMentionedUser(event) {
        event.preventDefault();
        $(event.currentTarget).parent().remove();
    }

}

module.exports = TweetCompose;

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
const TweetCompose = __webpack_require__(/*! ./tweet_compose */ "./frontend/tweet_compose.js");
const InfiniteTweets = __webpack_require__(/*! ./infinite_tweets */ "./frontend/infinite_tweets.js");

$(function () {

    const $followButtons = $('.follow-toggle');
    $followButtons.each( function (idx, el) {
        new FollowToggle(el);
    });

    const $usersSearch = $('.users-search');
    $usersSearch.each( function (idx, el) {
        new UsersSearch(el);
    });

    const $tweetCompose = $('.tweet-compose');
    $tweetCompose.each(function (idx, el) {
        new TweetCompose(el);
    });

    const $infiniteTweets = $('.infinite-tweets');
    $infiniteTweets.each(function (idx, el) {
        new InfiniteTweets(el);
    });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map