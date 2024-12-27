async function generateAchievement(achievement_id, check){
    if(check) return;
    let the_achievement = achievements.find(lel => lel.id === achievement_id);
    console.log(achievements.find(lel => lel.id === achievement_id));
    if(the_achievement["gotten"] === true) return;
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