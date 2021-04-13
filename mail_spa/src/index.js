const Router = require("./router");
const Inbox = require("./inbox");
const Sent = require("./sent");
const Compose = require("./compose");

const ROUTES = {
    'inbox': Inbox,
    'sent': Sent,
    'compose': Compose
}


window.addEventListener('DOMContentLoaded', (event) => {

    const content = document.querySelectorAll(".content");
    const router = new Router(content[0], ROUTES);
    router.start();

    window.location.hash = "#inbox";

    const sidebarNavLi = document.querySelectorAll(".sidebar-nav li");
    sidebarNavLi.forEach( li => {
        li.addEventListener('click', (event) => {
            window.location.hash = li.innerText.toLowerCase();
        });
    });

});