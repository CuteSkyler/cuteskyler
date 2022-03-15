var yourname = "Vanessa";
var startup = true;
var stage = 0;
var multiplier = 1;
var sizemulti = 1;
var weather = [
    "sunny",
    "cloudy",
    "bright",
    "rainy",
    "thunder",
    "snowy",
    "calm"
]
var extrabits = [
    "perfect to go and work out!",
    "quite nice to go have a stroll right now.",
    "quite nice to go and relax outside.",
    "it'd might be better to stay inside.",
    "it'd be best to stay inside and work out.",
    "it's a tad too cold for my liking.",
    "nice and windy."
]

var statuses = [
    "feels like she could take on anything, let's go work out!",
    "feels perfectly fine.",
    "feels like some working out!",
    "feels like some internet, maybe go and livestream?",
    "doesn't feel strong enough, go and work out, or use some 'other' things.",
    "feels like taking a stroll, maybe go outside?",
    "feels alright and ready for the day!",
    "feels a tad tired. Better to go tuck in.",
    "feels hungry, better to go and get some food.",
    "feels like some reading, maybe head to the library?"
]
var randomly = Math.floor(Math.random()*weather.length);
var vanessaStages = [
    "./img/709c.png",
    "./img/723a.png",
    "./img/723b.png",
    "./img/723c.png",
    "./img/723d.png",
    "./img/723e.png",
    "./img/723f.png",
    "eight",

    "./img/704e.png"
]

var Arnie = "./img/710c.png";
var Merica = "./img/704c.png"
var Foxy = "./img/657a.png"
var villager = "./img/villagerplaceholder.png"

var muscle = 25;
var weight = 80;
var money = 10;
var intelligence = 100;
var energy = 100;

var bgs = [
    "./img/bg.png",     /*Room*/
    "./img/647b.png",   /*Main Square*/
    "./img/700d.png",   /*Beach 2*/
    "./img/705c.png",   /*Beach*/
    "./img/bg2.png",     /*Shopping Centre*/
    "./img/710b.png"    /*Beach Competition*/
]

function startUp(){
    checkCookie();
    changeName();
    changeImage(bgs[0]);
    changeOptions(defaultScreen);
    showStats();
    appear('character');
    appear('text');
    appear('image');
    return;
};

function changeImage(bglink){
    document.getElementById('image').style.background = "";
    document.getElementById('image').style.backgroundImage = `url(${bglink})`;
    document.getElementById('bg').style.backgroundImage = `url(${bglink})`;
    return;
};

function extraBabble(text){
    document.getElementById('prompttext').innerText = text;
    return;
};

function changeOptions(option){
    var char = document.getElementById('character').style;
    if(option.value){startup = true};
    if(!option.value){startup = false};
    if(option.character === "Villager"){document.getElementById('character').style.backgroundImage = `url(${villager})`; char.transform = `scale(1)`}
    else if(option.character === "Arnie"){document.getElementById('character').style.backgroundImage = `url(${Arnie})`; char.transform = `scale(1)`}
    else if(option.character === "Foxy"){document.getElementById('character').style.backgroundImage = `url(${Foxy})`; char.transform = `scale(1)`}
    else if(option.character === "Vanessa"){document.getElementById('character').style.backgroundImage = `url(${vanessaStages[stage]})`; char.transform = `scale(${sizemulti})`;}
    else if(option.character === false){document.getElementById('character').style.backgroundImage = ``};
    if(stage < 6){changeImage(bgs[option.bg])};
    document.getElementById(`opt1`).innerText = option.first;
    document.getElementById('opti1').onclick = option.firstvalue;
    document.getElementById(`opt2`).innerText = option.second;
    document.getElementById('opti2').onclick = option.secondvalue;
    document.getElementById(`opt3`).innerText = option.third;
    document.getElementById('opti3').onclick = option.thirdvalue;
    document.getElementById(`opt4`).innerText = option.fourth;
    document.getElementById('opti4').onclick = option.fourthvalue;
    return;
}

function showStats(){
    document.getElementById('muscle').innerText = `Muscle: ${muscle}kg`;
    document.getElementById('intelligence').innerText = `Intelligence: ${intelligence}IQ`;
    document.getElementById('money').innerText = `Money: ${money}$`;
    document.getElementById('weight').innerText = `Weight: ${weight}kg`;
    document.getElementById('energy').innerText = `Energy: ${energy}%`;
    return;
}

function changeStats(muscChange, intlChange, mneyChange, wghtChange, engrChange){
    var char = document.getElementById('character').style;
    if(muscChange > 0){alert('plus', 'muscle');}
    else if(muscChange < 0){alert('minus', 'muscle')};
    if(intlChange > 0){alert('plus', 'intelligence');}
    else if(intlChange < 0){alert('minus', 'intelligence')};
    if(mneyChange > 0){alert('plus', 'money');}
    else if(mneyChange < 0){alert('minus', 'money')};
    if(wghtChange > 0){alert('plus', 'weight');}
    else if(wghtChange < 0){alert('minus', 'weight')};
    if(engrChange > 0){alert('plus', 'energy');}
    else if(engrChange < 0){alert('minus', 'energy')};
    muscChange = muscChange * multiplier;
    wghtChange = wghtChange * multiplier;
    intlChange = intlChange * multiplier;
    engrChange = engrChange;
    mneyChange = mneyChange;
    if(muscle + muscChange <= 10){muscle = 10;}
    else if(muscle + muscChange > 10){muscle += Math.floor(muscChange);};
    if(intelligence + intlChange <= 50){intelligence = 50;}
    else if(intelligence + intlChange > 50){intelligence += Math.floor(intlChange);};
    if(money + mneyChange <= 0){money = 0;}
    else if(money + mneyChange > 0){money += Math.floor(mneyChange);};
    if(weight + wghtChange <= muscle+10){weight = muscle+10;}
    else if(weight + wghtChange > muscle+10){weight += Math.floor(wghtChange);};
    if(energy + engrChange <= 0){energy = 0;}
    else if(energy + engrChange > 100){energy = 100;}
    else if(energy + engrChange > 0){energy += Math.floor(engrChange);};
    if(muscle >= 100){stage = 1; sizemulti = 1.1;};
    if(muscle >= 500){stage = 2; sizemulti = 1.15;};
    if(muscle >= 1000){stage = 3; sizemulti = 1.25;};
    if(muscle >= 10000){stage = 4; sizemulti = 1.3;};
    if(muscle >= 100000){stage = 5; sizemulti = 1.45;};
    if(muscle >= 1000000){stage = 6;sizemulti = 0;};
    document.getElementById('muscle').innerText = `Muscle: ${muscle}kg`;
    document.getElementById('intelligence').innerText = `Intelligence: ${intelligence}IQ`;
    document.getElementById('money').innerText = `Money: ${money}$`;
    document.getElementById('weight').innerText = `Weight: ${weight}kg`;
    document.getElementById('energy').innerText = `Energy: ${energy}%`;
    return;
}

function alert(which, att){
    document.getElementById(att).style.animation = `${which} 1s linear`;
    setTimeout(()=>{document.getElementById(att).style.animation = ``;},1000);
    return;
}

function changeName(){
    if(document.getElementById('name').value){yourname = document.getElementById('name').value;}
    else{yourname = "Vanessa";}
    if(startup === true){extraBabble(`It's currently ${weather[randomly]} weather, ${extrabits[randomly]} ${yourname} ${statuses[randomly]}`)}
    console.log(yourname);
    return;
};

function changeScene(text, option, muscChange, intlChange, mneyChange, wghtChange, engrChange){
    if(energy < 5 && option !== sleepyScreen){
        changeBG(0);
        changeOptions(defaultScreen);
        extraBabble(`${yourname} is too tired to do anything but sleep, let her rest for now.`);
    }
    else{
        changeBG(option.bg);
        changeStats(muscChange, intlChange, mneyChange, wghtChange, engrChange);
        changeOptions(option);
        extraBabble(text);
    }
    return;
}

function appear(func){
    document.getElementById(func).style.animation = "appear 500ms linear";
    setTimeout(()=>{
        document.getElementById(func).style.animation = "";
    },1000);
    return;
};

function changeBG(func){
    if(stage > 5){
        document.getElementById('bg').style.backgroundImage = `url(${vanessaStages[stage]})`;
        document.getElementById('image').style.backgroundImage = `url(${vanessaStages[stage]})`;
        return;
    }
    else{
        document.getElementById('bg').style.backgroundImage = `url(${bgs[func]})`;
        document.getElementById('image').style.backgroundImage = `url(${bgs[func]})`;
        document.getElementById('image').style.animation = "appear 500ms linear";
        setTimeout(()=>{
            document.getElementById('image').style.animation = "";
        },1000);
        return;
    };
};

function changeTextBG(){
    if(!document.getElementById('bglink').value){
        document.getElementById('text').style.backgroundImage = `url('./img/end_stone.png')`;
        document.getElementById('text').style.backgroundSize = '5%';
        document.getElementById('text').style.backgroundPosition = 'top';
        return;
    }
    document.getElementById('text').style.backgroundImage = `url('${document.getElementById('bglink').value}')`;
    document.getElementById('text').style.backgroundSize = 'cover';
    document.getElementById('text').style.backgroundPosition = 'center';
}

var purchased = {
    jumpingrope: false,
    punchingbag: false,
    smallweights: false,
    trainingbike: false,
    treadmill: false,
    generaluse: false,
    barbells: false,
    curlbench: false,
    latpulldown: false,
    booka: false,
    bookb: false,
    bookc: false
}

startUp();

function checkCookie(){
    let muscleC = getCookie('muscleAAA');
    let intelligenceC = getCookie('intelligenceAAA');
    let moneyC = getCookie('moneyAAA');
    let weightC = getCookie('weightAAA');
    let energyC = getCookie('energyAAA');
    let stageC = getCookie('stageAAA');
    let purchasedC = getCookie('purchasedAAA');
    let multiplierC = getCookie('multiplierAAA');
    if(muscleC !== ""){muscle = parseInt(muscleC)};
    if(intelligenceC !== ""){intelligence = parseInt(intelligenceC)};
    if(moneyC !== ""){money = parseInt(moneyC)};
    if(weightC !== ""){weight = parseInt(weightC)};
    if(energyC !== ""){energy = parseInt(energyC)};
    if(stageC !== ""){stage = parseInt(stageC)};
    if(purchasedC !== ""){purchased = purchasedC};
    if(multiplierC !== ""){multiplier = parseInt(multiplierC)};
    return;
};

setInterval(()=>{
    setCookie('muscleAAA', muscle);
    setCookie('intelligenceAAA', intelligence);
    setCookie('moneyAAA', money);
    setCookie('weightAAA', weight);
    setCookie('energyAAA', energy);
    setCookie('purchasedAAA', purchased);
    setCookie('multiplierAAA', multiplier);
}, 5000)


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
};

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Lax";
    return;
}

function deleteAll(){
    var cookieList = ["muscleAAA", "intelligenceAAA", "moneyAAA", "weightAAA", "energyAAA", "multiplierAAA", "purchasedAAA"];
    let dialog = "Are you sure you want to delete your savegame?"
    if(confirm(dialog) == true){
        for(let i = 0; i < cookieList.length; i++){
            document.cookie = `${cookieList[i]}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;SameSite=Lax`;
            window.location.reload();
        };
    }
    else{
        return;
    }
    return;
};
