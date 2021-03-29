const APIUtil = require('./api_util');

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