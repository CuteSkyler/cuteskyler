let fbb_jasmine = {
    prompt: [ '', "Vanessa puts on her competing outfit, ready to compete against her first foe. A mild thumping can be heard from the other side of the arena. A brown skinned amazon with a huge dick and widly coloured hair comes striding out, smiling to Vanessa when she puts a gaze onto her.", 'currentSize', 'gym-bg', ''],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            fbb_jasmine2
        )})
    ],
    added: [0,0,0,0,0]
};

let fbb_jasmine2 = {
    prompt: [ 'Jasmine', "Oh hey, I know you, big fan! You're Vanessa, right?", 'currentSize', 'gym-bg', "https://files.catbox.moe/c9tr0k.png"],
    options: [
        'You respond...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            fbb_jasmine3
        )})
    ],
    added: [0,0,0,0,0]
};

let fbb_jasmine3 = {
    prompt: [ 'Vanessa', "Yep, I am, you know me?", 'currentSize', 'gym-bg', ""],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            fbb_jasmine4
        )})
    ],
    added: [0,0,0,0,0]
};

let fbb_jasmine4 = {
    prompt: [ 'Jasmine', "Of course I know you, you're a big inspiration! You're the reason I got so big! Pretty amazing to see myself competing against the one and only.", 'currentSize', 'gym-bg', "https://files.catbox.moe/c9tr0k.png"],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            fbb_jasmine5
        )})
    ],
    added: [0,0,0,0,0]
};

let fbb_jasmine5 = {
    prompt: [ 'Vanessa', "I guess it's pretty cool meeting a fan, let's see who's the strongest, though!", 'currentSize', 'gym-bg', ""],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            fbb_jasmine6
        )})
    ],
    added: [0,0,0,0,0]
};

let fbb_jasmine6 = {
    prompt: [ 'Jasmine', "You betcha, see you on the podium!", 'currentSize', 'gym-bg', "https://files.catbox.moe/c9tr0k.png"],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            fbb_jasmine7
        )})
    ],
    added: [0,0,0,0,0]
};

let fbb_jasmine7 = {
    prompt: [ '', "You both walk onto the podium. One by one you both show off your individual muscle groups. Biceps, triceps, lats, hamstrings, until one of you reigns supreme. The judges tally up their votes, and it seems that...", 'currentSize', 'gym-bg', ""],
    options: [
        'Who will win..?'
    ],
    functions: [
        (function(check){
            if(check) return;
            if(regimen.muscle > 14000){
                generatePrompt(
                    fbb_jasmine_win
                )
            }
            else{
                generatePrompt(
                    fbb_jasmine_fail
                )
            }
        })
    ],
    added: [0,0,0,0,0]
};

let fbb_jasmine_fail = {
    prompt: [ '', "Jasmine reigns supreme! Unfortunately, it seems that she definitely outclassed you physically. Maybe hit the gym a few more times? You walk over to her, you both smile against another after a competition well done.", 'currentSize', 'gym-bg', ""],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
                fbb_jasmine_fail2
            )
        })
    ],
    added: [0,0,0,0,0]
};

let fbb_jasmine_fail2 = {
    prompt: [ 'Jasmine', "Hey, no need to worry, I don't gain muscle mass nearly as fast as you do, just try again next week and let's see who wins then! I'm sure you'll definitely win then!", 'currentSize', 'gym-bg', "https://files.catbox.moe/c9tr0k.png"],
    options: [
        'Leave...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
                menu
            )
        })
    ],
    added: [0,0,0,0,100]
};

let fbb_jasmine_win = {
    prompt: [ '', "Vanessa reigns supreme! Who would've thought any different! Jasmine, while downtrodden, still comes over to you smiling and enthusiastic.", 'currentSize', 'gym-bg', ""],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
                fbb_jasmine_win2
            )
        })
    ],
    added: [0,0,0,0,0]
};

let fbb_jasmine_win2 = {
    prompt: [ 'Jasmine', "There was not really a competition with your massive stature compared to mine, haha! Means I still have to hit the weights, clearly! But let's hope to see you get larger as well, see ya!", 'currentSize', 'gym-bg', "https://files.catbox.moe/c9tr0k.png"],
    options: [
        'Leave...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
                menu
            )
        })
    ],
    added: [0,0,10000,0,100]
};