const APIUtil = require('./api_util');

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