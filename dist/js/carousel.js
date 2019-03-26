// elements for image slider
const slides = document.querySelectorAll(".slide");
const intervalTime = 5000;
let slideInterval;

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

//  run next slide function at interval time
slideInterval = setInterval(nextSlide, intervalTime)





