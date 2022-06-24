const sheet = document.querySelector('div#sheet div#main');
const gals = document.querySelectorAll('div#sheet div.gal');

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
    sheet.style.transform = `rotateY(${calcX/10}deg) rotateX(${calcY*-1/10}deg)`;
    gals[0].style.transform = `rotateY(${calcX/50}deg) rotateX(${calcY*-1/50}deg) translateX(-10%) translateY(10%) scale(-1.05, 1.05)`;
    gals[1].style.transform = `rotateY(${calcX/50}deg) rotateX(${calcY*-1/50}deg) translateX(10%) translateY(10%) scale(1.05)`;
};

document.body.addEventListener('mousemove', e=>{
    setTurn(e.clientX, e.clientY);
});