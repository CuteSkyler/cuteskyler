const video = document.querySelector('video:not(#previewVideo)');
const volumeslider = document.querySelector('#volumebar');
const timestamps = document.querySelector('#timestamp');
const play = document.querySelector('#play');
const volume = document.querySelector('#volume');
const timebar = document.querySelector('#timebar');
const fullscreen = document.querySelector('#fullscreen');
const main = document.querySelector('#main');
const theatre = document.querySelector('#theatre');
const template = document.querySelector('template');
const recommended = document.querySelector('#recommended');
const title = document.querySelector('#title');
const videotitle = document.querySelector('#video-title');
const videodate = document.querySelector('#video-date');
const videoextra = document.querySelector('#video-extra');
const mp4download = document.querySelector('#mp4-download');
const webmdownload = document.querySelector('#webm-download');
const buttons = document.querySelector('#buttons');

var valueBefore = 100;



setInterval(()=>{
    if(video.readyState > 2 && video.paused || video.ended){
        timebar.max = video.duration;
        setDuration(video.currentTime, timestamps, Math.round(video.duration));
    };
    return;
}, 250);

play.addEventListener('click', e=>{
    playPause(e.target);
    return;
});

volume.addEventListener('click', e=>{
    mute();
    return;
});

fullscreen.addEventListener('click', e=>{
    fullscreenToggle();
    return;
});

theatre.addEventListener('click', e=>{
    theatreMode();
    return;
});

function fullscreenToggle(){
    if(window.screenTop && window.screenY){
        main.requestFullscreen(); 
        return;
    };
    document.exitFullscreen();
    return;
}

function inputVideo(number){
    video.children[0].src = vids[number]?.webm;
    video.children[1].src = vids[number]?.mp4;
    title.innerText = vids[number].title;
    videotitle.children[0].innerText = vids[number].title;
    videodate.innerText = `Created on: ${vids[number].date}`;
    videoextra.innerText = `${vids[number].description}`;
    if(vids[number].webm === null) buttons.children[1].classList.add('disabled');
    if(vids[number].mp4 === null) buttons.children[0].classList.add('disabled');
    if(vids[number].webm && buttons.children[1].classList.contains('disabled')) buttons.children[1].classList.remove('disabled'); buttons.children[1].onclick = function(){window.open(vids[number].webm)};
    if(vids[number].mp4 && buttons.children[0].classList.contains('disabled')) buttons.children[0].classList.remove('disabled'); buttons.children[0].onclick = function(){window.open(vids[number].mp4)};
    video.load();
    return;
};

function playPause(element){
    if(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2){
        element.innerText = '▶';
        video.pause();
        return;
    };
    element.innerText = '⏸';
    video.play();
    return;
};

function mute(){
    if(volumeslider.value > 0){
        volume.innerText = '🔇'
        valueBefore = volumeslider.value;
        volumeslider.value = 0;
        video.volume = 0;
        return;
    };
    volume.innerText = '🔊'
    volumeslider.value = valueBefore;
    video.volume = valueBefore / 100;
};

function changeVolume(value, element){
    element.volume = `${value / 100}`;
};

function setDuration(current, element, end){
    let details = {first: Math.floor(current / 60), second: Math.floor(current%60), third: Math.floor(end/60), fourth: Math.floor(end%60)}
    if(details.first < 10){details.first = `0${details.first}`};
    if(details.second < 10){details.second = `0${details.second}`};
    if(details.third < 10){details.third = `0${details.third}`};
    if(details.fourth < 10){details.fourth = `0${details.fourth}`};
    element.innerText = `${details.first}:${details.second} / ${details.third}:${details.fourth}`
    timebar.max = Math.floor(end);
    timebar.style.background = `linear-gradient(90deg, rgba(255,0,0,0.5) ${current/end*100}%, rgba(255,255,255,0.5) ${current/end*100}%)`;
    return;
};

function goToPoint(element){
    if(!video.paused){
        video.pause();
        play.innerText = '▶';
        video.currentTime = element.value;
        video.play();
        play.innerText = '⏸';
        return;
    }
    video.currentTime = element.value;
    return;
};

function theatreMode(){
    if(main.classList.contains('theatre')){
        main.classList.remove('theatre');
        document.querySelector('main').classList.remove('theatre');
        recommended.classList.remove('theatre');
        recommended.style.gridTemplateColumns = `1fr`;
        return;
    };
    main.classList.add('theatre');
    document.querySelector('main').classList.add('theatre');
    recommended.classList.add('theatre');
    recommended.style.gridTemplateColumns = `1fr`;
    return;
}

function createRecommendation(title, date, description, thumbnail, index){
    if(video.children[1].src === vids[index].mp4 || video.children[0].src === vids[index].webm) return;
    let videoA = template.content.cloneNode(true).children[0];
    videoA.querySelector('.thumbnail').style.backgroundImage = `url(${thumbnail})`;
    videoA.querySelector('.title b').innerText = title;
    videoA.querySelector('.description').innerText = description;
    videoA.querySelector('.date').innerText = `Created on ⫐ ${date}`;
    videoA.querySelector('.thumbnail').onclick = function(){refresh(index)};
    recommended.appendChild(videoA);
    return;
};

const vids = [
    {
        title: 'Vanessa Muscle Growth', 
        date: '15/10/2020', 
        description: "Catagory: Muscle Growth\nVanessa finds an odd red amulet in the caves. The feeling of touching it causes Vanessa's muscles to grow unexpectedly. Her muscles pulsating and flexing making Vanessa grow gigantic amounts of muscle by eating huge amounts of food.", 
        thumbnail: 'https://cdn.discordapp.com/attachments/556797084674555916/747557989006835782/426.png',
        webm: null,
        mp4: 'https://cdn.discordapp.com/attachments/717661956290510869/977519131752534056/Produce_18.mp4'
    },
    {
        title: 'Foxy Muscle Workout', 
        date: '17/11/2020', 
        description: "Catagory: Muscle Growth\nFoxy does her usual workout routine.", 
        thumbnail: 'https://cdn.discordapp.com/attachments/556797084674555916/909432962083356713/656b.png',
        webm: null,
        mp4: 'https://cdn.discordapp.com/attachments/556797084674555916/780198407163084821/foxyfit.mp4'
    },
    {
        title: 'CancerInc.mp4', 
        date: '02/07/2021', 
        description: "Catagory: Shitpost\n", 
        thumbnail: 'https://cdn.discordapp.com/attachments/556797084674555916/793662964334460949/500b2.png',
        webm: null,
        mp4: 'https://cdn.discordapp.com/attachments/625039840509165628/968611438899904512/CancerIncTwit.mp4'
    },
    {
        title: 'tfw_mc.mp4', 
        date: '15/10/2020', 
        description: "Catagory: Shitpost\n", 
        thumbnail: 'https://cdn.discordapp.com/attachments/556797084674555916/925034527204728842/672b.png',
        webm: 'https://cdn.discordapp.com/attachments/717661956290510869/977277734311038996/tfw_mc.webm',
        mp4: 'https://cdn.discordapp.com/attachments/625039840509165628/968611027195400242/tfw_mc.mp4'
    },
    {
        title: 'Melon Crushing Thighs', 
        date: '30/01/2022', 
        description: "Catagory: Muscle Growth\nFoxy found a melon on the streets and wondered if she could crush it with her gigantic iron thighs.", 
        thumbnail: 'https://cdn.discordapp.com/attachments/556797084674555916/937149623376695316/694a.gif',
        webm: 'https://cdn.discordapp.com/attachments/717661956290510869/977501129002876938/foxcrushing.webm',
        mp4: 'https://cdn.discordapp.com/attachments/717661956290510869/977500788412788746/foxcrushing.mp4'
    },
    {
        title: 'Nate x Alex', 
        date: '15/10/2020', 
        description: "Catagory: Vanilla\nNate and Alex have sex to some tunes.", 
        thumbnail: 'https://cdn.discordapp.com/attachments/717661956290510869/977384573241528420/unknown.png',
        webm: null,
        mp4: 'https://cdn.discordapp.com/attachments/556797084674555916/906975793752711228/606a.mp4'
    },
    {
        title: 'slap.mp4',
        date: '01/02/2022',
        description: 'Catagory: Shitpost\nslap',
        thumbnail: 'https://cdn.discordapp.com/attachments/625039840509165628/938221020177911858/696a.gif',
        webm: 'https://cdn.discordapp.com/attachments/717661956290510869/977497800910716989/slap.webm',
        mp4: 'https://cdn.discordapp.com/attachments/625039840509165628/937858098348056597/slap.mp4'
    },
    {
        title: 'foxspin.mp4',
        date: '30/01/2022',
        description: 'Catagory: Shitpost\nFox spins on a chair',
        thumbnail: 'https://cdn.discordapp.com/attachments/717661956290510869/977501392652599336/unknown.png',
        webm: null,
        mp4: 'https://cdn.discordapp.com/attachments/625039840509165628/937424383058804756/foxspin.mp4'
    },
    {
        title: 'Are you alright?',
        date: '13/02/2022',
        description: 'Catagory: Vanilla\nFox spins on a chair',
        thumbnail: 'https://cdn.discordapp.com/attachments/717661956290510869/977501615533723668/unknown.png',
        webm: null,
        mp4: 'https://cdn.discordapp.com/attachments/556797084674555916/942538896363909140/youaight.mp4'
    },
    {
        title: 'Leaky tits',
        date: '13/02/2022',
        description: 'Catagory: Vanilla\nFox spins on a chair',
        thumbnail: 'https://cdn.discordapp.com/attachments/717661956290510869/977502002856738816/unknown.png',
        webm: 'https://cdn.discordapp.com/attachments/717366016467927111/977502485109432350/vanessaleaking.webm',
        mp4: 'https://cdn.discordapp.com/attachments/556797084674555916/954148699175530506/vanessaleaking.mp4'
    },
    {
        title: 'Cum test',
        date: '13/02/2022',
        description: 'Catagory: Vanilla\nFox spins on a chair',
        thumbnail: 'https://cdn.discordapp.com/attachments/717661956290510869/977501799823077396/unknown.png',
        webm: null,
        mp4: 'https://cdn.discordapp.com/attachments/695914993966907492/950906827661508648/cumming_and_moaning.mp4'
    }
];

function returnURL(){
    let url = new URL(location.href);
    return url.searchParams.get('video') || 0;
};

document.body.onkeydown = function(key){
    console.log(key.key);
    switch (key.key){
        case " ":{
            playPause(play)
            break;
        };
        case "ArrowLeft":{
            video.currentTime -= 5;
            timebar.value = Math.floor(video.currentTime);
            break;
        };
        case "ArrowRight":{
            video.currentTime += 5;
            timebar.value = Math.floor(video.currentTime);
            break;
        };
        case "j":{
            video.currentTime -= 10;
            timebar.value = Math.floor(video.currentTime);
            break;
        };
        case "l":{
            video.currentTime += 10;
            timebar.value = Math.floor(video.currentTime);
            break;
        };
        case ".":{
            video.pause();
            video.currentTime += 0.001;
            timebar.value = Math.floor(video.currentTime);
            break;
        };
        case ",":{
            video.pause();
            video.currentTime += 0.0333;
            timebar.value = Math.floor(video.currentTime);
            break;
        };
        case "m":{
            mute();
            break;
        };
        case "t":{
            theatreMode();
            break;
        };
        case "f":{
            fullscreenToggle();
            break;
        };
        default:{
            return;
        };
    };
    return;
};

function refresh(index){
    inputVideo(index);
    recommended.innerHTML = '';
    for(let x = 0; x < vids.length; x++){
        createRecommendation(vids[x].title, vids[x].date, vids[x].description, vids[x].thumbnail, x);
    };
    return;
};


inputVideo(returnURL());
for(let x = 0; x < vids.length; x++){
    createRecommendation(vids[x].title, vids[x].date, vids[x].description, vids[x].thumbnail, x);
};
video.volume = volumeslider.value / 100;
timebar.onchange = function(){goToPoint(timebar);};
video.onended = function(){play.innerText = '▶'};
video.onplaying = function(){setInterval(()=>{setDuration(video.currentTime, timestamps,video.duration); }, 100);};
