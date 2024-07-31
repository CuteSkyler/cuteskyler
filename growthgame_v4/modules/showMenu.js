let open = false;

function showMenu(){

    document.querySelector('#muscle p').innerHTML = regimen.muscle;
    document.querySelector('#money p').innerHTML = regimen.money;
    document.querySelector('#length p').innerHTML = regimen.height%100===0?`${regimen.height/100}.00`:regimen.height/100;
    document.querySelector('#intelligence p').innerHTML = regimen.intelligence;
    document.querySelector('#FAGGOT p').innerHTML = regimen.energy;

    if(open){
        document.querySelector('#stats').style.animation = 'show 250ms ease-in reverse forwards';
        setTimeout(()=>{
            document.querySelector('#stats').style.animation = '';
            document.querySelector('#stats').style.left = '-100%';
        },250);
        open = false;
        return;
    };
    document.querySelector('#stats').style.animation = 'show 250ms ease-out forwards';
    setTimeout(()=>{
        document.querySelector('#stats').style.animation = '';
        document.querySelector('#stats').style.left = '0%';
    },250);
    open = true;
    return;
};