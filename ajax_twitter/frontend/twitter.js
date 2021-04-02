const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');
const TweetCompose = require('./tweet_compose');
const InfiniteTweets = require('./infinite_tweets');

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