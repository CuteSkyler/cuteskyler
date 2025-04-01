const SuperSecretKey = 'monster';

let firstprompt = {
    prompt: [ '', 'Welcome to Growth Game v4b2 closed beta!', 'currentSize', 'beta-b2-bg', './renders/beta_b2.jpeg'],
    options: [
        'Load game...'
    ],
    functions: [
        (function(check){
            if(check) return;
            if(document.querySelector('#passcode').value.toLocaleLowerCase() !== SuperSecretKey){
                alert('Incorrect.');
                return;
            };
            loadGame();
            document.querySelector('#showmenu').style.display = 'block';
            generatePrompt(menu);
            document.querySelector('h2').remove();
        })
    ],
    added: [0,0,0,0,0]
};

let currently_focussed = 0;

window.onkeydown = (e)=>{
    if(!e) e = window.event;
    switch(e.key){
        case "Tab":{
            currently_focussed += 1;
            if(currently_focussed >= document.querySelector('#options').children.length) currently_focussed = 0;
            console.log(currently_focussed, document.querySelector('#options').children[0]);
            document.querySelector('#options').children[currently_focussed].focus();
            break;
        };
        case " ":{
            clickEvent();
            break;
        }
        case "Enter":{
            currently_focussed = 0;
            document.querySelector('#options').children[currently_focussed].click();
            break;
        };
        case "1":{
            currently_focussed = 0;
            document.querySelector('#options').children[currently_focussed].click();
            break;
        };
        case "2":{
            currently_focussed = 1;
            if(document.querySelector('#options').children.length < 2) currently_focussed = 0;
            document.querySelector('#options').children[currently_focussed].click();
            break;
        };
        case "3":{
            currently_focussed = 2;
            if(document.querySelector('#options').children.length < 3) currently_focussed = document.querySelector('#options').children.length - 1;
            document.querySelector('#options').children[currently_focussed].click();
            break;
        };
        case "4":{
            currently_focussed = 3;
            if(document.querySelector('#options').children.length < 4) currently_focussed = document.querySelector('#options').children.length - 1;
            document.querySelector('#options').children[currently_focussed].click();
            break;
        };
        default:{
            return;
        };
    };
};


generatePrompt(
    firstprompt
);

let passcode = document.createElement('input');
let br = document.createElement('br');
passcode.id = 'passcode';
passcode.placeholder = 'Enter the betacode here.'
document.querySelector('#prompt #story').append(br);
document.querySelector('#prompt #story').append(passcode);


let splashes = [
    "Originated by Notch!",
    "Foxy is the best of all the girls!",
    "Do u even lift, bro?",
    "The creator is addicted to caffeine.",
    "I should be studying...",
    "Why spend time on these splashes?",
    "Less than 5M lines of code!",
    "Gotta go fast!",
    "I have to go quite rapidly.",
    "Overwatch!",
    "Vanessa is pretty cool, are you?",
    "b1.7.3 is the best version!",
    "Have you visted the discord yet?",
    "PEGGLE 2!",
    "Watch me whip!",
    "JavaScript, really?",
    "Please enable JavaScript on this website.",
    "Is Google working?",
    "Linux!",
    "UUDDLRLRBAS",
    "Off-brand coke!",
    "Not Just Bikes!",
    "PVV!",
    "PirateParty!",
    "GroenLinks!",
    "Baudet!",
    "Achievement get!",
    "Mistkaes.",
    "Atomic Shrimps!",
    "Vinyl records!",
    "I own all Minecraft books!",
    "b1.8 is the best version!",
    "1.8 is the best version!",
    "1.7.10 is the best version!",
    "1.9 is the best version!",
    "1.12 is the best version!",
    "1.19+ is the best version!*",
    "*said no one.",
    "Made with Unity!",
    "Are you a bad enough dude?",
    "All your muscles are belong to us.",
    "Eternal Growing of a Musclebound Mind",
    "Lifeguard schmifeguard",
    "You did donate to the cause, right?",
    "Redbubble!",
    "The the title of this has tthree mistakes",
    "/wsg/!",
    "/d/!",
    "/aco/!",
    "/g/...",
    "standarddeviation*",
    "buffmeup*",
    "largerlegs*",
    "motherlode*",
    "fivehourenergy*",
    "idontwannaplay*",
    "Stoopwafel!",
    "Ongezellig!",
    "Under Construction",
    "New and imporved!",
    "Tier 3 sub approved!",
    "Unibomber's favourite!",
    "Don't check your mailbox",
    "Rats, rats, we are the rats",
    "YTPMV!",
    "elf",
    "dQw4w9WgXcQ",
    "Fight Club!",
    "Requiem for larger Muscle Mass",
    "Alpha, beta, uhhh, gamma?",
    "Radiation, only in fiction!",
    "Everybody's gotta learn sometimes",
    "What will someone never do?",
    "Python, made in the homeland!",
    "Vladivostok!",
    "ElectroShoc!",
    "Non-Stop-Pop FM!",
    "System of a Workout",
    "USB, -C even!",
    "Yeah, baby!",
    "Mini-me!",
    "Please be kind, rewind.",
    "Betamax!",
    "HDDVD!",
    "Everybody wants a 303!",
    "Fatboy Slim!",
    "Muscularlady Huge!",
    "What a silly jester!",
    "Honka honka!",
    "Ms. Size Doesn't Matter!",
    "I have to return some video tapes...",
    "3.1415926...",
    "Uno momento!",
    "Error: Please report this error",
    "Error: Task failed successfully"
];

function changeSplash() {
    let splash = splashes[Math.floor(Math.random() * splashes.length)];
    if(splash.startsWith('Error')) document.querySelector('h2').classList.add('red');
    document.querySelector('h2').innerHTML = splash;
    if (splash === 'Achievement get!') {
        generateAchievement(2);
    };
    return;
};

changeSplash();