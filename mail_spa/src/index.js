
window.addEventListener('DOMContentLoaded', (event) => {

    const sidebarNavLi = document.querySelectorAll(".sidebar-nav li");
    sidebarNavLi.forEach( li => {
        li.addEventListener('click', (event) => {
            window.location.hash = li.innerText.toLowerCase();
        });
    });
    
});