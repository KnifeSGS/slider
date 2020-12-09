'use strict';

let slideIndex = 1;
const container = document.querySelector('.slideshow__container');
const btns = document.querySelector('.slideshow__buttons');
const slides = document.querySelectorAll('slides');
const backBtn = document.querySelector('button__left');
const fwdBtn = document.querySelector('button__right')
const indicator = document.querySelector('.slideshow__indicator');
let imgObj = {
    1: 'Patak',
    2: 'Lebegő levél',
    3: 'Levendula',
    4: 'Rét',
    5: 'Gomba',
    6: 'Fenyő',
    7: 'Toboz',
    8: 'Tűzhal',
};
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

/* const chooseImg = () => {
    for (let k in imgObj) {
        const slideTemplate = `
        <div class="slides effect">
            <div class="slides__counter">${k} / ${slides.length}</div>
            <img src="./img/${k}.jpg" alt="${imgObj[k]}" style="width: 100%;">
            <div class="slide__caption">${imgObj[k]}</div>
        </div>
        `;
        btns.insertAdjacentHTML('beforeBegin', slideTemplate)
        // return slideTemplate;
    }
} */
const chooseImg = () => {
    for (let i = 0; i < imgArr.length; i += 1) {
        const slideTemplate = `
        <div class="slides effect">
            <div class="slides__counter">${i+1} / ${imgArr.length}</div>
            <img src="./img/${i+1}.jpg" alt="${imgArr[i]}" style="width: 100%;">
            <div class="slide__caption">${imgArr[i]}</div>
        </div>
        `;
        btns.insertAdjacentHTML('beforeBegin', slideTemplate)
    }
}



const plusSlides = () => {
    slideIndex += 1;
};

/* const createAnyElement = (name, attribValue1, attribValue2) => {
    let element = document.createElement(name);
    element.setAttribute('class', attribValue1);
    element.setAttribute('class', attribValue2);
    // container.appendChild(element);
    return element;
}
 */

const playSlides = (frameTime, imgHeight) => {
    chooseImg()
};

playSlides();



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