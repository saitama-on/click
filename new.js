

let btn_start = document.getElementById("start");
let btn_clickme = document.getElementById("clickme");
let seconds = parseInt(document.getElementById("stopwatch").textContent);
let count = 0;

let score = document.getElementById("btn").textContent;
function startit(){
    btn_start.disabled = true ;
    btn_clickme.disabled =false;
    let new_int = setInterval(() => {
        seconds = seconds + 1 ;
        document.getElementById("stopwatch").textContent = seconds + "/5";

        if (seconds === 6){

            
            btn_clickme.disabled =true;
            alert("your score is : " + parseInt(document.getElementById("btn").textContent));
            clearInterval(new_int);
            document.getElementsByClassName("leaderboard").textContent = username + ':' + score;
        }

    },1000);

}

function increment(){

    
    count++;
    document.getElementById("btn").textContent = count;

}


