window.onscroll = function () {
    addStickyClassToNavbar();
}

const navbar = document.querySelector(".nav");

const navbarOffsetPosition = navbar.offsetTop;

function addStickyClassToNavbar() {
    if (window.pageYOffset > navbarOffsetPosition) {
        document.body.style.paddingTop = navbar.offsetHeight + 'px';
        navbar.classList.add("sticky")
    } else {
        document.body.style.paddingTop = 0;
        navbar.classList.remove("sticky")
    }
}