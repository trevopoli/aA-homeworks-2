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