const modal = document.getElementById('myModal');
const images = document.querySelectorAll('.projectImg');
const modalImg = document.getElementById("img01");

images.forEach((item) => {
    item.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    })
})

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
