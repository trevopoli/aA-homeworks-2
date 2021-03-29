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