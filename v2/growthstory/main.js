var yourname = "Vanessa";
var startup = true;
var stage = 0;
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
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight"
]

var Arnie = "./img/710c.png";
var Merica = "./img/704c.png"


var muscle = 25;
var weight = 80;
var money = 10;
var intelligence = 100;
var energy = 100;

/*Options*/
var blanc = {first: "", firstvalue: "", second: "", secondvalue: "", third: "", thirdvalue: "", fourth: "", fourthvalue: "", character: false, bg: 0};
var defaultScreen = {first: "Work out in your room", firstvalue: function(){changeScene(`${yourname} worked out tirelessly and gained some good-ass muscle with it! ${yourname} feels herself getting stronger by the second! Keep it up!`, workedOut, 1, 1, 0, 1, -10)}, second: "Go and read", secondvalue: function(){changeScene(`${yourname} reads some books from her bookshelves. ${yourname} finds a nice book that looks quite interesting, perhaps it can increase her knowledge a bit. It sure is interesting, though.`, studyScreen, 0, 5, 0, 0, -5)}, third: "Go outside", thirdvalue: function(){changeScene(`You're walking outside, stretching your legs a tad. Feelin' refreshed. Maybe go and visit the beach sometime?`, outsideScreen, 0, 0, 0, 0, 0)}, fourth: "Go and sleep", fourthvalue: function(){changeScene(`${yourname} goes and rests for today, goodnight. Her muscles are slowly but surely developing in her sleep, and she'll rest well knowing so.`, sleepyScreen, 0, 0, 0, 0, 100)}, character: true, bg: 0, value: true};
var workedOut = {first: "Go back", firstvalue: function(){changeScene(`It's currently ${weather[randomly]} weather, ${extrabits[randomly]} ${yourname} ${statuses[randomly]}`, defaultScreen, 0, 0, 0, 0, 0)}, second: "Work out again", secondvalue: function(){changeScene(`${yourname} worked out tirelessly and gained some good-ass muscle with it! ${yourname} feels herself getting stronger by the second! Keep it up!`, workedOut, 10, 1, 0, 10, -10)}, third: "", thirdvalue: "", fourth: "", fourthvalue: "", character: true, bg: 0};
var sleepyScreen = {first: "Wake up, sunshine", firstvalue: function(){changeScene(`It's currently ${weather[randomly]} weather, ${extrabits[randomly]} ${yourname} ${statuses[randomly]}`, defaultScreen, 0, 0, 0, 0, 0)}, second: "", secondvalue: "", third: "", thirdvalue: "", fourth: "", fourthvalue: "", character: false, bg: 0};
var studyScreen = {first: "Go back", firstvalue: function(){changeScene(`It's currently ${weather[randomly]} weather, ${extrabits[randomly]} ${yourname} ${statuses[randomly]}`, defaultScreen, 0, 0, 0, 0, 0)}, second: "Read some more", secondvalue: function(){changeScene(`${yourname} reads some books from her bookshelves. ${yourname} finds a nice book that looks quite interesting, perhaps it can increase her knowledge a bit. It sure is interesting, though.`, studyScreen, 0, 5, 0, 0, -5)}, third: "", thirdvalue: "", fourth: "", fourthvalue: "", character: false, bg: 0};
var outsideScreen = {first: "Go back", firstvalue: function(){changeScene(`It's currently ${weather[randomly]} weather, ${extrabits[randomly]} ${yourname} ${statuses[randomly]}`, defaultScreen, 0, 0, 0, 0, 0)}, second: "Perform your job as a lifeguard", secondvalue: "", third: "Go to the mall", thirdvalue: "", fourth: "Go to the beach", fourthvalue: "", character: false, bg: 0};

var bgs = [
    "./img/455a.png"
]

function startUp(){
    changeName();
    changeImage(bgs[0]);
    changeOptions(defaultScreen);
    showStats();
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
    if(option.value){startup = true};
    if(!option.value){startup = false};
    if(option.character === "Arnie"){document.getElementById('character').style.backgroundImage = `url(${Arnie})`};
    if(option.character === "Merica"){document.getElementById('character').style.backgroundImage = `url(${Arnie})`};
    if(option.character === true){document.getElementById('character').style.backgroundImage = `url(${vanessaStages[stage]})`};
    if(option.character === false){document.getElementById('character').style.backgroundImage = ``};
    changeImage(bgs[option.bg]);
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
    muscle += muscChange;
    intelligence += intlChange;
    money += mneyChange;
    weight += wghtChange;
    energy += engrChange;
    if(energy>=100){energy = 100};
    document.getElementById('muscle').innerText = `Muscle: ${muscle}kg`;
    document.getElementById('intelligence').innerText = `Intelligence: ${intelligence}IQ`;
    document.getElementById('money').innerText = `Money: ${money}$`;
    document.getElementById('weight').innerText = `Weight: ${weight}kg`;
    document.getElementById('energy').innerText = `Energy: ${energy}%`;
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
        changeOptions(defaultScreen);
        extraBabble(`${yourname} is too tired to do anything but sleep, let her rest for now.`);
    }
    else{
        changeStats(muscChange, intlChange, mneyChange, wghtChange, engrChange);
        changeOptions(option);
        extraBabble(text);
    }
    return;
}

startUp();