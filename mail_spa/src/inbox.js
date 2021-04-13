const MessageStore = require("./message_store");

class Inbox {
    constructor () {

    }

    render () {
        const messagesUl = document.createElement("messagesUl");
        messagesUl.className = "messages";

        const messages = MessageStore.getInboxMessages();

        messages.forEach( message => {
            let messageNode = this.renderMessage(message);
            messagesUl.appendChild(messageNode);
        })

        return messagesUl;
    }

    renderMessage (message) {
        const liNode = document.createElement("li");
        liNode.className = "message";
        liNode.innerHTML = `<span class="from">${message.from}</span>
                            <span class="subject">${message.subject}</span>
                            <span class="body">${message.body}</span>
                            `;

        return liNode;
    }
}

module.exports = Inbox;