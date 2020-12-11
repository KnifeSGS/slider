'use strict';

const container = document.querySelector('.slideshow__container');
let slides;
let dots;
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

export const chooseImg = (imgHeight) => {
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

export const showImg = () => {
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

export const shiftImg = () => {
    backBtn.addEventListener('click', () => {
        slideIndex -= 2;
        showImg();
    })
    fwdBtn.addEventListener('click', () => {
        showImg();
    })
}

export const changeImgByDots = () => {
    dots = document.querySelectorAll('.dot');
    dots.forEach(item => item.addEventListener('click', () => {
        switch (item.className) {
            case 'dot 1':
                slideIndex = 0;
                showImg();
                break;
            case 'dot 2':
                slideIndex = 1;
                showImg();
                break;
            case 'dot 3':
                slideIndex = 2;
                showImg();
                break;
            case 'dot 4':
                slideIndex = 3;
                showImg();
                break;
            case 'dot 5':
                slideIndex = 4;
                showImg();
                break;
            case 'dot 6':
                slideIndex = 5;
                showImg();
                break;
            case 'dot 7':
                slideIndex = 6;
                showImg();
                break;
            case 'dot 8':
                slideIndex = 7;
                showImg();
                break;
        }
    }))
}