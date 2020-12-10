'use strict';

const container = document.querySelector('.slideshow__container');
let slides;
let dots;
let inter;
const btns = document.querySelector('.slideshow__buttons');
const backBtn = document.querySelector('.button__left');
const fwdBtn = document.querySelector('.button__right')
const indicator = document.querySelector('.slideshow__indicator');
const images = document.querySelectorAll('.image');
let slideIndex = 0;
let imgArr = [
    'Patak',
    'Lebegő levél',
    'Levendula',
    'Rét',
    'Gomba',
    'Fenyő',
    'Toboz',
    'Tűzhal',
];

const chooseImg = (imgHeight) => {
    let size;
    if (imgHeight) {
        size = imgHeight;
    } else {
        size = 'auto';
    }
    for (let i = 0; i < imgArr.length; i += 1) {
        const slideTemplate = `
        <div class="slides">
            <div class="slides__counter">${i+1} / ${imgArr.length}</div>
            <img src="./img/${i+1}.jpg" alt="${imgArr[i]}" style="width: 100%; height: ${size};" class="image">
            <div class="slide__caption">${imgArr[i]}</div>
        </div>
        `;
        const indicatorTemplate = `
            <div class="dot ${i+1}"></div>
        `
        btns.insertAdjacentHTML('beforeBegin', slideTemplate);
        indicator.insertAdjacentHTML('beforeEnd', indicatorTemplate);
    }
}

const showImg = () => {
    slides = document.querySelectorAll('.slides');
    dots = document.querySelectorAll('.dot');
    for (let i = 0; i < slides.length; i += 1) {
        slides[i].classList.remove('effect');
    }
    slideIndex += 1;
    if (slideIndex > slides.length) {slideIndex = 1};
    for (let j = 0; j < dots.length; j += 1) {
        dots[j].classList.remove('active')
    }
    slides[slideIndex-1].classList.add('effect');
    dots[slideIndex-1].classList.add('active')
}

const shiftImg = () => {
    backBtn.addEventListener('click', () => {
        slideIndex -= 2;
        showImg();
    })
    fwdBtn.addEventListener('click', () => {
        showImg();
    })
}

const changeImgByDots = () => {
    dots = document.querySelectorAll('.dot');
    dots.forEach(item => item.addEventListener('click', () => {
        item.classList.add('effect')
    }))
}

const playSlides = (frameTime, imgHeight) => {
    chooseImg(imgHeight);
    shiftImg();
    changeImgByDots();
    showImg();
    setInterval(showImg, frameTime);
};

playSlides(2000, '400px');

/* const showSlides = (n) => {
    // const slides = document.getElementsByClassName('slides');
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

showSlides(slideIndex); */