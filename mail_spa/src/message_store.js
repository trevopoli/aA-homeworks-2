let messages = {
    sent: [
        {
            to: "friend@mail.com",
            subject: "Check this out",
            body: "It's so cool"
        },
        {
            to: "person@mail.com",
            subject: "zzz",
            body: "so borrrring" 
        }
    ],
    inbox: [
        {
            from: "grandma@mail.com",
            subject: "Fwd: Fwd: Fwd: Check this out",
            body:
                "Stay at home mom discovers cure for leg cramps. Doctors hate her"
        },
        {
            from: "person@mail.com",
            subject: "Questionnaire",
            body: "Take this free quiz win $1000 dollars"
        }
    ]
};

const MessageStore = {
    getInboxMessages() {
        return messages.inbox;
    },
    getSentMessages() {
        return messages.sent;
    },
    updateDraftField(field, value) {
        messageDraft[field] = value;
    },
    sendDraft() {
        messages.sent.push(messageDraft);
        messageDraft = new Message();
        localStorage.setItem('messages', JSON.stringify(messages));
    },
    getMessageDraft(){
        return messageDraft;
    }
};

const user = "justatest@gmail.com"

class Message {
    constructor (from = user, to = "", subject = "", body = "") {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.body = body;
    }

}

let messageDraft = new Message();

module.exports = MessageStore;