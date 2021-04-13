const MessageStore = require("./message_store");

class Compose {
    constructor (){
    }

    render() {
        const div = document.createElement("div");
        div.className = "new-message";
        div.innerHTML = this.renderForm();

        div.addEventListener('change', event => {
            let target = event.target;
            MessageStore.updateDraftField(target.name, target.value);
        });

        div.addEventListener('submit', event => {
            event.preventDefault();
            MessageStore.sendDraft();
            window.location.hash = "#inbox";
        });

        return div;
    }

    renderForm() {
        let currentMessage = MessageStore.getMessageDraft();
        let html = `
        <p class="new-message-header">New Message</p>
        <form class="compose-form">
        <input
        placeholder='Recipient'
        name='to'
        type="text"
        value='${currentMessage.to}'>

        <input
        placeholder='Subject'
        name='subject'
        type="text"
        value='${currentMessage.subject}'>

        <textarea
        name='body'
        rows='20'>${currentMessage.body}</textarea>

        <button type="submit" class="btn btn-primary submit-message">Send</button>
        </form>
        `;
        return html;
    }
}

module.exports = Compose;