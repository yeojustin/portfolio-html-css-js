function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Typed.js
    var typed = new Typed(".auto-type", {
        strings: ["Software Engineer", "ML Engineer", "Tech Nerd"],
        typeSpeed: 80,
        backSpeed: 20,
        loop: true
    });
});