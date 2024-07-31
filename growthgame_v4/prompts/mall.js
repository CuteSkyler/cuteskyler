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
    prompt: [ 'The Store Owner', "Welcome to Gym 'n Son's, we have everything to get you started on your journey to grow some mass!", 'currentSize', 'small-store-bg', './renders/misc_characters/steve.gif'],
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
    prompt: [ 'Miss. Abdomnilia', "Hello and good day; welcome to our refined sets of workout equipment, feel free to peruse in our shoppe.", 'currentSize', 'small-store-bg', './renders/misc_characters/Witch.gif'],
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
            outside
        )})
    ],
    added: [0,0,0,0,0]
};