'use strict';

const btns = document.querySelector('.slideshow__buttons');
const indicator = document.querySelector('.slideshow__indicator');
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