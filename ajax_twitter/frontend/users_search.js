const APIUtil = require("./api_util");
const FollowToggle = require('./follow_toggle');


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