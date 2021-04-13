const MessageStore = require("./message_store");

class Sent {
    constructor() {
    }

    render() {
        const messagesUl = document.createElement("messagesUl");
        messagesUl.className = "messages";

        const messages = MessageStore.getSentMessages();

        messages.forEach(message => {
            let messageNode = this.renderMessage(message);
            messagesUl.appendChild(messageNode);
        })

        return messagesUl;
    }

    renderMessage(message) {
        const liNode = document.createElement("li");
        liNode.className = "message";
        liNode.innerHTML = `<span class="from">${message.to}</span>
                            <span class="subject">${message.subject}</span>
                            <span class="body">${message.body}</span>
                            `;

        return liNode;
    }
}

module.exports = Sent;