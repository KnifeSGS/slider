'use strict';

let slideIndex = 1;


const plusSlides = (n) => {
    showSlides(slideIndex += n);
};

const currentSlide = (n) => {
    showSlides(slideIndex = n);
};

const showSlides = (n) => {
    const slides = document.getElementsByClassName('slides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i += 1) {
        slides[i].style.display = 'none';
    }

    slideIndex += 1;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = 'flex';
    setTimeout(showSlides, 2000);   

    for (let i = 0; i < dots.length; i += 1) {
        dots[i].classList.toggle('active');
    }
    slides[slideIndex-1].style.display = 'flex';
    dots[slideIndex-1].classList.toggle('active')
}

showSlides(slideIndex);