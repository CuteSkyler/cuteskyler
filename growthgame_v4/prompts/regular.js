let statuses = [
    `Vanessa is ready to do some work today!`,
    `Today is a fine day for Vanessa to do some light jogging.`,
    `Vanessa wants to do something active today.`,
    `Sheeps outside are béééh'ing, it's morning and a fine day to do some working out!`,
    `A parrot hit the window, poor thing...`,
    `Another day, another chance to grow some muscle mass, let's do this!`,
    `Vanessa is ready for the day and ready for some REAL exercise today.`
]

class ownershipClass{

    constructor(){
        this.threadmill = false;
        this.punchingbag = false;
        this.heavyexercisemachines = false;
        this.heavyweights = false;
        this.giganticdumbbells = false;
    };

    *setAllOwnership(list){
        this.threadmill = list[0]
        this.punchingbag = list[1]
        this.heavyexercisemachines = list[2]
        this.heavyweights = list[3]
        this.giganticdumbbells = list[4]
    };

    *retrieveList(){
        yield this.threadmill;
        yield this.punchingbag;
        yield this.heavyexercisemachines;
        yield this.heavyweights;
        yield this.giganticdumbbells;
    };

    setOwnership(property_id, boolean){
        this[property_id] = boolean;
        return this;
    };

    checkOwned(property_id){
        return this[property_id];
    };
};

const ownership = new ownershipClass();

const pricelist = {
    threadmill: {name: "threadmill", price: 200},
    punchingbag: {name: "punching bag", price: 400},
    heavyexercisemachines: {name: "heavy exercise machines", price: 1000},
    heavyweights: {name: "heavy weights", price: 600},
    giganticdumbbells: {name: "gigantic dumbbells", price: 4000}
}

let menu = {
    prompt: [ '', 'randomiseStatus', 'currentSize', 'bedroom-bg', ''],
    options: [
        'Work out',
        'Go outside',
        'Choose job',
        'More...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            work_out
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            outside
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            job_choice
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            menu_2
        )})
    ],
    added: [0,0,0,0,0]
};

let menu_2 = {
    prompt: [ '', 'randomiseStatus', 'currentSize', 'bedroom-bg', ''],
    options: [
        'Livestream',
        'Sleep',
        'Go onto the internet',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) if(theoptions.current_job !== "livestreamer") return 'Not available...'; else return;
            if(theoptions.current_job !== "livestreamer") return;
            generatePrompt(
            work_out
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            too_tired
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            internet
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [0,0,0,0,0]
};

let job_choice = {
    prompt: [ '', 'Click on one of the jobs below to follow them, you need to unlock them first, of course! Find more jobs the longer you play and discover.', 'currentSize', 'bedroom-bg', ''],
    options: [
        'Lifeguard',
        'Bodybuilder',
        'Livestreamer',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check){
                if(jobs_unlocked.lifeguard ===  "false"){
                    return 'Not available...';
                }
                else return;
            };
            if(jobs_unlocked.lifeguard !== "true") return;
            theoptions.current_job = 'lifeguard';
            generatePrompt(
            job_choice_success
        )}),
        (function(check){
            if(check){
                if(jobs_unlocked.bodybuilder ===  "false"){
                    return 'Not available...';
                }
                else return;
            };
            if(jobs_unlocked.bodybuilder !== "true") return;
            theoptions.current_job = 'bodybuilder';
            generatePrompt(
            job_choice_success
        )}),
        (function(check){
            if(check){
                if(jobs_unlocked.livestreamer ===  "false"){
                    return 'Not available...';
                }
                else return;
            };
            if(jobs_unlocked.livestreamer !== "true") return;
            theoptions.current_job = 'livestreamer';
            generatePrompt(
            job_choice_success
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [0,0,0,0,0]
};

let job_choice_success = {
    prompt: [ '', 'Successfully changed jobs!', 'currentSize', 'bedroom-bg', ''],
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
    added: [0,0,0,0,0]
};