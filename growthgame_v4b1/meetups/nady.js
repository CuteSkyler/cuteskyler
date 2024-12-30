let regularGymWithNady = {
    prompt: [ '', `Vanessa thinks it's probably more than enough working out for now, while Nady still hapilly lifts tonnes more for a couple more hours. Vanessa waves goodbye while Nady puts on some more weight on her barbells.`, 'currentSize', 'gym-bg', ''],
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
    added: [150,25,5,0,75]
};

let hanging_out_Nady = {
    prompt: [ '', `Vanessa decides it's time to meet that green vixen that she'd won out against in the latest female body building competition. She goes outside, into the beautiful morning sun to go and work out a tonne with her fellow gym rat.`, 'currentSize', 'outside-bg', ''],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Nady_2
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Nady_2 = {
    prompt: [ 'Nady', `Hey there, beefcake! Great to see you again, how about we go and bulk up a bit, I'm feeling a bit small at the moment, if you couldn't tell, I need that pump goin'!`, 'currentSize', 'outside-bg', characters.Nady.Gif],
    options: [
        'You respond...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out_Nady_3
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Nady_3 = {
    prompt: [ 'Vanessa', `Sure, let's head inside.`, 'currentSize', 'outside-bg', ''],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            randomEncounter(
            'NadyGym'
        )})
    ],
    added: [0,0,0,0,0]
};



let hanging_out_Nady_Cheat_2 = {
    prompt: [ 'Nady', `Hey, y'know, if you ever wanna work out some more, you can always call me! (Try using 'thegreenvixen' as a cheatcode!)`, 'currentSize', 'gym-bg', characters.Nady.Gif],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
                hanging_out_Nady_Cheat_3
            )    
        })
    ],
    added: [0,0,0,0,0]
};

let hanging_out_Nady_Cheat_3 = {
    prompt: [ 'Vanessa', `Oh, uh, yeah, sure, thanks, I'll 'member to give you a call sometime.`, 'currentSize', 'gym-bg', ''],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generateAchievement(9);
            generatePrompt(
                menu
            )    
        })
    ],
    added: [1000,50,5,0,75]
};