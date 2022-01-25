const partOneTime = 13000;
const partTwoTime = 1000;


window.onload = () => {
    setTimeout(partOne, partOneTime);
    setTimeout(appeal, partOneTime);
    setTimeout(partTwo, 10);
}


const partOne = () => {
    const partOneBloks = document.querySelectorAll('.part-one');
    partOneBloks.forEach(el => {
        const interval1 =  setInterval(() => {
            toDown(el);
        }, 100);

        setTimeout(() => {
           clearInterval(interval1) 
        }, 35000);
    });
}


const appeal = () => {
    const appealBlok = document.querySelector('.appeal');
    appealBlok.style.right = `${((window.innerWidth - window.innerWidth * 0.2) /2) * -1}px`;
}

const partTwo = () => {
    const partTwoBloks = document.querySelectorAll('.part-two');
    partTwoBloks.forEach(el => {
        setInterval(() => {
            toUp(el);
        }, 500);

    });
}


let toDawnCss = 0;
const toDown = (el) => {
    if (toDawnCss >= -1400) {
        toDawnCss--;
        el.style.bottom = `${toDawnCss}px`;
    } else {
        el.style.bottom = `none`;
        return;
    }
}

let toUpCss= -499;
const toUp = el => {
    if (toUpCss <= 1401) {
        toUpCss++;
        el.style.bottom = `${toUpCss}px`;
    } else {
        return;
    }
}