let SuperSecretKey = 'nady'

let firstprompt = {
    prompt: [ '', 'Welcome to Growth Game v4 alpha!', 'currentSize', 'alpha-bg', './renders/alpha.png'],
    options: [
        'Load game...'
    ],
    functions: [
        (function(check){
            if(check) return;
            if(document.querySelector('#passcode').value.toLocaleLowerCase() !== SuperSecretKey) return;
            loadGame();
            generatePrompt(menu);
            document.querySelector('h2').remove();
        })
    ],
    added: [0,0,0,0,0]
};

generatePrompt(
    firstprompt
);

let passcode = document.createElement('input');
passcode.id = 'passcode';
passcode.placeholder = 'Enter the alphacode here.'
document.querySelector('#prompt').append(passcode);


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
    "Made with Unity!"
];

function changeSplash() {
    let splash = splashes[Math.floor(Math.random() * splashes.length)]
    document.querySelector('h2').innerHTML = splash;
    if (splash === 'Achievement get!') {
        generateAchievement(2);
    };
    return;
};

changeSplash();