let outside = {
    prompt: [ '', `
        Vanessa walked outside, it sure is better than sitting inside all day, now where to go?
        `,
        'currentSize', 'outside-bg', ''],
    options: [
        'Take a stroll...',
        'Go to the mall',
        'Go to work',
        'More...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            mall
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            beach
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            outside_2
        )})
    ],
    added: [0,0,0,0,0]
};

let outside_2 = {
    prompt: [ '', `
        Vanessa walked outside, it sure is better than sitting inside all day, now where to go?
        `,
        'currentSize', 'outside-bg', ''],
    options: [
        'Go to the junkie',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            junkie
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [0,0,0,0,0]
};


let beach = {
    prompt: [ '', "You find yourself on the beach; the workplace as a lifeguard. What do you want to do here?", 'currentSize', 'beach-bg', ''],
    options: [
        'Go do your job',
        'Stride onto the beach for fun',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            if(theoptions.current_job !== 'lifeguard') return;
            generatePrompt(
            work_beach
        )
        }),
        (function(check){
            if(check) return;
            randomEncounter('beach');
        }),
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [0,0,0,0,0]
};


let junkie = {
    prompt: [ '', "You walk towards a weird guy in an alleyway, he seems weirdly trustworthy but at the same time very sketchy. Buying things here have a major risk of going wrong, but it would be at your own discretion.", 'currentSize', 'alley-bg', 'https://files.catbox.moe/t2pcb5.gif'],
    options: [
        'Try to gamble for good stimulants...',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            if(theoptions.current_job !== 'lifeguard') return;
            randomEncounter(
                'junkie'
            )
        }),
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [0,0,0,0,0]
};

let work_beach = {
    prompt: [ '', `Vanessa works long and hard, saving lives, looking out for people, showing off and being a general great lifeguard; Vanessa does feel exhausted afterwards but can probably do it again for a few hours.`, 'currentSize', 'beach-bg', ''],
    options: [
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            beach
        )})
    ],
    added: [1,0,1,50,50]
};