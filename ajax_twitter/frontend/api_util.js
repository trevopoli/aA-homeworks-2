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