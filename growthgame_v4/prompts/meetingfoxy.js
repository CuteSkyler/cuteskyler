let meetfoxy_2 = {
    prompt: [ '', `The fox runs towards you. She seems to grow larger as she runs in your direction. Now you see that she has an absolutely massive body, with muscles as defined as a dictionary. Her impressive stature brings a sweat to Vanessa's face, but quickly calms down seeing as how friendly she seems to be. The fox currently stands in front of you with her impressive body. Vanessa asks for her name.`, 'currentSize', 'beach-bg', ''],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            meetfoxy_3
        )})
    ],
    added: [0,0,0,0,0]
};

let meetfoxy_3 = {
    prompt: [ `Vanessa`, `What's your name, fox?`, 'currentSize', 'beach-bg', ''],
    options: [
        'She responds...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            meetfoxy_4
        )})
    ],
    added: [0,0,0,0,0]
};

let meetfoxy_4 = {
    prompt: [ `Foxy`, `Heyhey! My name's Foxy! Sorry if I scared you, seeing how big I am, haha! Hope you're doing alright; I see you're also getting your pump on, glad to see it!`, 'currentSize', 'beach-bg', 'https://files.catbox.moe/j45j7f.webm'],
    options: [
        'You respond...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            meetfoxy_5
        )})
    ],
    added: [0,0,0,0,0]
};

let meetfoxy_5 = {
    prompt: [ `Vanessa`, `Yeah, I sure do hope I can grow some bigger muscular mass, though. Oh yeah, my name's Vanessa, by the way! You seem like a great gal, Foxy, especially with those guns. Let's hope you'll get some bigger ones in the future, though, haha!`, 'currentSize', 'beach-bg', ''],
    options: [
        'She responds...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            meetfoxy_6
        )})
    ],
    added: [0,0,0,0,0]
};

let meetfoxy_6 = {
    prompt: [ `Foxy`, `Oh yeah, for sure, dude! You'll see me getting more muscle before you can say 'dumbbell'! It was great meeting you, Vanessa! Let's meet again sometime, with hopefully larger bodies!`, 'currentSize', 'beach-bg', 'https://files.catbox.moe/j45j7f.webm'],
    options: [
        'You end the conversation with...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            meetfoxy_7
        )})
    ],
    added: [0,0,0,0,0]
};

let meetfoxy_7 = {
    prompt: [ `Vanessa`, `Definitely, see ya later!`, 'currentSize', 'beach-bg', ''],
    options: [
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generateAchievement(1);
            generatePrompt(work_beach);
        })
    ],
    added: [0,0,0,0,0]
};