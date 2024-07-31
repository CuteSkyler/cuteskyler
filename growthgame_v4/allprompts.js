/* DOING PROMPTS THIS WAY BECAUSE JAVASCRIPT IS A PIECE OF SHIT THAT WON'T DO AS I SAY AND JUST EXECUTES CODE RANDOMLY FOR ***SOME*** REASON?????? */

let mall = {
    prompt: [ '', 'Welcome to the mall, feel free to peruse.', 'currentSize', 'store-bg', ''],
    options: [
        "Go to Gym 'n Son's.",
        'Go to Encyclopidia Abdomnilia',
        "Stroll around the mall...",
        'More...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            gymnsons
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            abdomnilia
        )}),
        (function(check){
            if(check) return;
            randomEncounter(
            'mall'
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            mall_2
        )})
    ],
    added: [0,0,0,0,0]
};

let gymnsons = {
    prompt: [ 'The Store Owner', "Welcome to Gym 'n Son's, we have everything to get you started on your journey to grow some mass!", 'currentSize', 'small-store-bg', 'https://minecraft-pocket.com/uploads/posts/2020-12/1606985296_rhex-mutant-creatureimprove-things-and-added-new-mobsfix-bugs_6.png'],
    options: [
        'Buy threadmill ($200)',
        'Buy punchingbag ($400)',
        'Buy heavy weights ($600)',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            buyPropertyClass({previous_prompt: gymnsons, property_id: 'threadmill'})
        }),
        (function(check){
            if(check) return;
            buyPropertyClass({previous_prompt: gymnsons, property_id: 'punchingbag'})
        }),
        (function(check){
            if(check) return;
            buyPropertyClass({previous_prompt: gymnsons, property_id: 'heavyweights'})
        }),
        (function(check){
            if(check) return;
            generatePrompt(
            mall
        )})
    ],
    added: [0,0,0,0,0]
};

let abdomnilia = {
    prompt: [ 'Miss. Abdomnilia', "Hello and good day; welcome to our refined sets of workout equipment, feel free to peruse in our shoppe.", 'currentSize', 'small-store-bg', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.forgecdn.net%2Favatars%2F399%2F645%2F637603600383001412.png&f=1&nofb=1&ipt=e07d8a11fef21622944565eaa08fbbc560173c9fbc58176572e04d33ea6ef78a&ipo=images'],
    options: [
        'Buy heavy exercise machines ($1000)',
        'Buy gigantic dumbbells ($4000)',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            buyPropertyClass({previous_prompt: abdomnilia, property_id: 'heavyexercisemachines'})
        }),
        (function(check){
            if(check) return;
            buyPropertyClass({previous_prompt: abdomnilia, property_id: 'giganticdumbbells'})
        }),
        (function(check){
            if(check) return;
            generatePrompt(
            mall
        )})
    ],
    added: [0,0,0,0,0]
};

let mall_2 = {
    prompt: [ '', 'Welcome to the mall, feel free to peruse.', 'currentSize', 'store-bg', ''],
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

let work_out = {
    prompt: [ '', `What work out will ${theoptions.username} do?`, 'currentSize', 'bedroom-bg', ''],
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
            if(check) if(ownership.checkOwned('threadmill')) return false; else return 'Not available...';
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
    prompt: [ '', `What work out will ${theoptions.username} do?`, 'currentSize', 'bedroom-bg', ''],
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
            generatePrompt(
                heavyweights
            )
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
    prompt: [ '', `After having done a heavy set of push ups, ${theoptions.username} feels exhausted but has gained some muscle in return.`, 'currentSize', 'bedroom-bg', ''],
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
    prompt: [ '', `${theoptions.username} punched that punching bag long and hard and felt exhausted afterwards but luckily gained some muscle back.`, 'currentSize', 'bedroom-bg', ''],
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
    prompt: [ '', `${theoptions.username} keeps running and running until she can't anymore and gained some real muscular mass by it.`, 'currentSize', 'bedroom-bg', ''],
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
    prompt: [ '', `${theoptions.username} goes towards the expensive but highly effective heavy exercise machines to work out, they work really effectively gaining a real pump but also got really tired by it. ${theoptions.username} gained some really effective amounts of pure muscle mass!`, 'currentSize', 'bedroom-bg', ''],
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
    prompt: [ '', `${theoptions.username} is looking at the heavy weights, they weigh almost the amount of a dozen bodybuilders. Sweating looking at it, ${theoptions.username} tries to pick it up and tries to lift it up, with some effort ${theoptions.username} tries and does hold it up for an extended amount of time, gaining some amazing muscle during the session, but ${theoptions.username} got really, really tired by it.`, 'currentSize', 'bedroom-bg', ''],
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
    prompt: [ '', `Some of the heaviest weights ${theoptions.username} could find in the store. ${theoptions.username} looks at the size of these absolutely gargantuan dumbbells wondering if it's even possible to lift these things, but with determination, ${theoptions.username} grabs both the dumbbells with both hands and with great amounts of effort lifts them off the ground and pushes them into the air with great speed. ${theoptions.username} repeats this for a minute or five to really get that pump going and grow some massive muscle. ${theoptions.username} grows some gargantuan muscle but also cannot really do anything else for the day.`, 'currentSize', 'bedroom-bg', ''],
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
};let statuses = [
    `${theoptions.username} is ready to do some work today!`,
    `Today is a fine day for ${theoptions.username} to do some light jogging.`,
    `${theoptions.username} wants to do something active today.`,
    `Sheeps outside are béééh'ing, it's morning and a fine day to do some working out!`,
    `A parrot hit the window, poor thing...`,
    `Another day, another chance to grow some muscle mass, let's do this!`,
    `${theoptions.username} is ready for the day and ready for some REAL exercise today.`
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