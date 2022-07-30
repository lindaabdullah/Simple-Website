//----------------------- counter.html -----------------------
const displayElement = document.getElementById("displayNumber");
const userInputElement = document.getElementById("userInput");

// using .onclick =...
document.getElementById("submitID").onclick = function Display(){
    displayElement.innerHTML = userInputElement.value;
}

document.getElementById("incr").onclick = function incrementValue(){
    if (displayElement.innerHTML == ""){
        alert("Must enter a number");
    }
    else{
        let submittedNumber = parseInt(displayElement.innerHTML);
        submittedNumber++;
        displayElement.innerHTML = submittedNumber;
    }
}

document.getElementById("decr").onclick = function incrementValue(){
    if (displayElement.innerHTML == ""){
        alert("Must enter a number");
    }
    else{
        let submittedNumber = parseInt(displayElement.innerHTML);
        submittedNumber--;
        displayElement.innerHTML = submittedNumber;
    }
}

let timerValueElement = document.getElementById("timerValue");

function Timer() {
    let value = parseInt(timerValueElement.innerHTML);
    value++;
    timerValueElement.innerHTML = value;  
}

function Start(){
    myInterval = setInterval(Timer, 500);
}

function Stop(){
    clearInterval(myInterval);
    timerValueElement.innerHTML = 0;
}

// using .addEventListener()

document.getElementById("startTimer").addEventListener("click", Start);
document.getElementById("stopTimer").addEventListener("click", Stop);