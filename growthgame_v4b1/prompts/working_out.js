let work_out = {
    prompt: [ '', `What work out will Vanessa do?`, 'currentSize', 'bedroom-bg', ''],
    options: [
        'Push ups',
        'Go running on the threadmill',
        'Punch the punching bag',
        'More...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            push_ups
        )}),
        (function(check){
            if(check) if(ownership.checkOwned('threadmill')) return false; else return 'Not available...';
            if(ownership.checkOwned('threadmill'))generatePrompt(
                threadmill
            );
        }),
        (function(check){
            if(check) if(ownership.checkOwned('punchingbag')) return false; else return 'Not available...';
            if(ownership.checkOwned('punchingbag'))generatePrompt(
                punchingbag
            );
        }),
        (function(check){
            if(check) return;
            generatePrompt(
            work_out2
        )}),
    ],
    added: [0,0,0,0,0]
};

let work_out2 = {
    prompt: [ '', `What work out will Vanessa do?`, 'currentSize', 'bedroom-bg', ''],
    options: [
        'Use heavy exercise machines',
        'Lift heavy weights',
        'Lift gargantuan dumbbells',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) if(ownership.checkOwned('heavyexercisemachines')) return false; else return 'Not available...';
            if(ownership.checkOwned('heavyexercisemachines'))
            generatePrompt(
                heavyexercisemachines
            )
        }),
        (function(check){
            if(check) if(ownership.checkOwned('heavyweights')) return false; else return 'Not available...';
            if(ownership.checkOwned('heavyweights'))
            setupMinigame();
            // generatePrompt(
            //     heavyweights
            // )
        }),
        (function(check){
            if(check) if(ownership.checkOwned('giganticdumbbells')) return false; else return 'Not available...';
            if(ownership.checkOwned('giganticdumbbells'))
            generatePrompt(
                giganticdumbbells
            )
        }),
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )}),
    ],
    added: [0,0,0,0,0]
};



let push_ups = {
    prompt: [ '', `After having done a heavy set of push ups, Vanessa feels exhausted but has gained some muscle in return.`, 'currentSize', 'bedroom-bg', ''],
    options: [
        'Return'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [1,0,0,0,5]
};

let punchingbag = {
    prompt: [ '', `Vanessa punched that punching bag long and hard and felt exhausted afterwards but luckily gained some muscle back.`, 'currentSize', 'bedroom-bg', ''],
    options: [
        'Return'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [3,0,0,0,5]
};

let threadmill = {
    prompt: [ '', `Vanessa keeps running and running until she can't anymore and gained some real muscular mass by it.`, 'currentSize', 'bedroom-bg', ''],
    options: [
        'Return'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [5,0,0,0,8]
};

let heavyexercisemachines = {
    prompt: [ '', `Vanessa goes towards the expensive but highly effective heavy exercise machines to work out, they work really effectively gaining a real pump but also got really tired by it. Vanessa gained some really effective amounts of pure muscle mass!`, 'currentSize', 'bedroom-bg', ''],
    options: [
        'Return'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [25,1,0,0,15]
};

let heavyweights = {
    prompt: [ '', `Vanessa is looking at the heavy weights, they weigh almost the amount of a dozen bodybuilders. Sweating looking at it, Vanessa tries to pick it up and tries to lift it up, with some effort Vanessa tries and does hold it up for an extended amount of time, gaining some amazing muscle during the session, but Vanessa got really, really tired by it.`, 'currentSize', 'bedroom-bg', ''],
    options: [
        'Return'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [50,2,0,0,75]
};

let giganticdumbbells = {
    prompt: [ '', `Some of the heaviest weights Vanessa could find in the store. Vanessa looks at the size of these absolutely gargantuan dumbbells wondering if it's even possible to lift these things, but with determination, Vanessa grabs both the dumbbells with both hands and with great amounts of effort lifts them off the ground and pushes them into the air with great speed. Vanessa repeats this for a minute or five to really get that pump going and grow some massive muscle. Vanessa grows some gargantuan muscle but also cannot really do anything else for the day.`, 'currentSize', 'bedroom-bg', ''],
    options: [
        'Return'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [90,2,0,0,100]
};