var slideIndex = 1;


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    console.log(n)
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("dot");
    document.body.classList.remove("nofilter")
    document.body.classList.add("filter")
    document.getElementById("slideshow-container").style.visibility = "visible";

    if (n > slides.length) { slideIndex = 1 }

    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" activeSlide", "");
    // }

    slides[slideIndex - 1].style.display = "flex";
    // dots[slideIndex - 1].className += " activeSlide";
}

document.addEventListener('click', function (element) {
    if (element.target === document.body) {
        document.getElementById("slideshow-container").style.visibility = "hidden";
        document.body.classList.add("nofilter")
        document.body.classList.remove("filter")
    }
});