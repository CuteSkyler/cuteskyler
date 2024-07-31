let goal = 1000;
let multiplier = 1;
const max_goal = 7;

function addDetails([muscle, height, intelligence, money, energy], check){

    // if(check) return;

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
    switch(document.querySelector('input#cheatcode').value){
        
        case 'Nady': {
            alert("Nady character unlocked!");
            let Nady = document.createElement('option');
            Nady.innerHTML = 'Nady';
            document.querySelector('select#character').append(Nady);
            break;
        }
        
        case 'Jasmine': {
            alert("Jasmine character unlocked!");
            let Jasmine = document.createElement('option');
            Jasmine.innerHTML = 'Jasmine';
            document.querySelector('select#character').append(Jasmine);
            break;
        }
        
        case 'debug': {
            alert("Welcome to the debug room");
            generatePrompt(debug_room1);
            break;
        }

        default: {
            alert("UNKNOWN CHEAT");
            break;
        }
    }
});

document.querySelector('form#optionaire button#submit').addEventListener('click', e=>{
    e.preventDefault();

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

    switch(document.querySelector('select#fontsize').value){
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
    }

    alert('Settings changed succesfully!');
    saveGame();
});

function deleteSave(){
    let thecookies = document.cookie.split('; ');
    for(let x = 0; x < thecookies; x++){
        document.cookie = thecookies[x]+"=;expires="+new Date(0).toUTCString();
    };
};

function saveGame(){
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
        youroptions.find(arg => arg.option === 'ownership').value = youroptions.find(arg => arg.option === 'ownership').value.split(',');
        ownership.setAllOwnership(youroptions.find(arg => arg.option === 'ownership').value);
    };
    
    multiplier = parseFloat(youroptions.find(arg => arg.option === 'the_multiplier')?.value) || 1;
    jobs_unlocked.lifeguard = youroptions.find(arg => arg.option === 'options_lifeguard_unlocked')?.value || "true";
    jobs_unlocked.bodybuilder = youroptions.find(arg => arg.option === 'options_bodybuilder_unlocked')?.value || "false";
    jobs_unlocked.livestreamer = youroptions.find(arg => arg.option === 'options_livestreamer_unlocked')?.value || "false";
    theoptions.username = youroptions.find(arg => arg.option === 'options_username')?.value || "Vanessa";
    theoptions.fontsize = youroptions.find(arg => arg.option === 'options_fontsize')?.value || "Medium";
    theoptions.character = youroptions.find(arg => arg.option === 'options_character')?.value || "Vanessa";
    theoptions.current_job = youroptions.find(arg => arg.option === 'options_current_job')?.value || "lifeguard";
    theoptions.accent_colour = youroptions.find(arg => arg.option === 'options_accent_colour')?.value || "rgb(165, 130, 165)";
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

    for(let x = 0; x < achievements.length; x++){
        achievements.find(arg=>arg.id=`${x}`).gotten = youroptions.find(erg=>erg.option === `achievement_${x}`)?.value || false;
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