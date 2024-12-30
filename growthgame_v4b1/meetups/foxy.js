let regularGymWithFoxy = {
    prompt: [ '', `After a long day's worth of pushing Vanessa and Foxy to the limit in terms of working out, it seems that it's best to leave it for now.`, 'currentSize', 'gym-bg', ''],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            regularGymWithFoxy_2
        )})
    ],
    added: [150,25,5,0,0]
};

let regularGymWithFoxy_2 = {
    prompt: [ 'Foxy', `Well, it seems like enough working out for now, see ya later, Vanessa!`, 'currentSize', 'gym-bg', characters.Foxy.Gif],
    options: [
        'You say goodbye...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            regularGymWithFoxy_3
        )})
    ],
    added: [0,0,0,0,0]
};

let regularGymWithFoxy_3 = {
    prompt: [ 'Vanessa', `See ya later, Foxy!`, 'currentSize', 'gym-bg', ''],
    options: [
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [0,0,0,0,75]
};

let hanging_out_Foxy = {
    prompt: [ '', `You decide to go and meet the nice Fox you met on the beach the other day. You walk outside, the sun shining bright and ready for a grand day's worth of fitness together with Foxy.`, 'currentSize', 'outside-bg', ''],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Foxy_2
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_2 = {
    prompt: [ '', `
            You walk towards the gym and head inside. You see the bright orange Fox already running towards you in excitement.
        `, 'currentSize', 'outside-bg', ''],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Foxy_3
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_3 = {
    prompt: [ 'Foxy', `
            Heyhey, Vanessa! So great to see you again! So, are we gonna train or what!
        `, 'currentSize', 'outside-bg', characters.Foxy.Gif],
    options: [
        'Work out with Foxy...'
    ],
    functions: [
        (function(check){
            if(check) return;
            randomEncounter(
            'FoxyGym'
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_Ass_2 = {
    prompt: [ '?', `
            Hey, get out of the way, you two.
        `, 'currentSize', 'gym-bg', 'https://files.catbox.moe/t2pcb5.gif'],
    options: [
        "You respond with..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Foxy_Ass_3
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_Ass_3 = {
    prompt: [ 'Vanessa', `
            What the hell is your problem?
        `, 'currentSize', 'gym-bg', ''],
    options: [
        "You respond with..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Foxy_Ass_4
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_Ass_4 = {
    prompt: [ '', `
            He looks over to the two of you. Maybe he had only seen part of you from the back or side, but up close and personal, it sure hits different. Sweat begins to form on his head as he begins to shake.
        `, 'currentSize', 'gym-bg', ''],
    options: [
        "He responds..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Foxy_Ass_5
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_Ass_5 = {
    prompt: [ '?', `
            Oh, uhm, sorry gals, I was just, uhm...
        `, 'currentSize', 'gym-bg', 'https://files.catbox.moe/t2pcb5.gif'],
    options: [
        "You respond with..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Foxy_Ass_6
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_Ass_6 = {
    prompt: [ '', `
            You put your hand back as to initiate a solid punch in the face, while you do, he runs off, frightened.
        `, 'currentSize', 'gym-bg', ''],
    options: [
        "Foxy responds..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Foxy_Ass_7
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_Ass_7 = {
    prompt: [ 'Foxy', `
            Wow, that was weird. You sure looked bad-ass, though, haha! At least we got a good pump in before he came.
        `, 'currentSize', 'gym-bg', characters.Foxy.Gif],
    options: [
        "You respond..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Foxy_Ass_8
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_Ass_8 = {
    prompt: [ 'Vanessa', `
            We sure did, well, let's split, it was fun hanging and working out with you, Foxy! Let's do this again soon!
        `, 'currentSize', 'gym-bg', ''],
    options: [
        "Foxy responds..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Foxy_Ass_9
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_Ass_9 = {
    prompt: [ 'Foxy', `
            Definitely, see ya!
        `, 'currentSize', 'gym-bg', characters.Foxy.Gif],
    options: [
        "Back..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [150,10,5,0,75]
};



/* PHOTO */
let hanging_out_Foxy_Photo_2 = {
    prompt: [ 'Fanatic', `
            Oh my god, oh my god, oh my goshhh! It's really you two! I'm basically like, your biggest fan!
        `, 'currentSize', 'gym-bg', 'https://files.catbox.moe/t2pcb5.gif'],
    options: [
        "You happily respond..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Foxy_Photo_3
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_Photo_3 = {
    prompt: [ 'Vanessa', `
            Oh, well, I don't really know what to say. But glad to hear it!
        `, 'currentSize', 'gym-bg', ''],
    options: [
        "He finally asks..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Foxy_Photo_4
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_Photo_4 = {
    prompt: [ 'Fanatic', `
            If I'm not bothering, could I maybe, uhm.. Take a photo with you two?
        `, 'currentSize', 'gym-bg', 'https://files.catbox.moe/t2pcb5.gif'],
    options: [
        "You both say in solidarity..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Foxy_Photo_5
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_Photo_5 = {
    prompt: [ 'Vanessa & Foxy', `
            Sure, let's do this!
        `, 'currentSize', 'gym-bg', ''],
    options: [
        "Afterwards..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Foxy_Photo_6
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_Photo_6 = {
    prompt: [ '', `
            He grabs grabs his phone, puts it into camera mode and tries to take a selfie of his small stature against two massive female bodybuilders. Vanessa and Foxy barely fit into the frame, but they do fit.
        `, 'currentSize', 'gym-bg', ''],
    options: [
        "And then..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Foxy_Photo_7
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_Photo_7 = {
    prompt: [ 'Fanatic', `
            Thank you so so so much! Here's a little something so don't feel as if it was for nothing!
        `, 'currentSize', 'gym-bg', 'https://files.catbox.moe/t2pcb5.gif'],
    options: [
        "He runs off..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generateAchievement(8)
            generatePrompt(
            hanging_out_Foxy_Photo_8
        )})
    ],
    added: [0,0,0,1000,0]
};

let hanging_out_Foxy_Photo_8 = {
    prompt: [ 'Foxy', `
            Well you sure don't see that every day, but it was fun nonetheless! Let's quit working out for now, though. See ya next time?
        `, 'currentSize', 'gym-bg', characters.Foxy.Gif],
    options: [
        "You respond..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Foxy_Photo_9
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Foxy_Photo_9 = {
    prompt: [ 'Vanessa', `
            Definitely, see ya, Foxy!
        `, 'currentSize', 'gym-bg', ''],
    options: [
        "Back..."
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [0,0,0,0,0]
};