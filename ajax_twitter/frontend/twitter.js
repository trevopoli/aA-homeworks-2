const FollowToggle = require('./follow_toggle');

$(function () {
    const $followButtons = $('.follow-toggle');
    $followButtons.each( function (idx, el) {
        new FollowToggle(el);
    });
});