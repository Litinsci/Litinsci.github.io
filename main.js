const partOneTime = 10000;
const appealTime = 10000;
const partTwoTime = 1000;


window.onload = () => {
    setTimeout(partOne, partOneTime);
    setTimeout(appeal, appealTime);
    setTimeout(partTwo, 10);

}


const partOne = () => {
    // const partOneBloks = document.querySelectorAll('.part-one');
    // partOneBloks.forEach(el => {
    //     el.style.bottom = '-1400px';
    // });

    // setTimeout(()=>{
    //     partOneBloks.forEach(el => {
    //         el.style.display = 'none';
    //     });
    // }, partTwoTime);

    // 
    const partOneBloks = document.querySelectorAll('.part-one');
    partOneBloks.forEach(el => {
        const interval1 =  setInterval(() => {
            toDown(el);
        }, 100);

        setTimeout(() => {
           clearInterval(interval1) 
        }, 30000);
    });
}

const appeal = () => {
    const appealBlok = document.querySelector('.appeal');
    appealBlok.style.right = '-450px';
}

const partTwo = () => {
    const partTwoBloks = document.querySelectorAll('.part-two');
    partTwoBloks.forEach(el => {
        // el.style.bottom = '1500px';
        setInterval(() => {
            toUp(el);
        }, 500);

        // setTimeout(() => {
        //    clearInterval(interval1) 
        // }, 30000);
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

let toUpCss= -500;
const toUp = el => {
    if (toUpCss <= 1400) {
        toUpCss=toUpCss + 1;
        el.style.bottom = `${toUpCss}px`;
    } else {
        return;
    }
}