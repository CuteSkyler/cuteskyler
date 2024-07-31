let times = 1;
let debug_room1 = {
    prompt: [ '', `debug room`, 'currentSize', 'bedroom-bg', ''],
    options: [
        'Next stage and refresh',
        'Change characters',
        'See current statistics',
        'Next'
    ],
    functions: [
        (function(check){
            if(check) return;
            addDetails([goal,0,0,0,0]);
            generatePrompt(
            debug_room1
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            debug_room_characters
        )}),
        (function(check){
            if(check) return;
            alert(`Muscle: ${regimen.muscle}\nHeight: ${regimen.height}\nIntelligence: ${regimen.intelligence}\nMoney: ${regimen.money}\nEnergy%: ${regimen.energy}`);
            return;    
        }),
        (function(check){
            if(check) return;
            generatePrompt(
                debug_room2
        )})
    ],
    added: [0,0,0,0,0]
};

let debug_room2 = {
    prompt: [ '', `debug room 2 electric boogaloo`, 'currentSize', 'bedroom-bg', ''],
    options: [
        'Specific scenarios'
    ],
    functions: [
        (function(check){
            if(check) return;
            addDetails([goal,0,0,0,0]);
            generatePrompt(
            meetfoxy_2
        )})
    ],
    added: [0,0,0,0,0]
};

let debug_room_characters = {
    prompt: [ '', `Choose character.`, 'currentSize', 'bedroom-bg', ''],
    options: [
        'Vanessa',
        'Nady'
    ],
    functions: [
        (function(check){
            if(check) return;
            theoptions.character = 'Vanessa';
            generatePrompt(
            debug_room1
        )}),
        (function(check){
            if(check) return;
            theoptions.character = 'Nady';
            generatePrompt(
            debug_room1
        )}),
    ],
    added: [0,0,0,0,0]
};