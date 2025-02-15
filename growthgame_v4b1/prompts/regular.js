let statuses = [
    `Vanessa is ready to do some work today!`,
    `Today is a fine day for Vanessa to do some light jogging.`,
    `Vanessa wants to do something active today.`,
    `Sheeps outside are béééh'ing, it's morning and a fine day to do some working out!`,
    `A parrot hit the window, poor thing...`,
    `Another day, another chance to grow some muscle mass, let's do this!`,
    `Vanessa is ready for the day and ready for some REAL exercise today.`,
    `Outside is nice, inside is, not nice. Go outside for a change!`,
    `Vanessa stretches a bit while inside, maybe it's time to work out some more?`,
    `Working out is the best thing a gal can do, especially Vanessa! Maybe work out a little bit, or a large bit.`,
    `Vanessa feels like working her absolute best to get the best performance out of herself.`,
    `Hanging out with friends, that seems like a fun idea, maybe Vanessa should try it out!`,
    `The equipment is getting a bit stale, maybe Vanessa should head over to the shop for some new equipment!`,
    `Vanessa feels as if she isn't growing at a rapid enough rate, maybe indulde in some purchases of liquid or powdery goods?`,
    `Sunshine on the skin, lifeguard suit on, yeah, it's working out time, alright.`
]

function truer(string){
    if(string === "true") return true;
    return false;
};

class ownershipClass{

    constructor(){
        this.threadmill = false;
        this.punchingbag = false;
        this.heavyexercisemachines = false;
        this.heavyweights = false;
        this.giganticdumbbells = false;
    };

    setAllOwnership(list){
        this.threadmill = truer(list[0]);
        this.punchingbag = truer(list[1]);
        this.heavyexercisemachines = truer(list[2]);
        this.heavyweights = truer(list[3]);
        this.giganticdumbbells = truer(list[4]);
        return this;
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

    checkAll(){
        return this;
    }
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
        'Attend bodybuilding competitions',
        'Go onto the internet',
        'More...'
    ],
    functions: [
        (function(check){
            if(check) if(theoptions.current_job !== "livestreamer") return 'Not available...'; else return;
            if(theoptions.current_job !== "livestreamer") return;
            generatePrompt(
            livestreaming
        )}),
        (function(check){
            if(check) if(theoptions.current_job !== "bodybuilder" || dayspassed %7 !== 0) return 'Not available...'; else return;
            if(theoptions.current_job !== "bodybuilder" || dayspassed %7 !== 0) return;
            generatePrompt(
            bodybuilding
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            internet
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            menu_3
        )})
    ],
    added: [0,0,0,0,0]
};

let menu_3 = {
    prompt: [ '', 'randomiseStatus', 'currentSize', 'bedroom-bg', ''],
    options: [
        'Hang out with someone',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            hanging_out
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [0,0,0,0,0]
};

let hanging_out = {
    prompt: [ '', 'randomiseStatus', 'currentSize', 'bedroom-bg', ''],
    options: [
        'Hang out with Foxy',
        // 'Hang out with Jasmine',
        'Hang out with Nady',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) if(achievements.find(arg=>arg.id === 7).gotten === false) return 'Not available...'; else return;
            if(achievements.find(arg=>arg.id === 7).gotten === false) return;
            generatePrompt(
            hanging_out_Foxy
        )}),
        // (function(check){
        //     if(check) if(bodybuilding_competed.find(arg=>arg.name === 'Jasmine').fought) return; else return 'Not available...';
        //     // generatePrompt(hanging_out_Jasmine)
        // }),
        (function(check){
            if(check) if(bodybuilding_competed.find(arg=>arg.name === 'Nady').fought) return; else return 'Not available...';
            if(!bodybuilding_competed.find(arg=>arg.name === 'Nady').fought) return;
            generatePrompt(
            hanging_out_Nady
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [0,0,0,0,0]
};

let bodybuilding_competed = [
    {name: "Jasmine", fought: false},
    {name: "Nady", fought: false},
    {name: "Foxy", fought: false}
]

let bodybuilding = {
    prompt: [ '', "Choose who Vanessa will compete against", 'currentSize', 'gym-bg', ''],
    options: [
        'Jasmine',
        'Nady',
        'Foxy',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            fbb_jasmine
        )}),
        (function(check){
            if(check) if(!bodybuilding_competed[0].fought) return 'Not available...'; else return;
            if(!bodybuilding_competed[0].fought) return;
            generatePrompt(
            fbb_nady
        )}),
        (function(check){
            if(check) if(!bodybuilding_competed[1].fought) return 'Not available...'; else return;
            if(!bodybuilding_competed[1].fought) return;
            generatePrompt(
            fbb_foxy
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [0,0,0,0,0]
};

let livestreamoptions = [
    {name: "arms", value : 1},
    {name: "back", value: 1},
    {name: "front", value: 1},
    {name: "legs", value: 1},
    {name: "butt", value: 1}
];

let livestreaming = {
    prompt: [ '', 'What should I show off?', 'currentSize', 'bedroom-bg', ''],
    options: [
        'Arm muscles',
        'Back muscles',
        'Entire front body',
        'More...'
    ],
    functions: [
        (function(check){
            if(check) return;
            if(
                livestreamoptions.find(value => value.value < livestreamoptions[0].value)
            ){
                addDetails([0,0,0,Math.floor((
                    livestreamoptions[livestreamoptions.findIndex(value => value.value < livestreamoptions[0].value)].value/livestreamoptions[0].value
                )*100),0])
            }
            else{
                addDetails([0,0,0,100,0]);
            }
            livestreamoptions[0].value += 1;
            generatePrompt(
            livestreaming_finished
        )}),
        (function(check){
            if(check) return;
            if(
                livestreamoptions.find(value => value.value < livestreamoptions[1].value)
            ){
                addDetails([0,0,0,Math.floor((
                    livestreamoptions[livestreamoptions.findIndex(value => value.value < livestreamoptions[1].value)].value/livestreamoptions[1].value
                )*100),0])
            }
            else{
                addDetails([0,0,0,100,0]);
            }
            livestreamoptions[1].value += 1;
            generatePrompt(
            livestreaming_finished
        )}),
        (function(check){
            if(check) return;
            if(
                livestreamoptions.find(value => value.value < livestreamoptions[2].value)
            ){
                addDetails([0,0,0,Math.floor((
                    livestreamoptions[livestreamoptions.findIndex(value => value.value < livestreamoptions[2].value)].value/livestreamoptions[2].value
                )*100),0])
            }
            else{
                addDetails([0,0,0,100,0]);
            }
            livestreamoptions[2].value += 1;
            generatePrompt(
            livestreaming_finished
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            livestreaming2
        )})
    ],
    added: [0,0,0,0,0]
};

let livestreaming2 = {
    prompt: [ '', 'What should I show off?', 'currentSize', 'bedroom-bg', ''],
    options: [
        'Leg muscles',
        'Butt muscles',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            if(
                livestreamoptions.find(value => value.value < livestreamoptions[3].value)
            ){
                addDetails([0,0,0,Math.floor((
                    livestreamoptions[livestreamoptions.findIndex(value => value.value < livestreamoptions[3].value)].value/livestreamoptions[3].value
                )*100),0])
            }
            else{
                addDetails([0,0,0,100,0]);
            }
            livestreamoptions[3].value += 1;
            generatePrompt(
            livestreaming_finished
        )}),
        (function(check){
            if(check) return;
            if(
                livestreamoptions.find(value => value.value < livestreamoptions[4].value)
            ){
                addDetails([0,0,0,Math.floor((
                    livestreamoptions[livestreamoptions.findIndex(value => value.value < livestreamoptions[4].value)].value/livestreamoptions[4].value
                )*100),0])
            }
            else{
                addDetails([0,0,0,100,0]);
            }
            livestreamoptions[4].value += 1;
            generatePrompt(
            livestreaming_finished
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            menu
        )})
    ],
    added: [0,0,0,0,0]
};
let livestreaming_finished = {
    prompt: [ '', "After an hour or so straight livestreaming, Vanessa feels like she had done enough livestreaming for now. Be sure to vary each stream or else you risk losing money!", 'currentSize', 'bedroom-bg', ''],
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
    added: [0,0,0,0,25]
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