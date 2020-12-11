import {chooseImg, shiftImg, changeImgByDots, showImg} from './moduls.js'

const playSlides = (frameTime, imgHeight) => {
    chooseImg(imgHeight);
    shiftImg();
    changeImgByDots();
    showImg();
    setInterval(showImg, frameTime);
};

playSlides(2000, '600px');