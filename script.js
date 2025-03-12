document.addEventListener("DOMContentLoaded", function() {
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navigbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});
