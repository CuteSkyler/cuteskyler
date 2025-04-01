let webm_or_gif = 'webm';
let achievements = [
    {id: 1, name: "Fox of the... beach?", description: "You met Foxy on the beach!", image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/1024/22218-fox-face-icon.png', rare: true, gotten: false},
    {id: 2, name: "Absolutely Splashing!", description: "You got the 'Achievement get!' splash screen.", image: 'https://cdn3.emoji.gg/emojis/9580_mc_3d_grass.png', rare: true, gotten: false},
    {id: 3, name: "I need to be smart for this?", description: "Gained the ability to livestream!", image: 'https://hotemoji.com/images/dl/r/movie-camera-emoji-by-google.png', rare: false, gotten: false},
    {id: 4, name: "Outclassing everyone", description: "Gained the ability to attend bodybuilding competitions!", image: 'https://icons.iconarchive.com/icons/google/noto-emoji-people-bodyparts/1024/11903-flexed-biceps-icon.png', rare: false, gotten: false},
    {id: 5, name: "I guess penis muscle doesn't count", description: "Beaten Jasmine at the bodybuilding competitions!", image: 'https://whatemoji.org/wp-content/uploads/2020/07/Trophy-Emoji.png', rare: false, gotten: false},
    {id: 6, name: "Humans at the top of the chain", description: "Beaten Nady at the bodybuilding competitions!", image: 'https://whatemoji.org/wp-content/uploads/2020/07/Trophy-Emoji.png', rare: false, gotten: false},
    {id: 7, name: "Fox of the... beach?", description: "You met Foxy on the beach!", image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/1024/22218-fox-face-icon.png', rare: true, gotten: false},
    {id: 8, name: "A $3,153 Box Office", description: "You met the fanatic at the gym", image: 'https://upload.wikimedia.org/wikipedia/en/4/41/The_Fanatic_-_release_poster.jpg', rare: true, gotten: false},
    {id: 9, name: "Who ya gonna call?", description: "You discovered the cheatcode for Nady!", image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/1024/22218-fox-face-icon.png', rare: true, gotten: false},
    {id: 10, name: "You wouldn't steal a car.", description: "Activated a naughty cheat.", image: 'https://img.icons8.com/emoji/452/pirate-flag.png', rare: false, gotten: false}
]
let too_tired = {
    prompt: [ '', `Vanessa is feeling way too tired to do anything anymore for the day, let's sleep it out for now...`, '', 'bedroom-bg', 'https://media0.giphy.com/media/mwv5LrIc9MqY0ZXtIk/giphy.gif?cid=6c09b952qajz20zwsuxno121nbkaqpue38wc4obkcdewm7t7&ep=v1_stickers_related&rid=giphy.gif&ct=ts'],
    options: [
        'Sleep...'
    ],
    functions: [
        (function(check){
            if(check) return;
            dayspassed += 1;
            generatePrompt(
            menu
        ); 
        regimen.energy = 100;
        })
    ],
    added: [0,0,0,0,0]
};

let temporary_boosts = {
    muscle: 1,
    money: 1,
    energy: 1
};

function generatePrompt(
    {prompt: [thespeaker, tekst, image, background, overrideImage], options: [optionA, optionB, optionC, optionD], functions: [funcA, funcB, funcC, funcD], added: [muscle, height, intelligence, money, energy]}
){
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
        )
        return;
    }
    else {

        let story = document.createElement('div');
        story.id = 'story';
        let text = document.createElement('p');
        text.id = 'text';
        if (tekst === 'randomiseStatus') tekst = statuses[Math.floor(Math.random() * statuses.length)];
        tekst = tekst.replace('Vanessa', theoptions.username);
        text.innerHTML = tekst;
        let speaker = document.createElement('p');
        speaker.id = 'speaker';
        thespeaker = thespeaker.replace('Vanessa', theoptions.username);
        if (thespeaker.length > 0) { speaker.innerHTML = `${thespeaker}:` }
        else { speaker.innerHTML = ''; }
        let options = document.createElement('div');
        options.id = 'options'
        let option1 = document.createElement('div');
        options.tabIndex = '-1';
        option1.classList.add('option');
        option1.id = 'optionA';
        let option2 = document.createElement('div');
        options.tabIndex = '-1';
        option2.classList.add('option');
        option2.id = 'optionB';
        let option3 = document.createElement('div');
        options.tabIndex = '-1';
        option3.classList.add('option');
        option3.id = 'optionC';
        let option4 = document.createElement('div');
        options.tabIndex = '-1';
        option4.classList.add('option');
        option4.id = 'optionD';

        if (speaker) text.prepend(speaker);
        story.append(text);

        if (funcA) {
            if (funcA(true) === 'Not available...') {
                optionA = 'Not available...'
            }
        };
        if (optionA === 'Not available...') {
            option1.style.color = '#555';
        }
        else {
            option1.style.color = 'black';
            option1.classList.add('clickable');
        };
        option1.innerHTML = optionA;
        options.append(option1);

        if (optionB) {
            if (funcB) {
                if (funcB(true) === 'Not available...') {
                    optionB = 'Not available...'
                }
            };
            if (optionB === 'Not available...') {
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
        if (optionC) {
            if (funcC) {
                if (funcC(true) === 'Not available...') {
                    optionC = 'Not available...'
                }
            };
            if (optionC === 'Not available...') {
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
        if (optionD) {
            if (funcD) {
                if (funcD(true) === 'Not available...') {
                    optionD = 'Not available...'
                }
            };
            if (optionD === 'Not available...') {
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
        let progress = document.createElement('div');
        let current_job_element = document.createElement('p');
        progress.id = 'progress';
        current_job_element.id = 'current_job';
        current_job_element.innerHTML = theoptions.current_job
        progress.dataset['progress'] = `${(regimen.muscle-Math.pow(10,(regimen.stage+1)))/(Math.pow(10,(regimen.stage+2)))*1000/10}%`;
        document.querySelector('#prompt').innerHTML = '';
        document.querySelector('#prompt').append(story);
        document.querySelector('#story').append(current_job_element);
        document.querySelector('#prompt').append(progress);
        document.querySelector('#prompt').append(options);

        document.querySelector('#progress').style.setProperty('--progress', (regimen.muscle-Math.pow(10,(regimen.stage+1)))/(Math.pow(10,(regimen.stage+2)))*1000/10);

        document.querySelector('#optionA').addEventListener('click', e => { e.preventDefault(); funcA() });
        if (funcB) document.querySelector('#optionB').addEventListener('click', e => { e.preventDefault(); funcB() });
        if (funcC) document.querySelector('#optionC').addEventListener('click', e => { e.preventDefault(); funcC() });
        if (funcD) document.querySelector('#optionD').addEventListener('click', e => { e.preventDefault(); funcD() });

        addDetails([Math.ceil(muscle * temporary_boosts.muscle), Math.ceil(height * temporary_boosts.muscle), intelligence, Math.ceil(money * temporary_boosts.money), Math.ceil(energy * temporary_boosts.energy)], true);

        if(muscle !== 0) temporary_boosts.muscle = 1;
        if(energy !== 0) temporary_boosts.energy = 1;
        if(money !== 0) temporary_boosts.energy = 1;

        if (image.startsWith('currentSize')) image = regimen.stage;
        if (overrideImage) {
            if (overrideImage.endsWith('.webm')) {
                let webm = document.createElement('video');
                webm.autoplay = true;
                webm.loop = true;
                document.querySelector('#upper').prepend(webm);
                document.querySelector('#upper video').src = overrideImage;
                document.querySelector('#upper video').style.animation = 'showCharacter 250ms ease-out forwards';
                setTimeout(() => { document.querySelector('#upper video').style.animation = '' }, 250);
            }
            else {
                let img = document.createElement('img');
                document.querySelector('#upper').prepend(img);
                if (!overrideImage) document.querySelector('#upper img').src = `./renders/${theoptions.character}/${image}.gif`;
                else document.querySelector('#upper img').src = overrideImage;
                document.querySelector('#upper img').style.animation = 'showCharacter 250ms ease-out forwards';
                setTimeout(() => { document.querySelector('#upper img').style.animation = '' }, 250);
            }
        }
        else {
            if (webm_or_gif === 'webm' && !overrideImage.endsWith('.png') && !overrideImage.endsWith('.gif')) {
                let webm = document.createElement('video');
                webm.autoplay = true;
                webm.loop = true;
                document.querySelector('#upper').prepend(webm);
                document.querySelector('#upper video').src = `${stagelinks[theoptions.character][image - 1]}`;
                document.querySelector('#upper video').style.animation = 'showCharacter 250ms ease-out forwards';
                setTimeout(() => { document.querySelector('#upper video').style.animation = '' }, 250);
            }
            else {
                let img = document.createElement('img');
                document.querySelector('#upper').prepend(img);
                document.querySelector('#upper img').src = `./renders/${theoptions.character}/${image}.gif`;
                document.querySelector('#upper img').style.animation = 'showCharacter 250ms ease-out forwards';
                setTimeout(() => { document.querySelector('#upper img').style.animation = '' }, 250);
            }
        }
        document.querySelector('#upper .bg').style.backgroundImage = `var(--${background}`;
    };
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
        case 'NadyGym':{
            let chance = Math.floor(Math.random()*10);
            if(chance > 8 || attempts === 10){
                attempts = 0;
                generatePrompt(
                    randomEncountersNadyGym[Math.floor(Math.random()*randomEncountersNadyGym.length)].prompt
                )
            }
            else{
                attempts += 1
                generatePrompt(
                    regularGymWithNady
                )
            }
            break;
        };
        case 'FoxyGym':{
            let chance = Math.floor(Math.random()*10);
            if(chance > 4 || attempts === 10){
                attempts = 0;
                generatePrompt(
                    randomEncountersFoxyGym[Math.floor(Math.random()*randomEncountersFoxyGym.length)].prompt
                )
            }
            else{
                attempts += 1
                generatePrompt(
                    regularGymWithFoxy
                )
            }
            break;
        };
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

const randomEncountersNadyGym = [
    {
        name: 'Cheat',
        prompt: {
            prompt: [ '', `
                Nady walks towards Vanessa, as if to wanting to tell her something.    
            `, 'currentSize', 'gym-bg', ''],
            options: [
                'She says something...',
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    hanging_out_Nady_Cheat_2
                )})
            ],
            added: [0,0,0,0,0]
        }
    }
]

const randomEncountersFoxyGym = [
    {
        name: 'Ass',
        prompt: {
            prompt: [ '', `During the workout, a person walks by. He doesn't seem to happy. He walks over to Vanessa.`, 'currentSize', 'gym-bg', ''],
            options: [
                'He says something...',
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    hanging_out_Foxy_Ass_2
                )})
            ],
            added: [0,0,0,0,0]
        }
    },
    {
        name: 'Photo',
        prompt: {
            prompt: [ '', `During the workout, a person walks by. He seems ecstatic to see you two girls working out. He walks over to Vanessa.`, 'currentSize', 'gym-bg', ''],
            options: [
                'He wants to ask something it seems...',
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    hanging_out_Foxy_Photo_2
                )})
            ],
            added: [0,0,0,0,0]
        }
    }
]

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
                    randomEncountersBeach.splice(randomEncountersBeach.findIndex(pow => pow.name === 'MeetFoxy'), 1)
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
            `, 'currentSize', 'alley-bg', 'https://files.catbox.moe/t2pcb5.gif'],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    outside
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
            `, 'currentSize', 'alley-bg', 'https://files.catbox.moe/t2pcb5.gif'],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    outside
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
            `, 'currentSize', 'alley-bg', 'https://files.catbox.moe/t2pcb5.gif'],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    outside
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
            `, 'currentSize', 'alley-bg', 'https://files.catbox.moe/t2pcb5.gif'],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    outside
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
            `, 'currentSize', 'alley-bg', 'https://files.catbox.moe/t2pcb5.gif'],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    outside
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
            `, 'currentSize', 'alley-bg', 'https://files.catbox.moe/t2pcb5.gif'],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    outside
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
            `, 'currentSize', 'alley-bg', 'https://files.catbox.moe/t2pcb5.gif'],
            options: [
                'Back...'
            ],
            functions: [
                (function(check){
                    if(check) return;
                    generatePrompt(
                    outside
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



let in_mini_game = false;

let minigamesettings = {
    num: 0,
    rep: 0,
    temp_block: false,
    amount_of_frames: 60
};

let click = document.querySelector('div#clicky');
let show = document.querySelector('div#upper > img');
let show2 = document.querySelector('div#upper > .bg');
let effect = document.querySelector('div#effect');

function setupMinigame(){
    show = document.querySelector('div#upper > img');
    show2 = document.querySelector('div#upper > .bg');
    show.src = './testing/output_frame0001.png';
    show2.style.backgroundImage = 'var(--gym-bg)';
    let clicky = document.createElement('div');
    let selection = document.createElement('select');
    let option = document.createElement('option');
    Object.keys(difficulities).forEach(value =>{
        option = document.createElement('option');
        option.value = value;
        option.innerHTML = value;
        selection.append(option);
    });
    selection.id = 'difficult';
    clicky.id = 'clicky';
    document.querySelector('#story').innerHTML = '';
    document.querySelector('div#options').innerHTML = '';
    document.querySelector('#story').append(clicky);
    document.querySelector('#options').append(selection);
    click = document.querySelector('div#clicky');
    show = document.querySelector('div#upper > img');
    show2 = document.querySelector('div#upper > .bg');
    effect = document.querySelector('div#effect');
    difficult = document.querySelector('select#difficult');

    let returning = document.createElement('div');
    returning.id = 'optionA';
    returning.innerHTML = 'Return...';
    returning.addEventListener('click', (e)=>{
        e.preventDefault();
        generatePrompt(menu);
        return;
    });
    document.querySelector('div#options').append(returning);

    click.addEventListener('click', (e)=>{
        e.preventDefault();
        clickEvent();
    });

    in_mini_game = true;
    loop();
}

function clickEvent(){
    if(!in_mini_game) return;
    changeReps(1);
    return;
}

function changeNumber(amount){
    if(!in_mini_game) return;
    addDetails([Math.ceil(addative * temporary_boosts.muscle), 0, 0, 0, 0], true);
    minigamesettings.num += amount;
    effect.style.animation = `ass 1s ease-in-out forwards`;
    setTimeout(()=>{effect.style.animation = ''}, 1000);
};

function changeReps(amount){
    if(!in_mini_game) return;
    if(minigamesettings.temp_block == true && minigamesettings.rep == 0) minigamesettings.temp_block = false;
    if(minigamesettings.temp_block == true && amount > 0) return;
    if(minigamesettings.rep + amount <= 0) minigamesettings.rep = 0;
    else minigamesettings.rep += amount;
    minigamesettings.rep = Math.floor(minigamesettings.rep*100)/100;
    if(minigamesettings.rep >= 10 && minigamesettings.temp_block == false){
        minigamesettings.temp_block = true;
        changeNumber(1);
    };
    return;
};

let division = Math.floor(50*(1/(minigamesettings.num+1)));
let timing = (1/division)*1000;
let total_amount_of_reps = 0;
const difficulities = {
    'Easy': 12.5,
    'Normal': 25,
    'Difficult': 50,
    'Really Difficult': 100,
    'Extremely Difficult': 200,
    'Excessively Difficult': 400,
    'Vanessas Difficulity': 800
};
let addative = 0;
effect.innerHTML = `+${addative}kg`;

let difficult = document.querySelector('select#difficult');
function frameLoop(){
    if(!in_mini_game) return;
    if(minigamesettings.temp_block == true){
        division = 60;
        timing = (1/division)*1000;
    }else{
        division = Math.floor(difficulities[difficult.value]*((minigamesettings.num)/50+1));
        timing = (1/division)*1000;
    }
    if(minigamesettings.rep == 0) return;
    changeReps(-0.1);

    let progress = document.querySelector('#progress');
    progress.dataset['progress'] = `${(regimen.muscle-Math.pow(10,(regimen.stage+1)))/(Math.pow(10,(regimen.stage+2)))*1000/10}%`;
    progress.style.setProperty('--progress', (regimen.muscle-Math.pow(10,(regimen.stage+1)))/(Math.pow(10,(regimen.stage+2)))*1000/10);
    
    addative = Math.ceil(((regimen.muscle * difficulities[difficult.value]/100)*multiplier)/10);
    effect.innerHTML = `+${addative}kg`;
    query = Math.floor(Math.floor(minigamesettings.rep*10)/100*minigamesettings.amount_of_frames);
    
    if(query > minigamesettings.amount_of_frames) query = minigamesettings.amount_of_frames;
    show.src = `./testing/output_frame00${query < 10?'0':''}${query==0?'1':query}.png`;
    click.style.background = `linear-gradient(0deg, ${theoptions.accent_colour} ${(minigamesettings.rep/10)*100}%, transparent ${(minigamesettings.rep/10)*100}%)`;
    return;
};

window.addEventListener('mousemove', (e)=>{
    if(!in_mini_game) return;
    effect.style.top = `${e.clientY+10}px`;
    effect.style.left = `${e.clientX+10}px`;
});

function loop(){
    if(!in_mini_game) return;
    frameLoop();
    setTimeout(loop, timing);
};