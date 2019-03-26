// elements for mobile nav menu
const burger = document.querySelector(".nav-burger");
const nav = document.querySelector(".nav-links-container");
const navLinks = document.querySelectorAll(".nav-item");

// toggle the mobile nav
const navSlide = () => {
    nav.classList.toggle("mobile-nav-active");
    // animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .4}s`;
        }
    })
    burger.classList.toggle('burger-toggle');
}
burger.addEventListener('click', navSlide);