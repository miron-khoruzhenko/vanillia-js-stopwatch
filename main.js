// TODO: заменить метод подсчета времени паузы на последнее время при паузе

const startBtn  = document.querySelector(".start-btn");
const resetBtn  = document.querySelector(".reset-btn");

const secElem   = document.querySelector(".seconds");
const msElem    = document.querySelector(".miliseconds");

let interval    = 0;
let tens        = 0;
let seconds     = 0;
let miliseconds = 0;
let mode        = 0;
let startDate   = 0;
let timeOnPause    = 0;
let pause       = 0;

function startTimer(){
    startDate = Date.now();

    if(mode === 0){
        mode = 1;

        startBtn.innerText = "Stop"

        interval = setInterval(() => {
            tens = Date.now() - startDate + timeOnPause;

            miliseconds = Math.floor(tens / 10 % 100);
            seconds     = Math.floor(tens / 1000);

            if(miliseconds < 10){
                msElem.innerText    = '0' + miliseconds;
            }else{
                msElem.innerText    = miliseconds;
            }

            if(seconds < 10){
                secElem.innerText   = '0' + seconds;
            }else{
                secElem.innerText   = seconds;
            }
    
        }, 13);
    }else{
        mode = 0;
        timeOnPause = tens
        startBtn.innerText = "Start";

        clearInterval(interval);
    }
}

function resetTimer(){
    clearInterval(interval)

    mode        = 0;
    tens        = 0;
    timeOnPause    = 0;
    pause       = 0;
    startDate   = 0;

    startBtn.innerText  = "Start";
    msElem.innerText    = '00';
    secElem.innerText   = '00';
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);


// более простой, работающий но не точный код
// секунды сильно отстают
// function startTimer(){
//     if(mode === 0){
//         startBtn.innerText = "Stop"
//         interval = setInterval(() => {
//             tens += 8;
//             miliseconds = tens % 100;
//             seconds     = Math.floor(tens / 100);
//             if(miliseconds < 10){
//                 msElem.innerText    = '0' + miliseconds;
//             }else{
//                 msElem.innerText    = miliseconds;
//             }

//             if(seconds < 10){
//                 secElem.innerText   = '0' + seconds;
//             }else{
//                 secElem.innerText   = seconds;
//             }
    
//         }, 80)
//         mode = 1;
//     }else{
//         startBtn.innerText = "Start"
//         mode = 0;
//         clearInterval(interval)
//     }
// }