let fbb_nady = {
    prompt: [ '', "Vanessa puts on her competing outfit, ready to compete against her second foe. A pretty loud thumping can be heard from afar. Something green shines out from the other side of the arena. Its mass seemingly getting larger and larger. It seems it's a fox of sorts, she very rapidly and happily strides towards you.", 'currentSize', 'gym-bg', ''],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            fbb_nady2
        )})
    ],
    added: [0,0,0,0,0]
};

let fbb_nady2 = {
    prompt: [ 'Nady', "Oh my gosh, oh my gosh, oh my goshh!! I'm like, your biggest fan! Amazing to see you here, talk meeting your hero!", 'currentSize', 'gym-bg', "https://files.catbox.moe/b9bzfw.webm"],
    options: [
        'You respond...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            fbb_nady3
        )})
    ],
    added: [0,0,0,0,0]
};

let fbb_nady3 = {
    prompt: [ 'Vanessa', "Another fan it seems, last time I had another, but she was way smaller muscle wise. Seeing a beefy fox such as yourself, it's quite intimidating.", 'currentSize', 'gym-bg', ""],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            fbb_nady4
        )})
    ],
    added: [0,0,0,0,0]
};

let fbb_nady4 = {
    prompt: [ 'Nady', "No need to be intimidated, I should be the one intimidated by you, you grow muscle mass like crazy! You're my biggest inspiration at growing gargantuan amounts of mass.", 'currentSize', 'gym-bg', "https://files.catbox.moe/b9bzfw.webm"],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            fbb_nady5
        )})
    ],
    added: [0,0,0,0,0]
};

let fbb_nady5 = {
    prompt: [ 'Vanessa', "Thanks for the compliments, but let's see who actually has the greater mass!", 'currentSize', 'gym-bg', ""],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            fbb_nady6
        )})
    ],
    added: [0,0,0,0,0]
};

let fbb_nady6 = {
    prompt: [ 'Nady', "See you on the podium, Van!", 'currentSize', 'gym-bg', "https://files.catbox.moe/b9bzfw.webm"],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            fbb_nady7
        )})
    ],
    added: [0,0,0,0,0]
};

let fbb_nady7 = {
    prompt: [ '', "You both walk onto the podium. One by one you both show off your individual muscle groups. Biceps, triceps, lats, hamstrings, until one of you reigns supreme. The judges tally up their votes, and it seems that...", 'currentSize', 'gym-bg', ""],
    options: [
        'Who will win..?'
    ],
    functions: [
        (function(check){
            if(check) return;
            if(regimen.muscle > 160000){
                generatePrompt(
                    fbb_nady_win
                )
            }
            else{
                generatePrompt(
                    fbb_nady_fail
                )
            }
        })
    ],
    added: [0,0,0,0,0]
};

let fbb_nady_fail = {
    prompt: [ '', "Nady reigns supreme! Unfortunately, it seems that she definitely outclassed you physically. Maybe hit the gym a few more times? You walk over to her, you both smile against another after a competition well done.", 'currentSize', 'gym-bg', ""],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
                fbb_nady_fail2
            )
        })
    ],
    added: [0,0,0,0,0]
};

let fbb_nady_fail2 = {
    prompt: [ 'Nady', "Hey, no need to worry, I don't gain muscle mass nearly as fast as you do, just try again next week and let's see who wins then! I'm sure you'll definitely win then!", 'currentSize', 'gym-bg', "https://files.catbox.moe/b9bzfw.webm"],
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

let fbb_nady_win = {
    prompt: [ '', "Vanessa reigns supreme! Who would've thought any different! Nady, while downtrodden, still comes over to you smiling and enthusiastic.", 'currentSize', 'gym-bg', ""],
    options: [
        'Next...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
                fbb_nady_win2
            )
        })
    ],
    added: [0,0,0,0,0]
};

let fbb_nady_win2 = {
    prompt: [ 'Nady', "There was not really a competition with your massive stature compared to mine, haha! Means I still have to hit the weights, clearly! But let's hope to see you get larger as well, see ya!", 'currentSize', 'gym-bg', "https://files.catbox.moe/b9bzfw.webm"],
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
    added: [0,0,100000,0,100]
};