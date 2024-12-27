let mall = {
    prompt: [ '', 'Welcome to the mall, feel free to peruse.', 'currentSize', 'store-bg', ''],
    options: [
        "Go to Gym 'n Son's.",
        'Go to Encyclopidia Abdomnilia',
        "Go to Jack's Pharmacy",
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
            generatePrompt(
            pharmacy
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
    prompt: [ 'The Store Owner', "Welcome to Gym 'n Son's, we have everything to get you started on your journey to grow some mass!", 'currentSize', 'small-store-bg', 'https://files.catbox.moe/t2pcb5.gif'],
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
    prompt: [ 'Miss. Abdomnilia', "Hello and good day; welcome to our refined sets of workout equipment, feel free to peruse in our shoppe.", 'currentSize', 'small-store-bg', 'https://files.catbox.moe/ufrsrs.gif'],
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

/* wah */
let pharmacy = {
    prompt: [ 'Jack', "Hello, how may I be of service? I can help you with all sorts of ailments, wether they be ill or lack of muscle.", 'currentSize', 'small-store-bg', 'https://files.catbox.moe/ufrsrs.gif'],
    options: [
        'Buy protein powder ($100)',
        'Buy supplements ($500)',
        'Buy steroids ($1000)',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) if(regimen.money < 100) return 'Not available...'; else return false;
            if(regimen.money >= 100){
                multiplier += 0.01;
                purchasedAmounts.protein += 1;
                generatePrompt(pharmacyBoughtPP);
            }
            else{
                generatePrompt(pharmacyFail);
            }
        }),
        (function(check){
            if(check) if(regimen.money < 500) return 'Not available...'; else return false;
            if(regimen.money >= 500){
                multiplier += 0.065;
                purchasedAmounts.supplements += 1;
                generatePrompt(pharmacyBoughtSP);
            }
            else{
                generatePrompt(pharmacyFail);
            };
        }),
        (function(check){
            if(check) if(regimen.money < 1000) return 'Not available...'; else return false;
            if(regimen.money >= 1000){
                multiplier += 0.14;
                purchasedAmounts.steroids += 1;
                generatePrompt(pharmacyBoughtST);
            }
            else{
                generatePrompt(pharmacyFail);
            };
        }),
        (function(check){
            if(check) return;
            generatePrompt(
            mall
        )})
    ],
    added: [0,0,0,0,0]
};
let pharmacyBoughtPP = {
    prompt: [ 'Jack', "Successfully bought some protein powder (Automatically activates)", 'currentSize', 'small-store-bg', 'https://files.catbox.moe/ufrsrs.gif'],
    options: [
        'Buy protein powder ($100)',
        'Buy supplements ($500)',
        'Buy steroids ($1000)',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) if(regimen.money < 100) return 'Not available...'; else return false;
            if(regimen.money >= 100){
                multiplier += 0.01;
                purchasedAmounts.protein += 1;
                generatePrompt(pharmacyBoughtPP);
            }
            else{
                generatePrompt(pharmacyFail);
            }
        }),
        (function(check){
            if(check) if(regimen.money < 500) return 'Not available...'; else return false;
            if(regimen.money >= 500){
                multiplier += 0.065;
                purchasedAmounts.supplements += 1;
                generatePrompt(pharmacyBoughtSP);
            }
            else{
                generatePrompt(pharmacyFail);
            };
        }),
        (function(check){
            if(check) if(regimen.money < 1000) return 'Not available...'; else return false;
            if(regimen.money >= 1000){
                multiplier += 0.14;
                purchasedAmounts.steroids += 1;
                generatePrompt(pharmacyBoughtST);
            }
            else{
                generatePrompt(pharmacyFail);
            };
        }),
        (function(check){
            if(check) return;
            generatePrompt(
            mall
        )})
    ],
    added: [0,0,0,-100,0]
};
let pharmacyBoughtSP = {
    prompt: [ 'Jack', "Successfully bought some supplements (Automatically activates)", 'currentSize', 'small-store-bg', 'https://files.catbox.moe/ufrsrs.gif'],
    options: [
        'Buy protein powder ($100)',
        'Buy supplements ($500)',
        'Buy steroids ($1000)',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) if(regimen.money < 100) return 'Not available...'; else return false;
            if(regimen.money >= 100){
                multiplier += 0.01;
                purchasedAmounts.protein += 1;
                generatePrompt(pharmacyBoughtPP);
            }
            else{
                generatePrompt(pharmacyFail);
            }
        }),
        (function(check){
            if(check) if(regimen.money < 500) return 'Not available...'; else return false;
            if(regimen.money >= 500){
                multiplier += 0.065;
                purchasedAmounts.supplements += 1;
                generatePrompt(pharmacyBoughtSP);
            }
            else{
                generatePrompt(pharmacyFail);
            };
        }),
        (function(check){
            if(check) if(regimen.money < 1000) return 'Not available...'; else return false;
            if(regimen.money >= 1000){
                multiplier += 0.14;
                purchasedAmounts.steroids += 1;
                generatePrompt(pharmacyBoughtST);
            }
            else{
                generatePrompt(pharmacyFail);
            };
        }),
        (function(check){
            if(check) return;
            generatePrompt(
            mall
        )})
    ],
    added: [0,0,0,-500,0]
};
let pharmacyBoughtST = {
    prompt: [ 'Jack', "Successfully bought some steroids (Automatically activates)", 'currentSize', 'small-store-bg', 'https://files.catbox.moe/ufrsrs.gif'],
    options: [
        'Buy protein powder ($100)',
        'Buy supplements ($500)',
        'Buy steroids ($1000)',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) if(regimen.money < 100) return 'Not available...'; else return false;
            if(regimen.money >= 100){
                multiplier += 0.01;
                purchasedAmounts.protein += 1;
                generatePrompt(pharmacyBoughtPP);
            }
            else{
                generatePrompt(pharmacyFail);
            }
        }),
        (function(check){
            if(check) if(regimen.money < 500) return 'Not available...'; else return false;
            if(regimen.money >= 500){
                multiplier += 0.065;
                purchasedAmounts.supplements += 1;
                generatePrompt(pharmacyBoughtSP);
            }
            else{
                generatePrompt(pharmacyFail);
            };
        }),
        (function(check){
            if(check) if(regimen.money < 1000) return 'Not available...'; else return false;
            if(regimen.money >= 1000){
                multiplier += 0.14;
                purchasedAmounts.steroids += 1;
                generatePrompt(pharmacyBoughtST);
            }
            else{
                generatePrompt(pharmacyFail);
            };
        }),
        (function(check){
            if(check) return;
            generatePrompt(
            mall
        )})
    ],
    added: [0,0,0,-1000,0]
};
let pharmacyFail = {
    prompt: [ 'Jack', "You don't have enough funds to buy this, I'm sorry.", 'currentSize', 'small-store-bg', 'https://files.catbox.moe/ufrsrs.gif'],
    options: [
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            generatePrompt(
            pharmacy
        )})
    ],
    added: [0,0,0,0,0]
};




let mall_2 = {
    prompt: [ '', 'Welcome to the mall, feel free to peruse.', 'currentSize', 'store-bg', ''],
    options: [
        'Stroll around the mall',
        'Back...'
    ],
    functions: [
        (function(check){
            if(check) return;
            randomEncounter(
            'mall'
        )}),
        (function(check){
            if(check) return;
            generatePrompt(
            outside
        )})
    ],
    added: [0,0,0,0,0]
};