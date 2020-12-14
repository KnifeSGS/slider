import {shiftImg, changeImgByDots, showImg} from './moduls.js'
import {chooseImg} from './images.js'

const playSlides = (frameTime, imgHeight) => {
    chooseImg(imgHeight);
    shiftImg();
    changeImgByDots();
    showImg();
    setInterval(showImg, frameTime);
};

playSlides(2000, '600px');