function bootup(){
    var imgSource = "https://cdn.discordapp.com/attachments/700770105520554127/875469682285621268/commsheet_by_cuteskylerquinn_deblf51-fullview.png"
    document.getElementById("comminfo").src = img.src.replace("undefined", imgSource);
};

function goto(page){
    window.location.href = page;
    return;
};