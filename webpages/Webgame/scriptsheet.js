console.log("Script works so far");

        function sleep(by){
           var cDate = parseFloat(document.getElementById("DateValue").innerHTML)
           if(cDate >= 7){
            showPrompt(1)
            document.getElementById("textpromptp1").innerHTML = "&nbsp;&nbsp;&nbsp;After pushing yourself to the limit, you decided to sleep"
            document.getElementById("DateValue").innerHTML = by
           }
           else{
            document.getElementById("DateValue").innerHTML = cDate+by
           }
        }

        var homemessage1 = "&nbsp;&nbsp;Hey there, "
        var homemessage2 = "! It's "
        var homemessage3 = "! And it's a "

        function todaysDate(b){
            if(b%7===0){
                return "Sunday";
            }
            else if(b%6===0){
                return "Saturday";
            }
            else if(b%5===0){
                return "Friday";
            }
            else if(b%4===0){
                return "Thursday";
            }
            else if(b%3===0){
                return "Wednesday";
            }
            else if(b%2===0){
                return "Tuesday";
            }
            else if(b%1===0){
                return "Monday";
            }
        }

        setInterval(() => {
            document.getElementById('WeatherValue').innerHTML = weatherState()
        }, 100000);

        function weatherState(){
            var randomized = Math.floor(Math.random()*5)
            if(randomized === 4){
                document.getElementById('WeatherValue').innerHTML = "stormy day today. Better to stay inside."
                return "stormy day today. Better to stay inside.";
            }
            else if(randomized === 3){
                document.getElementById('WeatherValue').innerHTML = "cloudy day today. Maybe you should go outside?"
                return "cloudy day today. Maybe you should go outside?";
            }
            else if(randomized === 2){
                document.getElementById('WeatherValue').innerHTML = "cold day today. Better to stay inside."
                return "cold day today. Better to stay inside.";
            }
            else if(randomized === 1){
                document.getElementById('WeatherValue').innerHTML = "windy day today. A good day to go outside."
                return "windy day today. A good day to go outside.";
            }
            else if(randomized === 0){
                document.getElementById('WeatherValue').innerHTML =  "sunny day today. A perfect day to go outside!"
                return "sunny day today. A perfect day to go outside!";
            }
        }

        setInterval(() => {
            if(parseFloat(document.getElementById('LOCvalue').innerHTML) < 1){
                document.getElementById("textprompt").innerHTML = homemessage1+document.getElementById("FoxyName").innerHTML+homemessage2+todaysDate(parseFloat(document.getElementById("DateValue").innerHTML))+homemessage3+document.getElementById('WeatherValue').innerHTML
                document.getElementById("textprompt").style.fontSize = "x-large"
            }
            else{
                document.getElementById("textprompt").style.fontSize = "large"
            }
        }, 1);

        setInterval(() => {
            var w = parseInt(document.getElementById("MUSCLEvalue").innerHTML)
            var q = parseInt(document.getElementById("foxystatus").innerHTML)
            if(w > 1000000){
                document.getElementById("foxystatus").style.display = 'none';
                document.getElementById("gym1").style.color = 'white';
                document.getElementById("store1").style.color = 'white';
                document.getElementById("stream1").style.color = 'white';
                document.getElementById("school1").style.color = 'white';
                document.getElementById("compete1").style.color = 'white';
                document.getElementById("sleep1").style.color = 'white';
                document.body.style.backgroundImage = "url('img/foxy/final.png')"
                document.body.style.backgroundSize = "cover";
            }
            if(w > 100000){
                document.getElementById("foxystatus").src = "img/foxy/stage7.png";
                document.getElementById('foxystatus').style.height = '100%';
                document.getElementById('foxystatus').style.width = '30.125%';
                document.getElementById('foxystatus').style.margin = '0';
                document.getElementById('foxyclick').style.margin = '0';
            }
            else if(w > 10000){
                document.getElementById("foxystatus").src = "img/foxy/stage6.png";
                document.getElementById('foxystatus').style.width = '40%'; 
            }
            else if(w > 1000){
                document.getElementById("foxystatus").src = "img/foxy/stage5.png";
                document.getElementById('foxystatus').style.width = '21%';                
            }
            else if(w > 100){
                document.getElementById("foxystatus").src = "img/foxy/stage4.png";
                document.getElementById('foxystatus').style.width = '17%';                
            }
            else if(w > 10){
                document.getElementById("foxystatus").src = "img/foxy/stage3.png";
                document.getElementById('foxystatus').style.width = '15%';                
            }
            else if(w > 1){
                document.getElementById("foxystatus").src = "img/foxy/stage2.png";
                document.getElementById('foxystatus').style.width = '13%';
            }
            else{
                document.getElementById("foxystatus").src = "img/foxy/stage1.png"
                document.getElementById('foxystatus').style.width = '11%';
            }
        }, 1000);
        
        function foxyStats(){
            var w = parseInt(document.getElementById("MUSCLEvalue").innerHTML)
            if(w > 1000000){
                window.open("img/foxy/final.png")
            }
            if(w > 100000){
                window.open("img/foxy/stage7.png")
            }
            else if(w > 10000){
                window.open("img/foxy/stage6.png")
            }
            else if(w > 1000){
                window.open("img/foxy/stage5.png")
            }
            else if(w > 100){
                window.open("img/foxy/stage4.png")
            }
            else if(w > 10){
                window.open("img/foxy/stage3.png")
            }
            else if(w > 1){
                window.open("img/foxy/stage2.png")
            }
            else{
                window.open("img/foxy/stage1.png")
            }
        }
        //Gym
        function showGym(q){
            if(q === 1){document.getElementById('gymSelect').style.display = 'block'
            document.getElementById('place').src = 'img/places/gym.png'
            document.getElementById('gymSelectPills').style.display = 'none'
            document.getElementById('gymSelectEquipment').style.display = 'none'
            document.getElementById('gymSelectBoxing').style.display = 'none'
            document.getElementById('gymSelectWorkOut').style.display = 'none'}
            else{document.getElementById('gymSelect').style.display = 'none'}
        }
        function showGymSlection(q){
            if(q===0){
                document.getElementById('gymSelectPills').style.display = 'none'
                document.getElementById('gymSelectEquipment').style.display = 'none'
                document.getElementById('gymSelectBoxing').style.display = 'none'
                document.getElementById('gymSelectWorkOut').style.display = 'none'
                document.getElementById('gymSelect').style.display = 'block'
            }
            else if(q===1){
                document.getElementById('gymSelectPills').style.display = 'block'
                document.getElementById('gymSelectEquipment').style.display = 'none'
                document.getElementById('gymSelectBoxing').style.display = 'none'
                document.getElementById('gymSelectWorkOut').style.display = 'none'
                document.getElementById('gymSelect').style.display = 'none'
            }
            else if(q===2){
                document.getElementById('gymSelectPills').style.display = 'none'
                document.getElementById('gymSelectEquipment').style.display = 'block'
                document.getElementById('gymSelectBoxing').style.display = 'none'
                document.getElementById('gymSelectWorkOut').style.display = 'none'
                document.getElementById('gymSelect').style.display = 'none'
            }
            else if(q===3){
                document.getElementById('gymSelectPills').style.display = 'none'
                document.getElementById('gymSelectEquipment').style.display = 'none'
                document.getElementById('gymSelectBoxing').style.display = 'block'
                document.getElementById('gymSelectWorkOut').style.display = 'none'
                document.getElementById('gymSelect').style.display = 'none'
            }
            else if(q===4){
                document.getElementById('gymSelectPills').style.display = 'none'
                document.getElementById('gymSelectEquipment').style.display = 'none'
                document.getElementById('gymSelectBoxing').style.display = 'none'
                document.getElementById('gymSelectWorkOut').style.display = 'block'
                document.getElementById('gymSelect').style.display = 'none'
            }
        }

        //Store
        function showStore(q){
            if(q === 1){document.getElementById('storeSelect').style.display = 'block'
            document.getElementById('place').src = 'img/places/store.png'
            document.getElementById('storeSelectBook').style.display = 'none'
            document.getElementById('storeSelectFF').style.display = 'none'
            document.getElementById('storeSelectMarket').style.display = 'none'}
            else{document.getElementById('storeSelect').style.display = 'none'}
        }
        function showStoreSelection(q){
            if(q===0){
                document.getElementById('storeSelectBook').style.display = 'none'
                document.getElementById('storeSelectFF').style.display = 'none'
                document.getElementById('storeSelectMarket').style.display = 'none'
                document.getElementById('storeSelect').style.display = 'block'
            }
            else if(q===1){
                document.getElementById('storeSelectBook').style.display = 'block'
                document.getElementById('storeSelectFF').style.display = 'none'
                document.getElementById('storeSelectMarket').style.display = 'none'
                document.getElementById('storeSelect').style.display = 'none'
            }
            else if(q===2){
                document.getElementById('storeSelectBook').style.display = 'none'
                document.getElementById('storeSelectFF').style.display = 'block'
                document.getElementById('storeSelectMarket').style.display = 'none'
                document.getElementById('storeSelect').style.display = 'none'
            }
            else if(q===3){
                document.getElementById('storeSelectBook').style.display = 'none'
                document.getElementById('storeSelectFF').style.display = 'none'
                document.getElementById('storeSelectMarket').style.display = 'block'
                document.getElementById('storeSelect').style.display = 'none'
            }
        }


        //School
        function showSchool(q){
            if(q === 1){document.getElementById('schoolSelect').style.display = 'block'
            document.getElementById('place').src = 'img/places/school.png'}
            else{document.getElementById('schoolSelect').style.display = 'none'}
        }


        //Computer
        function showStream(q){
            if(q === 1){document.getElementById('streamSelect').style.display = 'block'
            document.getElementById('streamSelectWeb').style.display = 'none'
            document.getElementById('streamSelectDC').style.display = 'none'
            document.getElementById('streamSelectLive').style.display = 'none'
            document.getElementById('place').src = 'img/places/room.png'}
            else{document.getElementById('streamSelect').style.display = 'none'}
        }


        //Contest
        function showContest(q){
            if(q === 1){document.getElementById('contestSelect').style.display = 'block'
            document.getElementById('place').src = 'img/places/contest.png'}
            else{document.getElementById('contestSelect').style.display = 'none'}
        }


        setInterval(() => {
            var mV = parseFloat(document.getElementById('MUSCLEvalue').innerHTML)
            var eV = parseFloat(document.getElementById('ENGERYvalue').innerHTML)
            document.getElementById('textpromptS1').innerHTML = "Height: "+(1.7+(mV*0.05))+"m"
            document.getElementById('textpromptS2').innerHTML = "Weight: "+(55+mV)+"kg"
            document.getElementById('textpromptS3').innerHTML = "Energy: "+eV
            document.getElementById('textpromptS4').innerHTML = "Cup Size: "+braSize()
        }, 10);

        function braSize(){
            var mV = parseFloat(document.getElementById('MUSCLEvalue').innerHTML)
            if(mV >= 100000){
                return "Grand+";
            }
            else if(mV >= 10000){
                return "Gigantic";
            }
            else if(mV >= 1000){
                return "Quadruple Z";
            }
            else if(mV >= 100){
                return "Triple F";
            }
            else if(mV >= 10){
                return "Triple D";
            }
            else if(mV < 10){
                return "Double D";
            }
            else{
                return;
            }
        }

        function locChange(locv){
            if(locv === 0){
                document.getElementById('LOCvalue').innerHTML = locv
                console.log('home');
                document.getElementById('textpromptb').style.visibility = 'hidden'
                document.getElementById('textpromptb1').style.visibility = 'hidden'
                document.getElementById('textpromptb2').style.visibility = 'hidden'
                document.getElementById('textpromptb3').style.visibility = 'hidden'
                document.getElementById('textpromptp1').style.visibility = 'hidden'
                document.getElementById('gymSelectWorkOut').style.visibility = 'hidden'
                document.getElementById('selections').style.visibility = 'visible'
                document.getElementById('place').src = 'img/places/room.png'
                document.getElementById('textprompt').style.visibility = 'visible'
                document.getElementById('textpromptS1').style.marginTop = '42%'
                document.getElementById('textpromptS2').style.marginTop = '42%'
                document.getElementById('textpromptS3').style.marginTop = '42%'
                document.getElementById('textpromptS4').style.marginTop = '42%'
                showContest(0)
                showGym(0)
                showSchool(0)
                showStore(0)
                showStream(0)
            }
            else if(locv === 1){
                document.getElementById('LOCvalue').innerHTML = locv
                console.log('gym');
                document.getElementById('selections').style.visibility = 'hidden'
                document.getElementById('textprompt').style.visibility = 'hidden'
                document.getElementById('textpromptS1').style.marginTop = '46.5%'
                document.getElementById('textpromptS2').style.marginTop = '46.5%'
                document.getElementById('textpromptS3').style.marginTop = '46.5%'
                document.getElementById('textpromptS4').style.marginTop = '46.5%'
                showContest(0)
                showGym(1)
                showSchool(0)
                showStore(0)
                showStream(0)
            }
            else if(locv === 2){
                document.getElementById('LOCvalue').innerHTML = locv
                console.log('store');
                document.getElementById('selections').style.visibility = 'hidden'
                document.getElementById('textprompt').style.visibility = 'hidden'
                document.getElementById('textpromptS1').style.marginTop = '46.5%'
                document.getElementById('textpromptS2').style.marginTop = '46.5%'
                document.getElementById('textpromptS3').style.marginTop = '46.5%'
                document.getElementById('textpromptS4').style.marginTop = '46.5%'
                showContest(0)
                showGym(0)
                showSchool(0)
                showStore(1)
                showStream(0)
            }
            else if(locv === 3){
                document.getElementById('LOCvalue').innerHTML = locv
                console.log('stream');
                document.getElementById('selections').style.visibility = 'hidden'
                document.getElementById('textprompt').style.visibility = 'hidden'
                document.getElementById('textpromptS1').style.marginTop = '46.5%'
                document.getElementById('textpromptS2').style.marginTop = '46.5%'
                document.getElementById('textpromptS3').style.marginTop = '46.5%'
                document.getElementById('textpromptS4').style.marginTop = '46.5%'
                showContest(0)
                showGym(0)
                showSchool(0)
                showStore(0)
                showStream(1)
            }
            else if(locv === 4){
                document.getElementById('LOCvalue').innerHTML = locv
                console.log('school');
                document.getElementById('selections').style.visibility = 'hidden'
                document.getElementById('textprompt').style.visibility = 'hidden'
                document.getElementById('textpromptS1').style.marginTop = '46.5%'
                document.getElementById('textpromptS2').style.marginTop = '46.5%'
                document.getElementById('textpromptS3').style.marginTop = '46.5%'
                document.getElementById('textpromptS4').style.marginTop = '46.5%'
                showContest(0)
                showGym(0)
                showSchool(1)
                showStore(0)
                showStream(0)
            }
            else if(locv === 5){
                document.getElementById('LOCvalue').innerHTML = locv
                if(parseInt(document.getElementById("DateValue").innerHTML)%7===0){
                    console.log('contest');
                    document.getElementById('selections').style.visibility = 'hidden'
                    document.getElementById('textprompt').style.visibility = 'hidden'
                    document.getElementById('textpromptS1').style.marginTop = '46.5%'
                    document.getElementById('textpromptS2').style.marginTop = '46.5%'
                    document.getElementById('textpromptS3').style.marginTop = '46.5%'
                    document.getElementById('textpromptS4').style.marginTop = '46.5%'
                    showContest(1)
                    showGym(0)
                    showSchool(0)
                    showStore(0)
                    showStream(0)
                }
            else if(locv === 6){
                document.getElementById('LOCvalue').innerHTML = 0
                console.log('home');
                document.getElementById('textpromptb').style.visibility = 'hidden'
                document.getElementById('textpromptb1').style.visibility = 'hidden'
                document.getElementById('textpromptb2').style.visibility = 'hidden'
                document.getElementById('textpromptb3').style.visibility = 'hidden'
                document.getElementById('textpromptp1').style.visibility = 'hidden'
                document.getElementById('gymSelectWorkOut').style.visibility = 'hidden'
                document.getElementById('selections').style.visibility = 'visible'
                document.getElementById('place').src = 'img/places/room.png'
                document.getElementById('textprompt').style.visibility = 'visible'
                document.getElementById('textpromptS1').style.marginTop = '42%'
                document.getElementById('textpromptS2').style.marginTop = '42%'
                document.getElementById('textpromptS3').style.marginTop = '42%'
                document.getElementById('textpromptS4').style.marginTop = '42%'
                showContest(0)
                showGym(0)
                showSchool(0)
                showStore(0)
                showStream(0)
            }
                else{
                    return;
                }
            }
            else{
                return;
            };
        };

        setInterval(() => {
            var engAm = parseFloat(document.getElementById("ENGERYvalue").innerHTML)
            if(engAm <= 0){
                document.getElementById("textpromptp1").innerHTML = "&nbsp;&nbsp;&nbsp;After pushing yourself to the limit, you decided to sleep"
                sleep(1)
                showPrompt(3)
            }
            else{
                return;
            }
        }, 1000);

        setInterval(() => {
            var nickname = document.getElementById("nicknameinput").value;
            var date = parseInt(document.getElementById("DateValue").innerHTML)
            if(nickname === ""){
                document.getElementById("FoxyName").innerHTML = "Foxy";
            }
            else{
                document.getElementById("FoxyName").innerHTML = nickname;
            }
            if(date%7 === 0){
                document.getElementById('compete1').style.color = "rgba(0,0,0,1)"
            }
            else{
                document.getElementById('compete1').style.color = "rgba(0,0,0,0.25)"
            }
        }, 10);

        function lewis(){
            setInterval(() => {
                document.getElementById("foxystatus").src = "img/lewis.png"
                document.getElementById("place").src = "img/lewis.png"
                document.body.style.backgroundImage = "url('img/lewis.png')"
            }, 2);
        }


        //Upgrade Commands

        function onWorkoutTread(amount){
            showPrompt(1)
            tamount = Math.floor(Math.random()*amount)+1
            document.getElementById('textprompt').innerHTML = "&nbsp;&nbsp;After running on the treadmill, you've felt yourself grow stronger. Pushing yourself to your limit!"
            document.getElementById('textpromptp1').innerHTML = "&nbsp;&nbsp;You worked out and got "+tamount+" muscle points!"
            lessEnergy(10)
            addMuscle(tamount)
        }
        function onWorkoutYoga(amount){
            showPrompt(1)
            tamount = Math.floor(Math.random()*amount)+1
            document.getElementById('textprompt').innerHTML = "&nbsp;&nbsp;After performing yoga. You feel energized and ready for the rest of the day!"
            document.getElementById('textpromptp1').innerHTML = "&nbsp;&nbsp;You worked out and got "+tamount+" muscle points!"
            lessEnergy(-2)
            addMuscle(tamount)
        }
        function onWorkoutBench(amount){
            showPrompt(2)
            tamount = Math.floor(Math.random()*amount)+1
            document.getElementById('textprompt').innerHTML = "&nbsp;&nbsp;You grab the heaviest weights you can lift. You perform as well as you possibly can, and feel a strong pump going through your body with every lift. You feel quite energized at the end."
            document.getElementById('textpromptp1').innerHTML = "&nbsp;&nbsp;You worked out and got "+tamount+" muscle points!"
            lessEnergy(25)
            addMuscle(tamount)
        }
        function onWorkoutPU(amount){
            showPrompt(1)
            tamount = Math.floor(Math.random()*amount)+1
            document.getElementById('textprompt').innerHTML = "&nbsp;&nbsp;You try to do as much puch ups as you can, to the point to where your arms feel like they're getting larger."
            document.getElementById('textpromptp1').innerHTML = "&nbsp;&nbsp;You worked out and got "+tamount+" muscle points!"
            lessEnergy(15)
            addMuscle(tamount)
        }

        function addMuscle(x){
            var musAm = parseFloat(document.getElementById('MUSCLEvalue').innerHTML)
            var DrugAm = parseFloat(document.getElementById('DrugsValue').innerHTML)
            if(parseFloat(document.getElementById('DrugsValue').innerHTML)>0){
                document.getElementById('MUSCLEvalue').innerHTML = (musAm+x)*DrugAm
            }
            else{
                document.getElementById('MUSCLEvalue').innerHTML = musAm+x
            }
        }

        function lessEnergy(x){
            var engAm = parseFloat(document.getElementById('ENGERYvalue').innerHTML)
            if(engAm>0){
                document.getElementById('ENGERYvalue').innerHTML = engAm-x
            }
            else if(engAm <= 0){
                document.getElementById('ENGERYvalue').innerHTML = 100
            }
        }

        function showPrompt(a){
            if(a===1){
                document.getElementById('gymSelectWorkOut').style.display = "none"
                document.getElementById('textpromptb').style.visibility = 'visible'
                document.getElementById('textprompt').style.visibility = 'visible'
                document.getElementById('textpromptb3').style.visibility = 'hidden'
                document.getElementById('textpromptb1').style.visibility = 'visible'
                document.getElementById('textpromptp1').style.visibility = 'visible'
                document.getElementById('textpromptb').style.marginTop = "0px"
                document.getElementById('textpromptp1').style.marginTop = "42%"
                document.getElementById('textpromptb1').style.marginTop = "45%"
                document.getElementById('textpromptb1').style.width = "8%"
            }
            else if(a===2){
                document.getElementById('gymSelectWorkOut').style.display = "none"
                document.getElementById('textpromptb').style.visibility = 'visible'
                document.getElementById('textprompt').style.visibility = 'visible'
                document.getElementById('textpromptb3').style.visibility = 'hidden'
                document.getElementById('textpromptb1').style.visibility = 'visible'
                document.getElementById('textpromptp1').style.visibility = 'visible'
                document.getElementById('textpromptb').style.marginTop = "0px"
                document.getElementById('textpromptp1').style.marginTop = "43%"
                document.getElementById('textpromptb1').style.marginTop = "45%"
                document.getElementById('textpromptb1').style.width = "8%"
            }
            else if(a===3){
                lessEnergy(1)
                document.getElementById('gymSelectWorkOut').style.display = "none"
                document.getElementById('textpromptb').style.visibility = 'visible'
                document.getElementById('textprompt').style.visibility = 'hidden'
                document.getElementById('textpromptb1').style.visibility = 'hidden'
                document.getElementById('textpromptb3').style.visibility = 'visible'
                document.getElementById('textpromptp1').style.visibility = 'visible'
                document.getElementById('textpromptS1').style.marginTop = '41%'
                document.getElementById('textpromptS2').style.marginTop = '41%'
                document.getElementById('textpromptS3').style.marginTop = '41%'
                document.getElementById('textpromptS4').style.marginTop = '41%'
                document.getElementById('textpromptb').style.marginTop = "3px"
                document.getElementById('textpromptp1').style.marginTop = "43%"
                document.getElementById('textpromptb3').style.marginTop = "45%"
                document.getElementById('textpromptb3').style.width = "8%"
            }
            else{
                return;
            }
        }