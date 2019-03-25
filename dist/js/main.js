// elements for image slider
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

// elements for mobile nav menu


const nextSlide = () => {
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove("current");
    // check if there's a sibling slide element
    if (current.nextElementSibling) {
        // add current class to next sibling
        current.nextElementSibling.classList.add("current")
    } else {
        // add current class to first slide
        slides[0].classList.add("current")
    }
    setTimeout(() => current.classList.remove("current"));
}

const prevSlide = () => {
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove("current");
    // check if there's a sibling slide element
    if (current.previousElementSibling) {
        // add current class to previous sibling
        current.previousElementSibling.classList.add("current")
    } else {
        // add current class to last slide
        slides[slides.length - 1].classList.add("current")
    }
    setTimeout(() => current.classList.remove("current"));
}

next.addEventListener("click", e => {
    nextSlide();
    // reset the interval once the arrow has been clicked to move to next image
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener("click", e => {
    prevSlide();
    // reset the interval once the arrow has been clicked to move to prev image
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

if (auto) {
    //  run next slide function at interval time
    slideInterval = setInterval(nextSlide, intervalTime)
}