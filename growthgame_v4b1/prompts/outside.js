let outside = {
    prompt: [ '', `
        Vanessa walked outside, it sure is better than sitting inside all day, now where to go?
        `,
        'currentSize', 'outside-bg', ''],
    options: [
        'Go to the library',
        'Go to the mall',
        'Go to the beach',
        'More...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            library
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
            if(theoptions.current_job !== 'lifeguard') return 'Not available...';
            if(check) return;
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
            outside
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
            if(check) if(regimen.money >= 100) return; else return 'Not available...';
            if(regimen.money <= 100) return;
            randomEncounter(
                'junkie'
            )
        }),
        (function(check){
            if(check) return;
            generatePrompt(
            outside
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

let library = {
    prompt: [ '', `A place for the smart and knowledged. Maybe read a book and increase your intelligence?`, 'currentSize', 'library-bg', ''],
    options: [
        'Read about some work-out techniques',
        'Read about money investing techniques',
        'Read about energy saving techniques',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            read_workout
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            read_money
        )}),
        (function(check){
            if(check) if(temporary_boosts.energy <= 0) return 'Not available...'; else return false;
            if(temporary_boosts.energy <= 0) return;
            generatePrompt(
            read_energy
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            outside
        )})
    ],
    added: [0,0,0,0,0]
};

let read_energy = {
    prompt: [ '', `After a long study session about energy conservation, manipulation and generation, you feel as if you've got it all figured out. (Temporary boost in energy!)`, 'currentSize', 'library-bg', ''],
    options: [
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            temporary_boosts.energy -= 0.5;
            generatePrompt(
            library
        )})
    ],
    added: [0,0,15,0,0]
};

let read_money = {
    prompt: [ '', `After a long study session about wealth equality, standard deviation and cryptographic currency, you feel as if you've got it all figured out. (Temporary boost in earning money!)`, 'currentSize', 'library-bg', ''],
    options: [
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            temporary_boosts.money += 0.25;
            generatePrompt(
            library
        )})
    ],
    added: [0,0,25,0,40]
};

let read_workout = {
    prompt: [ '', `After a long study session about triceps, biceps and quadraceps, you feel as if you've got it all figured out. (Temporary boost in gaining muscle mass!)`, 'currentSize', 'library-bg', ''],
    options: [
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            temporary_boosts.muscle += 0.25;
            generatePrompt(
            library
        )})
    ],
    added: [0,0,25,0,40]
};