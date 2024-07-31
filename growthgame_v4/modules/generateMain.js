let webm_or_gif = 'webm';

let too_tired = {
    prompt: [ '', `Vanessa is feeling way too tired to do anything anymore for the day, let's sleep it out for now...`, 'currentSize', 'background-image'],
    options: [
        'Sleep...'
    ],
    functions: [
        (function(){generatePrompt(
            menu
        ); 
        regimen.energy = 100;
        })
    ],
    added: [0,0,0,0,0]
};

function generatePrompt(
    {prompt: [thespeaker, tekst, image, background, overrideImage], options: [optionA, optionB, optionC, optionD], functions: [funcA, funcB, funcC, funcD], added: [muscle, height, intelligence, money, energy]}
){
    console.count()
    if(!optionA) return new Error("You need to provide at least one option as `optionA`.");
    if(!funcA) return new Error("You need to provide at least one function as `funcA`.");
    if(!tekst) return new Error("You need to provide at least text to be read as `tekst`.");
    switch (document.querySelector('input#gif_setting').checked){
        default:
        case true:{
            webm_or_gif = 'gif';
            break;
        }
        case false:{
            webm_or_gif = 'webm';
            break;
        }
    }

    document.querySelectorAll('#upper img')?.forEach(elem=>{
        elem.remove();
    });
    document.querySelectorAll('#upper video')?.forEach(elem=>{
        elem.remove();
    });

    if(regimen.energy <= 0){
        regimen.energy = 100;
        generatePrompt(
            too_tired
        );
        return;
    };

    let story = document.createElement('div');
    story.id = 'story';
    let text = document.createElement('p');
    text.id = 'text';
    if(tekst === 'randomiseStatus') tekst = statuses[Math.floor(Math.random()*statuses.length)];
    tekst = tekst.replace('Vanessa', theoptions.username);
    text.innerHTML = tekst;
    let speaker = document.createElement('p');
    speaker.id = 'speaker';
    thespeaker = thespeaker.replace('Vanessa', theoptions.username);
    if(thespeaker.length > 0){speaker.innerHTML = `${thespeaker}:`}
    else{speaker.innerHTML = '';}
    let options = document.createElement('div');
    options.id = 'options'
    let option1 = document.createElement('div');
    option1.classList.add('option');
    option1.id = 'optionA';
    let option2 = document.createElement('div');
    option2.classList.add('option');
    option2.id = 'optionB';
    let option3 = document.createElement('div');
    option3.classList.add('option');
    option3.id = 'optionC';
    let option4 = document.createElement('div');
    option4.classList.add('option');
    option4.id = 'optionD';

    if(speaker) text.prepend(speaker);
    story.append(text);

    if(funcA){
        console.log(funcA(true));
        if(funcA(true) === 'Not available...'){
            optionA = 'Not available...'
        }
    };
    if(optionA === 'Not available...'){
        option1.style.color = '#555';
    }
    else{
        option1.style.color = 'black';
        option1.classList.add('clickable');
    };
    option1.innerHTML = optionA;
    options.append(option1);

    if(optionB){
        if(funcB){
            if(funcB(true) === 'Not available...'){
                optionB = 'Not available...'
            }
        };
        if(optionB === 'Not available...'){
            option2.style.color = '#555';
            option2.classList.add('disabled');
        }
        else {
            option2.style.color = 'black';
            option2.classList.add('clickable');
        };
        option2.innerHTML = optionB;
        options.append(option2);
    }
    if(optionC){
        if(funcC){
            if(funcC(true) === 'Not available...'){
                optionC = 'Not available...'
            }
        };
        if(optionC === 'Not available...'){
            option3.style.color = '#555';
            option3.classList.add('disabled');
        }
        else {
            option3.style.color = 'black';
            option3.classList.add('clickable');
        };
        option3.innerHTML = optionC;
        options.append(option3);
    }
    if(optionD){
        if(funcD){
            if(funcD(true) === 'Not available...'){
                optionD = 'Not available...'
            }
        };
        if(optionD === 'Not available...'){
            option4.style.color = '#555';
            option4.classList.add('disabled');
        }
        else {
            option4.style.color = 'black';
            option4.classList.add('clickable');
        };
        option4.innerHTML = optionD;
        options.append(option4);
    }
    document.querySelector('#prompt').innerHTML = '';
    document.querySelector('#prompt').append(story);
    document.querySelector('#prompt').append(options);
    
    document.querySelector('#optionA').addEventListener('click', e=>{e.preventDefault(); funcA()});
    if(funcB) document.querySelector('#optionB').addEventListener('click', e=>{e.preventDefault(); funcB()});
    if(funcC) document.querySelector('#optionC').addEventListener('click', e=>{e.preventDefault(); funcC()});
    if(funcD) document.querySelector('#optionD').addEventListener('click', e=>{e.preventDefault(); funcD()});

    addDetails([muscle, height, intelligence, money, energy], true);

    if(image.startsWith('currentSize')) image = regimen.stage;

    if(webm_or_gif === 'webm' && !overrideImage.endsWith('.png')){
        let webm = document.createElement('video');
        webm.autoplay = true;
        webm.loop = true;
        document.querySelector('#upper').prepend(webm);
        if(!overrideImage) document.querySelector('#upper video').src = `./renders/${theoptions.character}/${image}.webm`;
        else document.querySelector('#upper video').src = overrideImage;
        document.querySelector('#upper video').style.animation = 'showCharacter 250ms ease-out forwards';

        setTimeout(()=>{ document.querySelector('#upper video').style.animation = '' },250);
    }
    else{
        let img = document.createElement('img');
        document.querySelector('#upper').prepend(img);
        if(!overrideImage) document.querySelector('#upper img').src = `./renders/${theoptions.character}/${image}.gif`;
        else document.querySelector('#upper img').src = overrideImage;
        document.querySelector('#upper img').style.animation = 'showCharacter 250ms ease-out forwards';

        setTimeout(()=>{ document.querySelector('#upper img').style.animation = '' },250);
    }
    document.querySelector('#upper .bg').style.backgroundImage = `var(--${background}`;

    return 'Successful!';
};

function buyPropertyClass({property_id, previous_prompt}){

    if(ownership.checkOwned(`${property_id}`)){
        generatePrompt({
            prompt: [ '', `You've already bought the ${ownership[`${property_id}`].name}!`, '', 'generic-bg', ''],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    previous_prompt
                )})
            ],
            added: [0,0,-1,0,0]
        });
        return;
    };

    if(pricelist[`${property_id}`].price <= regimen.money){
        ownership.setOwnership(`${property_id}`, true);
        generatePrompt({
            prompt: [ '', `You just bought the ${pricelist[`${property_id}`].name}`, '', 'generic-bg', 'https://clipartmag.com/images/green-dollar-signs-19.gif'],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    previous_prompt
                )})
            ],
            added: [0,0,0,-1*pricelist[`${property_id}`].price,0]
        });
    }

    else{
        generatePrompt({
            prompt: [ '', `You cannot afford to buy the ${pricelist[`${property_id}`].name}!`, '', 'generic-bg', ''],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    previous_prompt
                )})
            ],
            added: [0,0,-1,0,0]
        });
    }
};

let attempts = 0;
function randomEncounter(enviornment){
    switch (enviornment){
        case 'beach':{
            let chance = Math.floor(Math.random()*10);
            if(chance > 8 || attempts === 10){
                attempts = 0;
                generatePrompt(
                    randomEncountersBeach[Math.floor(Math.random()*randomEncountersBeach.length)].prompt
                )
            }
            else{
                attempts += 1;
                generatePrompt(
                    regularBeachStroll
                )
            }
            break;
        };
        case 'mall':{
            let chance = Math.floor(Math.random()*10);
            if(chance > 8 || attempts === 10){
                attempts = 0;
                generatePrompt(
                    randomEncountersMall[Math.floor(Math.random()*randomEncountersMall.length)].prompt
                )
            }
            else{
                attempts += 1;
                generatePrompt(
                    regularMallStroll
                )
            }
            break;
        };
        case 'junkie':{
            generatePrompt(
                randomEncountersJunkie[Math.floor(Math.random()*randomEncountersJunkie.length)].prompt
            )
            break;
        };
        case 'darkweb_supplements':{
            let chance = Math.floor(Math.random()*10);
            if(chance > 8 || attempts === 10){
                attempts = 0;
                generatePrompt(
                    randomDrugsTrade[Math.floor(Math.random()*randomDrugsTrade.length)].prompt
                )
            }
            else{
                attempts += 1;
                generatePrompt(
                    regularDrugsTrade
                )
            }
            break;
        };
        default:{
            return;
        };
    };
    return;
};

const randomDrugsTrade = [
    {
        name: 'MediumSized',
        prompt: {
            prompt: [ '', `You saw a pretty alright deal for some supplements. It seems that it wasn't a fake listing and feel like you're speeding up growing muscular mass.`, 'currentSize', 'beach-bg', ''],
            options: [
                'Back...',
            ],
            functions: [
                (function(check){
                    if(check) return;
                    multiplier += 1.025
                    generatePrompt(
                    darkweb
                )})
            ],
            added: [0,0,0,-1000,0]
        }
    },
    {
        name: 'LargeSized',
        prompt: {
            prompt: [ '', `You saw a pretty great deal for some supplements. It seems that it wasn't a fake listing and feel like you're quickly speeding up growing muscular mass.`, 'currentSize', 'beach-bg', ''],
            options: [
                'Back...',
            ],
            functions: [
                (function(check){
                    if(check) return;
                    multiplier += 1.05
                    generatePrompt(
                    darkweb
                )})
            ],
            added: [0,0,0,-1000,0]
        }
    },
    {
        name: 'LargeSized',
        prompt: {
            prompt: [ '', `You saw a once in a lifetime deal for some supplements. It seems that it wasn't a fake listing either and feel like you're really rapidly speeding up growing muscular mass.`, 'currentSize', 'beach-bg', ''],
            options: [
                'Back...',
            ],
            functions: [
                (function(check){
                    if(check) return;
                    multiplier += 1.1
                    generatePrompt(
                    darkweb
                )})
            ],
            added: [0,0,0,-1000,0]
        }
    }
]

const randomEncountersBeach = [
    {
        name: 'MeetFoxy',
        prompt: {
            prompt: [ '', `Strolling along the beach, Vanessa sees a bright orange Fox passing by.`, 'currentSize', 'beach-bg', ''],
            options: [
                'Go to her and ask her name',
                'Ignore and stroll futher along...',
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    meetfoxy_2
                )}),
                (function(check){
                    if(check) return;
                    generatePrompt(
                    beach
                )})
            ],
            added: [0,0,1,0,0]
        }
    }
]

const randomEncountersMall = [
    {
        name: 'GetMoney',
        prompt: {
            prompt: [ '', `When strolling through the quite large mall, Vanessa finds a two dollar bill lying on the floor, what a lucky day!`, 'currentSize', 'alley-bg', ''],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    mall
                )})
            ],
            added: [0,0,0,2,0]
        }
    }
]

const randomEncountersJunkie = [
    {
        name: 'GainMuscle',
        prompt: {
            prompt: [ '', `
                You gave the junkie $100 to receive... a muscular boost!
            `, 'currentSize', 'alley-bg', './renders/misc_characters/steve.gif'],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    mall
                )})
            ],
            added: [10,0,0,-100,0]
        }
    },
    {
        name: 'LoseMuscle',
        prompt: {
            prompt: [ '', `
                You gave the junkie $100 to receive... a muscular loss...
            `, 'currentSize', 'alley-bg', './renders/misc_characters/steve.gif'],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    mall
                )})
            ],
            added: [-10,0,0,-100,0]
        }
    },
    {
        name: 'GainHeight',
        prompt: {
            prompt: [ '', `
                You gave the junkie $100 to receive... a lengthening boost!
            `, 'currentSize', 'alley-bg', './renders/misc_characters/steve.gif'],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    mall
                )})
            ],
            added: [0,10,0,-100,0]
        }
    },
    {
        name: 'LoseHeight',
        prompt: {
            prompt: [ '', `
                You gave the junkie $100 to receive... a shortening loss...
            `, 'currentSize', 'alley-bg', './renders/misc_characters/steve.gif'],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    mall
                )})
            ],
            added: [0,-10,0,-100,0]
        }
    },
    {
        name: 'GainIntelligence',
        prompt: {
            prompt: [ '', `
                You gave the junkie $100 to receive... an intellectual stimulant!
            `, 'currentSize', 'alley-bg', './renders/misc_characters/steve.gif'],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    mall
                )})
            ],
            added: [0,0,10,-100,0]
        }
    },
    {
        name: 'LoseIntelligence',
        prompt: {
            prompt: [ '', `
                You gave the junkie $100 to receive... a dumber maker...
            `, 'currentSize', 'alley-bg', './renders/misc_characters/steve.gif'],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    mall
                )})
            ],
            added: [0,0,-10,-100,0]
        }
    },
    {
        name: 'gainEnergy',
        prompt: {
            prompt: [ '', `
                You gave the junkie $100 to receive... a garguantuan boost in energy! You feel energized to the max!
            `, 'currentSize', 'alley-bg', './renders/misc_characters/steve.gif'],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    mall
                )})
            ],
            added: [0,0,0,0,-5000]
        }
    }
]

let regularBeachStroll = {
    prompt: [ '', 'After strolling onto the beach, there was nothing of note. The beach was nice, the sounds of the waves were pleasant to the ears but nothing noteworthy.', 'currentSize', 'beach-bg', ''],
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
    added: [1,0,0,0,10]
};

let regularMallStroll = {
    prompt: [ '', `After strolling around the mall, full of lovely, but albeit, loud people, you find nothing noteworthy apart from a few malls that look interesting. Maybe Vanessa should visit some?`, 'currentSize', 'alley-bg', ''],
    options: [
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            mall
        )})
    ],
    added: [1,0,0,0,10]
};

let regularDrugsTrade = {
    prompt: [ '', `Well, it seems that the guys you bought illegal substances from did a rugpull and you just lost a grand, amazing.`, 'currentSize', 'alley-bg', ''],
    options: [
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            darkweb
        )})
    ],
    added: [0,0,-10,-1000,0]
};