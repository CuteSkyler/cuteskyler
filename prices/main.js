const sheet = document.querySelector('div#sheet div#main');
const gals = document.querySelectorAll('div#sheet div.gal');
const grid = document.querySelector('div#sheet div#grid');

const FACTOR = 50;
const SHEETFACTOR = 25;
const GRIDFACTOR = 9;

function setTurn(x, y){
    let width = window.innerWidth;
    let calcX = Math.floor((x / width * 100)*100)/100;
    let calcY = Math.floor((y / width * 100)*100)/100;
    if(calcX <= 50){
        calcX = Math.floor(((-1 * calcX + 50) * -1)*100)/100;
    };
    if(calcX >= 50){
        calcX = Math.floor((calcX - 50)*100)/100;
    };
    if(calcY <= 50){
        calcY = Math.floor(((-1 * calcY + 50) * -1)*100)/100;
    };
    if(calcY >= 50){
        calcY = Math.floor((calcY - 50)*100)/100;
    };
    sheet.style.transform = `rotateY(${calcX/SHEETFACTOR}deg) rotateX(${calcY*-1/SHEETFACTOR}deg)`;
    gals[0].style.transform = `rotateY(${calcX*-1/FACTOR}deg) rotateX(${calcY/FACTOR}deg) translateX(-10%) translateY(10%) scale(-1.05, 1.05)`;
    gals[1].style.transform = `rotateY(${calcX*-1/FACTOR}deg) rotateX(${calcY/FACTOR}deg) translateX(10%) translateY(10%) scale(1.05)`;
    grid.style.transform= `rotateX(${calcY/10+80}deg) translateX(-25%)`
};

document.body.addEventListener('mousemove', e=>{
    setTurn(e.clientX, e.clientY);
});