async function generateMap(ass){
    
    let map = document.createElement('div');
    map.id = 'map';
    let wah = document.createElement('div');
    wah.id = ass;
    switch (ass){
        default:
        case 'outside':{
            let opt1 = document.createElement('input');
            let opt2 = document.createElement('input');
            let opt3 = document.createElement('input');
            opt1.type = 'radio';
            opt1.name = 'outside';
            opt1.value = 'School';
            opt2.type = 'radio';
            opt2.name = 'outside';
            opt2.value = 'Home';
            opt3.type = 'radio';
            opt3.name = 'outside';
            opt3.value = 'Bank';
        };
    }

}