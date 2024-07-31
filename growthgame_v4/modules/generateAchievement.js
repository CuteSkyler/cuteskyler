let achievements = [
    {id: 1, name: "Fox of the... beach?", description: "You met Foxy on the beach!", image: 'https://us.rule34.xxx/samples/5398/sample_9ac73386ed9bb1554083f3613b54a47f.jpg?6148746', rare: true, gotten: false},
    {id: 2, name: "Absolutely Splashing!", description: "You got the 'Achievement get!' splash screen.", image: 'https://i.ytimg.com/vi/RH1wl--5hQU/hqdefault.jpg', rare: true, gotten: false}
]

function generateAchievement(achievement_id, check){
    if(check) return;
    let the_achievement = achievements.find(lel => lel.id === achievement_id);
    if(the_achievement?.["gotten"] === true) return;
    else{
        the_achievement["gotten"] = true;

        let achievement = document.createElement('section');
        achievement.classList.add('achievement');
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = the_achievement.image;
        let div2 = document.createElement('div');
        let p = document.createElement('p');
        p.innerHTML = 'Achievement get!'
        let p2 = document.createElement('p');
        p2.innerHTML = the_achievement.name;
        let p3 = document.createElement('p');
        p3.innerHTML = the_achievement.description;

        div2.append(p);
        div2.append(p2);
        div2.append(p3);
        div.append(img);
        div.append(div2);
        achievement.append(div);

        if (the_achievement.rare) achievement.classList.add('rare');

        document.querySelector('#achievements').append(achievement);

        setTimeout(() => {
            document.querySelectorAll('.achievement').forEach(elem => {
                elem.remove();
                achievement.classList.add('stop');
                document.querySelector('#gotten_achievements').append(achievement);
            });
        }, 5000);

        return;
    };
};