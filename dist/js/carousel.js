// elements for image slider
const slides = document.querySelectorAll(".slide");
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    const darkenImg = document.querySelector('.darken-img');
    // remove current class
    darkenImg.classList.remove("darken-img");
    current.classList.remove("current");
    // check if there's a sibling slide element
    if (current.nextElementSibling && darkenImg.nextElementSibling) {
        // add current class to next sibling
        darkenImg.nextElementSibling.classList.add("darken-img")
        current.nextElementSibling.classList.add("current")
    } else {
        // add current class to first slide
        slides[0].classList.add("darken-img")
        slides[0].classList.add("current")
    }
    setTimeout(() => darkenImg.classList.remove("darken-img"));
    setTimeout(() => current.classList.remove("current"));
}

//  run next slide function at interval time
slideInterval = setInterval(nextSlide, intervalTime)





