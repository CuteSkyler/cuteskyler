function conversation(a){
    if(a === 'nate'){
        newMessage('0', 'Hey there, babe', 'nate', 1000);
        promisedResponse('nate').then(e=>{
            newMessage('0', "How ya doin', hot stuff? Still having those tight-ass denim shorts on your fat ass? 'Cause god it makes me horny seeing you in those", 'nate', 5000);
            promisedResponse('nate').then(e=>{
                newMessage('0', "Hmm, I bet you want to see my big fucking cock don't you, you horny slut?", 'nate', 3000);
                promisedResponse('nate').then(e=>{
                    newMessage('0', 'https://cdn.discordapp.com/attachments/556797084674555916/866052810621583390/595b.png', 'nate', 5000);
                    newMessage('0', "I've been working out a bit, if you haven't seen these gigantic muscles, hehehe", 'nate', 4000);
                }).catch(e=>{
                    newMessage('0', '?', 'nate', 0)
                });
            }).catch(e=>{
                newMessage('0', '?', 'nate', 0)
            });
        }).catch(e=>{
            newMessage('0', '?', 'nate', 0)
        });
    }
    else{
        return;
    };
};

function promisedResponse(person){
    return new Promise(function(resolve, reject){
        document.getElementById(`send${person}`).addEventListener('click', e => {
            if(!document.getElementById(`${person}message`).value){
                e.stopPropagation();
                reject(false);
            }
            else{
                e.stopPropagation();
                resolve(true);
            }
        });
    });
};