let goal = 1000;
let multiplier = 1;
const max_goal = 7;
let dayspassed = 0;
let purchasedAmounts = {
    protein: 0,
    supplements: 0,
    steroids: 0
}

const stagelinks = {
    "Vanessa": [
        "https://files.catbox.moe/65eyb3.webm",
        "https://files.catbox.moe/qdqnx9.webm",
        "https://files.catbox.moe/5obov8.webm",
        "https://files.catbox.moe/fr9fp3.webm",
        "https://files.catbox.moe/bndsi6.webm",
        "https://files.catbox.moe/6twbuw.webm",
        "https://files.catbox.moe/qi5mnb.webm"
    ],
    "Nady": [
        "https://files.catbox.moe/euiy5q.webm",
        "https://files.catbox.moe/mwrrr7.webm",
        "https://files.catbox.moe/2qwl2u.webm",
        "https://files.catbox.moe/0oflfa.webm",
        "https://files.catbox.moe/b9bzfw.webm",
        "https://files.catbox.moe/b9bzfw.webm",
        "https://files.catbox.moe/jo7d5t.webm"
    ]
}

function setDay(day){
    switch(day%7){
        default:
        case 0:{
            document.querySelector('#statistics > label > b').innerHTML = 'Monday';
            break;
        }
        case 1:{
            document.querySelector('#statistics > label > b').innerHTML = 'Tuesday';
            break;
        }
        case 2:{
            document.querySelector('#statistics > label > b').innerHTML = 'Wednesday';
            break;
        }
        case 3:{
            document.querySelector('#statistics > label > b').innerHTML = 'Thursday';
            break;
        }
        case 4:{
            document.querySelector('#statistics > label > b').innerHTML = 'Friday';
            break;
        }
        case 5:{
            document.querySelector('#statistics > label > b').innerHTML = 'Saturday';
            break;
        }
        case 6:{
            document.querySelector('#statistics > label > b').innerHTML = 'Sunday';
            break;
        }
    }
    return;
};

function addDetails([muscle, height, intelligence, money, energy], check){
    setDay(dayspassed);

    // if(check) return;
    if(regimen.muscle >= 10000 && jobs_unlocked.bodybuilder !== 'true'){
        // Bodybuilder
        jobs_unlocked.bodybuilder = "true";
        generateAchievement(4);
    };
    if(regimen.intelligence >= 1000 && jobs_unlocked.livestreamer !== 'true'){
        //Livestreamer
        jobs_unlocked.livestreamer = "true";
        generateAchievement(3);
    };

    (regimen.muscle + muscle) < 0 ? regimen.muscle = 0 : regimen.muscle += Math.floor(muscle * multiplier);
    (muscle)>=0?document.querySelector('#muscle').style.animation = '3s positive ease-out':document.querySelector('#muscle').style.animation = '3s negative ease-out';
    (regimen.height + height) < 0 ? regimen.height = 0 : regimen.height += Math.floor(height * multiplier);
    (height)>=0?document.querySelector('#length').style.animation = '3s positive ease-out':document.querySelector('#length').style.animation = '3s negative ease-out';
    (regimen.intelligence + intelligence) < 0 ? regimen.intelligence = 0 : regimen.intelligence += Math.floor(intelligence * multiplier);
    (intelligence)>=0?document.querySelector('#intelligence').style.animation = '3s positive ease-out':document.querySelector('#intelligence').style.animation = '3s negative ease-out';
    (regimen.money + money) < 0 ? regimen.money = 0 : regimen.money += money;
    (money)>=0?document.querySelector('#money').style.animation = '3s positive ease-out':document.querySelector('#money').style.animation = '3s negative ease-out';
    (regimen.energy + -1*energy) < 0 ? regimen.energy = 0 : regimen.energy += -1*energy;
    (energy)>=0?document.querySelector('#FAGGOT').style.animation = '3s negative ease-out':document.querySelector('#FAGGOT').style.animation = '3s positive ease-out';

    if(regimen.muscle > goal){
        console.log(regimen.muscle, goal, regimen.stage);
        (regimen.stage+1)>max_goal?regimen.stage = max_goal:regimen.stage += 1;
        console.log(regimen.muscle, goal, regimen.stage);
        goal *= 10;
        console.log(regimen.muscle, goal, regimen.stage);
    };

    return `Added ${muscle}kg of muscle, ${height}m of height, ${intelligence}iq worth of intelligence, ${money}$ of money and lost ${energy}% of your energy.`;
};

document.querySelector('form#cheatcode button#submit').addEventListener('click', e=>{
    e.preventDefault();
    switch(document.querySelector('input#cheatcode').value.toLocaleLowerCase()){
        case 'thegreenvixen': {
            alert("Nady character unlocked!");
            let Nady = document.createElement('option');
            Nady.innerHTML = 'Nady';
            document.querySelector('select#character').append(Nady);
            break;
        };

        case 'buffmeup': {
            alert(`Added ${Math.floor(goal/1000)}kg of muscle!`);
            addDetails([Math.floor(goal/1000),0,0,0,0]);
            generateAchievement(10);
            break;
        };
        case 'largerlegs': {
            let added = 200;
            alert(`Added ${Math.floor(added/100)}.00m of length!`);
            addDetails([0,added,0,0,0]);
            generateAchievement(10);
            break;
        };
        case 'standarddeviation': {
            let added = 25;
            alert(`Added ${added}iq of intelligence points!`);
            addDetails([0,0,added,0,0]);
            generateAchievement(10);
            break;
        };
        case 'motherlode': {
            let added = 10000;
            alert(`Added ${added}$!`);
            addDetails([0,0,0,added,0]);
            generateAchievement(10);
            break;
        };
        case 'fivehourenergy': {
            let added = 10000;
            alert(`Added ${added}$!`);
            addDetails([0,0,0,0,10000]);
            generateAchievement(10);
            break;
        };
        // case 'Jasmine': {
        //     alert("Jasmine character unlocked!");
        //     let Jasmine = document.createElement('option');
        //     Jasmine.innerHTML = 'Jasmine';
        //     document.querySelector('select#character').append(Jasmine);
        //     break;
        // }
        case 'idontwannaplay': {
            alert("Welcome to the debug room");
            generatePrompt(debug_room1);
            generateAchievement(10);
            break;
        };
        default: {
            alert("UNKNOWN CHEAT");
            break;
        };
    };
});

document.querySelector('form#optionaire button#submit').addEventListener('click', e=>{
    e.preventDefault();

    theoptions.blur_amount = document.querySelector('input#blur').value || 50;
    document.documentElement.style.setProperty('--blur', `${theoptions.blur_amount/10}px`);
    document.querySelector('input#blur').value = theoptions.blur_amount;

    theoptions.username = document.querySelector('input#username').value || 'Vanessa';

    theoptions.accent_colour = document.querySelector('input#accent_colour').value;
    document.documentElement.style.setProperty('--accent-colour', theoptions.accent_colour);

    theoptions.character = document.querySelector('select#character').value;
    if(document.querySelector('select#character').value === 'Vanessa McLoy'){
        theoptions.character = 'Vanessa';
    }
    if((theoptions.character !== 'Vanessa McLoy' || theoptions.character !== 'Vanessa') && !document.querySelector('input#username').value){
        theoptions.username = document.querySelector('select#character').value;
    }
    else{
        theoptions.username = 'Vanessa';
    }

    switch(document.querySelector('select#fontsize').value){
        case 'Atoms': {
            theoptions.fontsize = 'Atoms';
            document.documentElement.style.setProperty('--scale-factor', 0.01);
            break;
        }
        case 'Ants': {
            theoptions.fontsize = 'Ants';
            document.documentElement.style.setProperty('--scale-factor', 0.1);
            break;
        }
        case 'Miniscule': {
            theoptions.fontsize = 'Miniscule';
            document.documentElement.style.setProperty('--scale-factor', 0.2);
            break;
        }
        case 'Extra Small': {
            theoptions.fontsize = 'Extra Small';
            document.documentElement.style.setProperty('--scale-factor', 0.4);
            break;
        }
        case 'Very Small': {
            theoptions.fontsize = 'Very Small';
            document.documentElement.style.setProperty('--scale-factor', 0.6);
            break;
        }
        case 'Small': {
            theoptions.fontsize = 'Small';
            document.documentElement.style.setProperty('--scale-factor', 0.8);
            break;
        }
        default:
        case 'Medium': {
            theoptions.fontsize = 'Medium';
            document.documentElement.style.setProperty('--scale-factor', 1);
            break;
        }
        case 'Large': {
            theoptions.fontsize = 'Large';
            document.documentElement.style.setProperty('--scale-factor', 1.2);
            break;
        }
        case 'Extra Large': {
            theoptions.fontsize = 'Extra Large';
            document.documentElement.style.setProperty('--scale-factor', 1.4);
            break;
        }
        case 'Extremely Large': {
            theoptions.fontsize = 'Extremely Large';
            document.documentElement.style.setProperty('--scale-factor', 1.6);
            break;
        }
        case 'Way Too Large': {
            theoptions.fontsize = 'Way Too Large';
            document.documentElement.style.setProperty('--scale-factor', 2.5);
            break;
        }
        case 'Excessively Large': {
            theoptions.fontsize = 'Excessively Large';
            document.documentElement.style.setProperty('--scale-factor', 4);
            break;
        }
        case 'Vanessa Sized': {
            theoptions.fontsize = 'Vanessa Sized';
            document.documentElement.style.setProperty('--scale-factor', 8);
            break;
        }
    }

    alert('Settings changed succesfully!');
    saveGame();
});

async function deleteSave(){
    document.cookie = `livestreamoptions_arms=1`;
    document.cookie = `livestreamoptions_back=1`;
    document.cookie = `livestreamoptions_front=1`;
    document.cookie = `livestreamoptions_legs=1`;
    document.cookie = `livestreamoptions_butt=1`;
    document.cookie = `dayspassed=0`;
    document.cookie = `fbb_complted_jasmine=false`;
    document.cookie = `fbb_complted_nady=false`;
    document.cookie = `fbb_complted_foxy=false`;
    document.cookie = `options_username=Vanessa`;
    document.cookie = `options_fontsize=Medium`;
    document.cookie = `options_character=Vanessa`;
    document.cookie = `options_accent_colour=rgba(165, 130, 165)`;
    document.cookie = `options_current_job=lifeguard`;
    document.cookie = `regimen_muscle=100`;
    document.cookie = `regimen_height=200`;
    document.cookie = `regimen_intelligence=100`;
    document.cookie = `regimen_money=200`;
    document.cookie = `regimen_energy=100`;
    document.cookie = `goalamount=1000`;
    document.cookie = `regimen_stage=1`;
    document.cookie = `lifeguard_unlocked=false`;
    document.cookie = `bodybuilder_unlocked=false`;
    document.cookie = `livestreamer_unlocked=false`;
    document.cookie = `the_multiplier=1`;
    document.cookie = `ownership=false,false,false,false,false`;
    document.cookie = `blur_amount=50`;

    for(let x = 0; x < achievements.length; x++){
        document.cookie = `achievement_${x}=false`;
    }

    document.querySelector('#banner').style.animation = 'cheese 1s ease-in-out forwards';
    document.querySelector('#banner i').style.animation = 'cheese_ 1s ease-in-out forwards';

    setTimeout(()=>{
        document.querySelector('#banner').style.animation = '';
        document.querySelector('#banner i').style.animation = '';
    },1000);

    console.log("DELETED SAVE FILE...");
};

function saveGame(){
    document.cookie = `blur_amount=${document.querySelector('input#blur').value}`;
    document.cookie = `prefers_webm=${document.querySelector('#gif_setting').checked}`;
    document.cookie = `livestreamoptions_arms=${livestreamoptions[0].value}`;
    document.cookie = `livestreamoptions_back=${livestreamoptions[1].value}`;
    document.cookie = `livestreamoptions_front=${livestreamoptions[2].value}`;
    document.cookie = `livestreamoptions_legs=${livestreamoptions[3].value}`;
    document.cookie = `livestreamoptions_butt=${livestreamoptions[4].value}`;
    document.cookie = `dayspassed=${dayspassed}`;
    document.cookie = `fbb_complted_jasmine=${bodybuilding_competed[0].fought}`;
    document.cookie = `fbb_complted_nady=${bodybuilding_competed[1].fought}`;
    document.cookie = `fbb_complted_foxy=${bodybuilding_competed[2].fought}`;
    document.cookie = `options_username=${theoptions.username==='Vanessa McLoy'?new String(theoptions.username).split(' ')[0]:theoptions.username}`;
    document.cookie = `options_fontsize=${theoptions.fontsize}`;
    document.cookie = `options_character=${theoptions.character==='Vanessa McLoy'?new String(theoptions.character).split(' ')[0]:theoptions.character}`;
    document.cookie = `options_accent_colour=${theoptions.accent_colour}`;
    document.cookie = `options_current_job=${theoptions.current_job}`;
    document.cookie = `regimen_muscle=${regimen.muscle}`;
    document.cookie = `regimen_height=${regimen.height}`;
    document.cookie = `regimen_intelligence=${regimen.intelligence}`;
    document.cookie = `regimen_money=${regimen.money}`;
    document.cookie = `regimen_energy=${regimen.energy}`;
    document.cookie = `goalamount=${goal}`;
    document.cookie = `regimen_stage=${regimen.stage}`;

    document.cookie = `lifeguard_unlocked=${jobs_unlocked.lifeguard}`;
    document.cookie = `bodybuilder_unlocked=${jobs_unlocked.bodybuilder}`;
    document.cookie = `livestreamer_unlocked=${jobs_unlocked.livestreamer}`;

    document.cookie = `the_multiplier=${multiplier}`;

    document.cookie = `ownership=${[...ownership.retrieveList()]}`;

    for(let x = 0; x < achievements.length; x++){
        document.cookie = `achievement_${x}=${achievements[x].gotten}`;
    }

    document.querySelector('#banner').style.animation = 'cheese 1s ease-in-out forwards';
    document.querySelector('#banner i').style.animation = 'cheese_ 1s ease-in-out forwards';

    setTimeout(()=>{
        document.querySelector('#banner').style.animation = '';
        document.querySelector('#banner i').style.animation = '';
    },1000);

    console.log("SAVED GAME...");
    return;
};

function loadGame(){
    let the_cookies = document.cookie.split('; ');
    let youroptions = [];
    let currentCookie;
    for(let x = 0; x < the_cookies.length; x++){
        currentCookie = the_cookies[x].split('=');
        youroptions.push({
            option: currentCookie[0], value: currentCookie[1]
        });
    };

    if(youroptions.find(arg => arg.option === 'ownership')){
        let temp = youroptions.find(arg => arg.option === 'ownership').value.split(',');
        ownership.setAllOwnership(temp);
    };

    document.querySelector('#gif_setting').checked = youroptions.find(arg => arg.option === 'prefers_webm')?.value || true;
    
    livestreamoptions[0].value = youroptions.find(arg => arg.option === 'livestreamoptions_arms')?.value || 1;
    livestreamoptions[1].value = youroptions.find(arg => arg.option === 'livestreamoptions_back')?.value || 1;
    livestreamoptions[2].value = youroptions.find(arg => arg.option === 'livestreamoptions_front')?.value || 1;
    livestreamoptions[3].value = youroptions.find(arg => arg.option === 'livestreamoptions_legs')?.value || 1;
    livestreamoptions[4].value = youroptions.find(arg => arg.option === 'livestreamoptions_butt')?.value || 1;
    dayspassed = parseInt(youroptions.find(arg => arg.option === 'dayspassed')?.value) || 0;
    bodybuilding_competed[0].fougt = youroptions.find(arg => arg.option === 'fbb_completed_jasmine')?.value || false;
    bodybuilding_competed[1].fougt = youroptions.find(arg => arg.option === 'fbb_completed_nady')?.value || false;
    bodybuilding_competed[2].fougt = youroptions.find(arg => arg.option === 'fbb_completed_foxy')?.value || false;
    multiplier = parseFloat(youroptions.find(arg => arg.option === 'the_multiplier')?.value) || 1;
    jobs_unlocked.lifeguard = youroptions.find(arg => arg.option === 'options_lifeguard_unlocked')?.value || "true";
    jobs_unlocked.bodybuilder = youroptions.find(arg => arg.option === 'options_bodybuilder_unlocked')?.value || "false";
    jobs_unlocked.livestreamer = youroptions.find(arg => arg.option === 'options_livestreamer_unlocked')?.value || "false";
    theoptions.username = youroptions.find(arg => arg.option === 'options_username')?.value || "Vanessa";
    theoptions.fontsize = youroptions.find(arg => arg.option === 'options_fontsize')?.value || "Medium";
    theoptions.character = youroptions.find(arg => arg.option === 'options_character')?.value || "Vanessa";
    theoptions.current_job = youroptions.find(arg => arg.option === 'options_current_job')?.value || "lifeguard";
    theoptions.accent_colour = youroptions.find(arg => arg.option === 'options_accent_colour')?.value || "rgb(165, 130, 165)";
    theoptions.blur_amount = youroptions.find(arg => arg.option === 'blur_amount')?.value || 50;
    let __muscle__ = youroptions.find(arg => arg.option === 'regimen_muscle')?.value || 100;
    regimen.muscle = parseInt(__muscle__);
    let __height__ = youroptions.find(arg => arg.option === 'regimen_height')?.value || 200;
    regimen.height = parseInt(__height__);
    let __intelligence__ = youroptions.find(arg => arg.option === 'regimen_intelligence')?.value || 100;
    regimen.intelligence = parseInt(__intelligence__);
    let __money__ = youroptions.find(arg => arg.option === 'regimen_money')?.value || 200;
    regimen.money = parseInt(__money__);
    let __energy__ = youroptions.find(arg => arg.option === 'regimen_energy')?.value || 100;
    regimen.energy = parseInt(__energy__);
    let __stage__ = youroptions.find(arg => arg.option === 'regimen_stage')?.value || 1;
    regimen.stage = parseInt(__stage__);
    let __goal__ = youroptions.find(arg => arg.option === 'goalamount')?.value || 1000;
    goal = parseInt(__goal__);

    document.querySelector('input#blur').value = theoptions.blur_amount;
    document.querySelector('input#accent_colour').value = theoptions.accent_colour;
    document.querySelector('input#username').value = theoptions.username;

    for(let x = 0; x < achievements.length-1; x++){
        // console.log(x, achievements.find(arg=>arg.id=`${x}`).gotten, youroptions.find(erg=>erg.option === `achievement_${x}`)?.value);
        achievements.find(arg=>arg.id=`${x+1}`).gotten = youroptions.find(erg=>erg.option === `achievement_${x+1}`)?.value || false;
        console.log(x+1, achievements.find(arg=>arg.id=`${x+1}`).gotten);
        if(!(youroptions.find(erg=>erg.option === `achievement_${x+1}`)?.value === 'false' || !youroptions.find(erg=>erg.option === `achievement_${x+1}`)?.value)) addAchievementToList(x+2);
    };

    document.documentElement.style.setProperty('--accent-colour', theoptions.accent_colour);
    switch (theoptions.fontsize){
        case 'Small': {
            document.documentElement.style.setProperty('--scale-factor', 0.8);
            break;
        }
        default:
        case 'Medium': {
            document.documentElement.style.setProperty('--scale-factor', 1);
            break;
        }
        case 'Large': {
            document.documentElement.style.setProperty('--scale-factor', 1.2);
            break;
        }
        case 'Extra Large': {
            document.documentElement.style.setProperty('--scale-factor', 1.4);
            break;
        }
        case 'Extremely Large': {
            document.documentElement.style.setProperty('--scale-factor', 1.6);
            break;
        }
        case 'Way Too Large': {
            document.documentElement.style.setProperty('--scale-factor', 2.5);
            break;
        }
    }

    return;
};