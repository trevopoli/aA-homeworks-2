const APIUtil = require('./api_util');

class TweetCompose {
    constructor(el) {
        this.$el = $(el);
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

}

module.exports = TweetCompose;