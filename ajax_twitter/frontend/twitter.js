const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');

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