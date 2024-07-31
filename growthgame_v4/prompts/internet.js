let internet = {
    prompt: [ '', "On your mark, get set, we're riding on the internet.", '', 'internet-bg', ''],
    options: [
        'Livestream',
        'DarkWeb browsing',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) if(theoptions.current_job !== 'livestreamer') return 'Not available...'; else return;
            if(theoptions.current_job !== 'livestreamer') return;
            generatePrompt(
            livestream
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            darkweb
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [0,0,0,0,0]
};

let livestream = {
    prompt: [ '', 'Streaming your current stature on FigureTV, working out, lifting weights and interacted with chat to both gain muscle, knowledge and even some donations!', 'currentSize', 'internet-bg', ''],
    options: [
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            internet
        )})
    ],
    added: [5,5,5,Math.floor(Math.random()*100+50)*(multiplier*2),50]
};

let darkweb = {
    prompt: [ '', 'Opening The Pumpkin Router...', 'currentSize', 'internet-bg', ''],
    options: [
        'Seek medical supplements at a gamble...',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) if(regimen.money < 1000) return 'Not available...'; else return;
            if(regimen.money < 1000) return;
            randomEncounter(
                'darkweb_supplements'
            )}),
        (function(check){
            if(check) return;
            generatePrompt(
            internet
        )})
    ],
    added: [0,0,0,0,0]
};