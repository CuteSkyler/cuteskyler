var currentdialogue = {dialogue: "", number: 0};
const test = [
    {line: `Hey there, ${yourname}! How ya doin'?`, char: "Arnie"},
    {line: "I'm here to get pumped, gettin' these muscles nice and big, how about you?", char: "Vanessa"},
    {line: "Oooo! Can I help?", char: "Arnie"},
    {line: "Sure, can you spot me?", char: "Vanessa"},
    {line: "I doubt you can spot me with the amount of weight I press, haha", char: "Vanessa"}
];
const FoxyDialogue = [
    {line: `${yourname} proudly walks onto the beach, showing off her muscles to everyone around.`, char: false},
    {line: 'She sees Foxy on the beach and has a talk with her.', char: false},
    {line: "Hey there, Foxy! How ya doin'?", char: "Vanessa"},
    {line: `Heyo, ${yourname}, I've been alright! I've been doing some more exercises lately, and I can see you have been too, haha.`, char: "Foxy"},
    {line: "Eh, I'd like to get a bit more beef on here, y'know.", char: "Vanessa"},
    {line: "Oh yeah, definitely, me too! Did you hear about a new competition here on the beach? It's for beefcakes, big and small.", char: "Foxy"},
    {line: "Hm, sounds interesting.", char: "Vanessa"},
    {line: "It is one hundred percent something for you, knowing you, you'll *literally* crush the competition!", char: "Foxy"},
    {line: "Hahaha, maybe I will. Will you be participating?", char: "Vanessa"},
    {line: "Maybe, who knows. If I get some more meat on these arms then maybe I'll have some sort of chance of winning, haha.", char: "Foxy"},
    {line: "What about Sarah or even Nate? Is it for guys an' gals?", char: "Vanessa"},
    {line: "I think it's for both, yeah, inlcuding shemales and futanari's. But with those, the most amount of meat ain't in the arms, haha.", char: "Foxy"},
    {line: "I hope you'll join in, though, it'll be a battle between us two mostly. We'll humiliate the others there with how ripped we are in comparison!", char: "Vanessa"},
    {line: `That much is true, well, see ya later, ${yourname}!`, char: "Foxy"},
    {line: "See ya, Foxy.", char: "Vanessa"}    
]

var competitionScreen = {
    first: "Next >", 
    firstvalue: function(){enableDialogue()}, 
    second: "", 
    secondvalue: "",
    third: "", 
    thirdvalue: "", 
    fourth: "", 
    fourthvalue: "", 
    character: "Vanessa", 
    bg: 5,
};

function enableDialogue(varia){
    if(currentdialogue.dialogue === ""){currentdialogue.dialogue = varia};
    if(currentdialogue.number >= currentdialogue.dialogue.length){console.log("Finished Dialogue"); currentdialogue.dialogue = ""; return;}
    competitionScreen.character = currentdialogue.dialogue[currentdialogue.number].char;
    changeScene(currentdialogue.dialogue[currentdialogue.number].line, competitionScreen, 0, 0, 0, 0, 0);
    currentdialogue.number += 1;
    return;
};