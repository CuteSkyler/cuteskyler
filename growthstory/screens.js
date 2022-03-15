var defaultScreen = {
    first: "Work out in your room", 
    firstvalue: function(){changeScene(`${yourname} worked out tirelessly and gained some good-ass muscle with it! ${yourname} feels herself getting stronger by the second! Keep it up!`, workedOut, 1, 1, 0, 1, -10)}, 
    second: "Go and read", 
    secondvalue: function(){changeScene(`${yourname} reads some books from her bookshelves. ${yourname} finds a nice book that looks quite interesting, perhaps it can increase her knowledge a bit. It sure is interesting, though.`, studyScreen, 0, 5, 0, 0, -5)},
    third: "Go outside", 
    thirdvalue: function(){changeScene(`${yourname} is walking outside, stretching her legs a tad. Feelin' refreshed. Maybe go and visit the beach sometime?`, outsideScreen, 0, 0, 0, 0, 0)}, 
    fourth: "Go and sleep", 
    fourthvalue: function(){changeScene(`${yourname} goes and rests for today, goodnight. Her muscles are slowly but surely developing in her sleep, and she'll rest well knowing so.`, sleepyScreen, 0, 0, 0, 0, 100)}, 
    character: "Vanessa", 
    bg: 0, 
    value: true
};
var workedOut = {first: "Go back",
    firstvalue: function(){changeScene(`It's currently ${weather[randomly]} weather, ${extrabits[randomly]} ${yourname} ${statuses[randomly]}`, defaultScreen, 0, 0, 0, 0, 0)},
    second: "Work out again",
    secondvalue: function(){changeScene(`${yourname} worked out tirelessly and gained some good-ass muscle with it! ${yourname} feels herself getting stronger by the second! Keep it up!`, workedOut, 1, 1, 0, 1, -10)},
    third: "",
    thirdvalue: "",
    fourth: "",
    fourthvalue: "",
    character: "Vanessa", 
    bg: 0
};
var sleepyScreen = {
	first: "Wake up, sunshine",
	firstvalue: function(){changeScene(`It's currently ${weather[randomly]} weather, ${extrabits[randomly]} ${yourname} ${statuses[randomly]}`, defaultScreen, 0, 0, 0, 0, 0)},
	second: "",
	secondvalue: "",
	third: "",
	thirdvalue: "",
	fourth: "",
	fourthvalue: "",
	character: false, 
	bg: 0
};
var studyScreen = {first: "Go back",
    firstvalue: function(){changeScene(`It's currently ${weather[randomly]} weather, ${extrabits[randomly]} ${yourname} ${statuses[randomly]}`, defaultScreen, 0, 0, 0, 0, 0)},
    second: "Read some more",
    secondvalue: function(){changeScene(`${yourname} reads some books from her bookshelves. ${yourname} finds a nice book that looks quite interesting, perhaps it can increase her knowledge a bit. It sure is interesting, though.`, studyScreen, 0, 5, 0, 0, -5)},
    third: "",
    thirdvalue: "",
    fourth: "",
    fourthvalue: "",
    character: "Vanessa",
    bg: 0
};
var outsideScreen = {
    first: "Go back",
    firstvalue: function(){changeScene(`It's currently ${weather[randomly]} weather, ${extrabits[randomly]} ${yourname} ${statuses[randomly]}`, defaultScreen, 0, 0, 0, 0, 0)},
    second: "Do your job(s)",
    secondvalue: function(){changeScene(`Which job will you do today?`, jobsScreen, 0, 0, 0, 0, 0)},
    third: "Go to the Shopping Centre",
    thirdvalue: function(){changeScene(`While not bustling, the Shopping Centre is the place to find items that ${yourname} would want. From the legal to the not so legal.`, shoppingScreen, 0, 0, 0, 0, 0)},
    fourth: "Go to the beach",
    fourthvalue: function(){changeScene(`${yourname} takes a nice stroll across the beach, and goes and put her towel down to lay on. ${yourname} also puts on some nice sunscreen, listening to the calming sounds of the ocean tides.`, beachScreen, 3, -2, 0, 3, -10)},
    character: "Vanessa",
    bg: 1
};
var beachScreen = {
    first: "Go back to Main Square", 
    firstvalue: function(){changeScene(`${yourname} is walking outside, stretching her legs a tad. Feelin' refreshed. Maybe go and visit the beach sometime?`, outsideScreen, 0, 0, 0, 0, 0)}, 
    second: "", 
    secondvalue: "",
    third: "", 
    thirdvalue: "", 
    fourth: "Go back home", 
    fourthvalue: function(){changeScene(`It's currently ${weather[randomly]} weather, ${extrabits[randomly]} ${yourname} ${statuses[randomly]}`, defaultScreen, 0, 0, 0, 0, 0)}, 
    character: "Vanessa", 
    bg: 3,
};
var shoppingScreen = {
    first: "Go to the sports equipment store", 
    firstvalue: function(){changeScene(`"Hey, hello and welcome to FitnessSquared! We have everything here for you to get more ripped in less time."`, sportsScreen, 0, 0, 0, 0, 0)}, 
    second: "Go to the weird druggie in the dank alley", 
    secondvalue: function(){changeScene(`${yourname} walks over to the alley. The guy just stares at you, and opens his jacket. It's full of supplements, alledgedly for muscle growth.`, druggieScreen, 0, 0, 0, 0, 0)},
    third: "Go to the bookfair", 
    thirdvalue: function(){changeScene(`"Welcome to Blocks 'n' Nobles, we have literature spanning centuries about everything your brain desires.`, booksScreen, 0, 0, 0, 0, 0)}, 
    fourth: "Go back to Main Square", 
    fourthvalue: function(){changeScene(`${yourname} is walking outside, stretching her legs a tad. Feelin' refreshed. Maybe go and visit the beach sometime?`, outsideScreen, 0, 0, 0, 0, 0)}, 
    character: "Vanessa", 
    bg: 4,
};


var druggieScreen = {
    first: "Buy small pills (100$)", 
    firstvalue: function(){
        if(money >= 100){
            changeScene(`Thank you for your puchase, ${yourname}!`, druggieScreen, 0, 0, -100, 0, 0);
            multiplier += .5;
	    bought();
        }
        else{
            extraBabble(`Not enough cash, ${yourname}`)};
        },
    second: "Buy big pills (500$)", 
    secondvalue:  function(){
        if(money >= 100){
            changeScene(`Thank you for your puchase, ${yourname}!`, druggieScreen, 0, 0, -500, 0, 0);
            multiplier += 1;
	    bought();
        }
        else{
            extraBabble(`Not enough cash, ${yourname}`)};
        },
    third: "Buy extreme pills (1000$)", 
    thirdvalue: function(){
        if(money >= 100){
            changeScene(`Thank you for your puchase, ${yourname}!`, druggieScreen, 0, 0, -1000, 0, 0);
            multiplier += 2;
	    bought();
        }
        else{
            extraBabble(`Not enough cash, ${yourname}`)};
        }, 
    fourth: "Go back to the Shopping Centre", 
    fourthvalue: function(){changeScene(`While not bustling, the Shopping Centre is the place to find items that ${yourname} would want. From the legal to the not so legal.`, shoppingScreen, 0, 0, 0, 0, 0)}, 
    character: "Villager", 
    bg: 4,
}


var booksScreen = {
    first: "Buy a book about muscle enhancement (150$)", 
    firstvalue: function(){
        if(purchased.booka === true){
            extraBabble(`You've already purchased that, ${yourname}`)
            return;
        };
        if(money >= 10){
            changeScene(`Thank you for your puchase, ${yourname}!`, booksScreen, 0, 50, -150, 0, 0);
            purchased.booka = true;
            multiplier += 1;
	    bought();
        }
        else{
            extraBabble(`Not enough cash, ${yourname}`)};
        }, 
    second: "Buy a book about yoga and muscle relievement (300$)", 
    secondvalue: function(){
        if(purchased.bookb === true){
            extraBabble(`You've already purchased that, ${yourname}`)
            return;
        };
        if(money >= 10){
            changeScene(`Thank you for your puchase, ${yourname}!`, booksScreen, 0, 100, -300, 0, 0);
            purchased.bookb = true;
            multiplier += 1.5;
	    bought();
        }
        else{
            extraBabble(`Not enough cash, ${yourname}`)};
        },
    third: "Buy the encyclopedia of muscle expansion (500$)", 
    thirdvalue: function(){
        if(purchased.booka === true){
            extraBabble(`You've already purchased that, ${yourname}`)
            return;
        };
        if(money >= 10){
            changeScene(`Thank you for your puchase, ${yourname}!`, booksScreen, 0, 300, -500, 0, 0);
            purchased.booka = true;
            multiplier += 4;
	    bought();
        }
        else{
            extraBabble(`Not enough cash, ${yourname}`)};
        }, 
    fourth: "Go back to the Shopping Centre", 
    fourthvalue: function(){changeScene(`While not bustling, the Shopping Centre is the place to find items that ${yourname} would want. From the legal to the not so legal.`, shoppingScreen, 0, 0, 0, 0, 0)}, 
    character: "Vanessa", 
    bg: 4
}


var sportsScreen = {
    first: "To the light equipment section", 
    firstvalue: function(){changeScene(`Feel free to peruse`, lightEquipmentScreen, 0, 0, 0, 0, 0)}, 
    second: "To the heavy equipment section", 
    secondvalue: function(){changeScene(`Feel free to peruse`, heavyEquipmentScreen, 0, 0, 0, 0, 0)},
    third: "To the extremely heavy equipment section", 
    thirdvalue: function(){changeScene(`Feel free to peruse`, exHeavyEquipmentScreen, 0, 0, 0, 0, 0)}, 
    fourth: "Go back to the Shopping Centre", 
    fourthvalue: function(){changeScene(`While not bustling, the Shopping Centre is the place to find items that ${yourname} would want. From the legal to the not so legal.`, shoppingScreen, 0, 0, 0, 0, 0)}, 
    character: "Vanessa", 
    bg: 4,
};
var lightEquipmentScreen = {
    first: "Buy a jumping rope ($10)", 
    firstvalue: function(){
        if(purchased.jumpingrope === true){
            extraBabble(`You've already purchased that, ${yourname}`)
            return;
        };
        if(money >= 10){
            changeScene(`Thank you for your puchase, ${yourname}!`, lightEquipmentScreen, 0, 0, -10, 0, 0);
            purchased.jumpingrope = true;
            multiplier += .25;
	    bought();
        }
        else{
            extraBabble(`Not enough cash, ${yourname}`)};
        }, 
    second: "Buy punching bag ($25)", 
    secondvalue: function(){
        if(purchased.punchingbag === true){
            extraBabble(`You've already purchased that, ${yourname}`)
            return;
        };
        if(money >= 25){
            changeScene(`Thank you for your puchase, ${yourname}!`, lightEquipmentScreen, 0, 0, -25, 0, 0);
            purchased.punchingbag = true;
            multiplier += .5;
	    bought();}
        else{
            extraBabble(`Not enough cash, ${yourname}`)};
        },
    third: "Buy small weights ($50)", 
    thirdvalue: function(){
        if(purchased.smallweights === true){
            extraBabble(`You've already purchased that, ${yourname}`)
            return;
        };
        if(money >= 50){
            changeScene(`Thank you for your puchase, ${yourname}!`, lightEquipmentScreen, 0, 0, -50, 0, 0);
            purchased.smallweights = true;
            multiplier += .75;
	    bought();}
        else{
            extraBabble(`Not enough cash, ${yourname}`)};
        }, 
    fourth: "Go back", 
    fourthvalue: function(){changeScene(`"Hey, hello and welcome to FitnessSquared! We have everything here for you to get more ripped in less time."`, sportsScreen, 0, 0, 0, 0, 0)}, 
    character: "Vanessa", 
    bg: 4,
};
var heavyEquipmentScreen = {
    first: "Buy a training bike (500$)", 
    firstvalue: function(){
        if(purchased.trainingbike === true){
            extraBabble(`You've already purchased that, ${yourname}`)
            return;
        };
        if(money >= 500){
            changeScene(`Thank you for your puchase, ${yourname}!`, heavyEquipmentScreen, 0, 0, -500, 0, 0);
            purchased.trainingbike = true;
            multiplier += 1;
	    bought();}
        else{
            extraBabble(`Not enough cash, ${yourname}`)};
        }, 
    second: "Buy a treadmill (750$)", 
    secondvalue: function(){
        if(purchased.treadmill === true){
            extraBabble(`You've already purchased that, ${yourname}`)
            return;
        };
        if(money >= 750){
            changeScene(`Thank you for your puchase, ${yourname}!`, heavyEquipmentScreen, 0, 0, -750, 0, 0);
            purchased.treadmill = true;
            multiplier += 1.5;
	    bought();}
        else{
            extraBabble(`Not enough cash, ${yourname}`)};
        },
    third: "Buy a general use training machine (1000$)", 
    thirdvalue: function(){
        if(purchased.generaluse === true){
            extraBabble(`You've already purchased that, ${yourname}`)
            return;
        };
        if(money >= 1000){
            changeScene(`Thank you for your puchase, ${yourname}!`, heavyEquipmentScreen, 0, 0, -1000, 0, 0);
            purchased.generaluse = true;
            multiplier += 2.5;
	    bought();}
        else{
            extraBabble(`Not enough cash, ${yourname}`)};
        }, 
    fourth: "Go back", 
    fourthvalue: function(){changeScene(`"Hey, hello and welcome to FitnessSquared! We have everything here for you to get more ripped in less time."`, sportsScreen, 0, 0, 0, 0, 0)}, 
    character: "Vanessa", 
    bg: 4,
};
var exHeavyEquipmentScreen = {
    first: "Buy super heavy barbells (2500$)", 
    firstvalue: function(){
        if(purchased.barbells === true){
            extraBabble(`You've already purchased that, ${yourname}`)
            return;
        };
        if(money >= 2500){
            changeScene(`Thank you for your puchase, ${yourname}!`, exHeavyEquipmentScreen, 0, 0, -2500, 0, 0);
            purchased.barbells = true;
            multiplier += 5;
	    bought();}
        else{
            extraBabble(`Not enough cash, ${yourname}`)};
        }, 
    second: "Buy preacher curl bench with super heavy weights (5000$)", 
    secondvalue: function(){
        if(purchased.curlbench === true){
            extraBabble(`You've already purchased that, ${yourname}`)
            return;
        };
        if(money >= 5000){
            changeScene(`Thank you for your puchase, ${yourname}!`, exHeavyEquipmentScreen, 0, 0, -5000, 0, 0);
            purchased.curlbench = true;
            multiplier += 7;
	    bought();}
        else{
            extraBabble(`Not enough cash, ${yourname}`)};
        },
    third: "Buy a lat pulldown machine with super heavy weights (10000$)", 
    thirdvalue: function(){
        if(purchased.latpulldown === true){
            extraBabble(`You've already purchased that, ${yourname}`)
            return;
        };
        if(money >= 10000){
            changeScene(`Thank you for your puchase, ${yourname}!`, exHeavyEquipmentScreen, 0, 0, -10000, 0, 0);
            purchased.latpulldown = true; 
            multiplier += 10;
	    bought();}
        else{
            extraBabble(`Not enough cash, ${yourname}`)};
        }, 
    fourth: "Go back", 
    fourthvalue: function(){changeScene(`"Hey, hello and welcome to FitnessSquared! We have everything here for you to get more ripped in less time."`, sportsScreen, 0, 0, 0, 0, 0)}, 
    character: "Vanessa", 
    bg: 4,
};



var jobsScreen = {
    first: "Work as a lifeguard", 
    firstvalue: function(){changeScene(`${yourname} goes to the beach, puts on her outfit, sunglasses and guards the life of countless cilivians. She got paid for the day of hard work.`, workedScreen, 2, 5, 100, 2, -25)}, 
    second: "Work as a personal trainer (>200IQ)", 
    secondvalue: function(){if(intelligence >= 200){changeScene(`${yourname} goes to the local gym to help people work their bodies. Helping her and other people get ripped in the process. The job paid handsomely.`, workedScreen, 50, 10, 250, 55, -50)}},
    third: "Work as a scientist (>300IQ)", 
    thirdvalue: function(){if(intelligence >= 200){changeScene(`${yourname} goes to the muscle research centre as both a researcher and test subject. ${yourname} creates serums for accelerated muscle tissue growth and expansion. It paid off well, literally and figuatively.`, workedScreen, 250, 10, 500, 250, -50)}}, 
    fourth: "Go back", 
    fourthvalue: function(){changeScene(`${yourname} is walking outside, stretching her legs a tad. Feelin' refreshed. Maybe go and visit the beach sometime?`, outsideScreen, 0, 0, 0, 0, 0)}, 
    character: "Vanessa", 
    bg: 1,
};
var workedScreen = {
    first: "Go back home", 
    firstvalue: function(){changeScene(`It's currently ${weather[randomly]} weather, ${extrabits[randomly]} ${yourname} ${statuses[randomly]}`, defaultScreen, 0, 0, 0, 0, 0)}, 
    second: "Relax at the beach after a long day of work", 
    secondvalue: function(){changeScene(`${yourname} takes a nice stroll across the beach, and goes and put her towel down to lay on. ${yourname} also puts on some nice sunscreen, listening to the calming sounds of the ocean tides.`, beachScreen, 3, -2, 0, 3, -10)},
    third: "", 
    thirdvalue: "", 
    fourth: "", 
    fourthvalue: "", 
    character: "Vanessa", 
    bg: 3,
};



var blanc = {
    first: "", 
    firstvalue: "", 
    second: "", 
    secondvalue: "",
    third: "", 
    thirdvalue: "", 
    fourth: "", 
    fourthvalue: "", 
    character: "Vanessa", 
    bg: 0,
};
