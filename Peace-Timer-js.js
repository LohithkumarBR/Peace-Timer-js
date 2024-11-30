let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");

let secondsLeft = 0;
let timerCompletedText = "Your moment is complete";
let timerId; //Declaring timerId globally.


function clearPreviousTimers() {
    clearInterval(timerId); //function to clear the timer that is assigned to timerId
}

twentySecondsBtn.onclick = function() {
    secondsLeft = 20;
    clearPreviousTimers(); //clearing previousTimer before starting new timer
    setTimerAndShow();
};

thirtySecondsBtn.onclick = function() {
    secondsLeft = 30;
    clearPreviousTimers(); //clearing previousTimer before starting new timer
    setTimerAndShow();
};

fortySecondsBtn.onclick = function() {
    secondsLeft = 40;
    clearPreviousTimers(); //clearing previousTimer before starting new timer
    setTimerAndShow();
};

oneMinuteBtn.onclick = function() {
    secondsLeft = 60;
    clearPreviousTimers(); //clearing previousTimer before starting new timer
    setTimerAndShow();
};

function setTimerAndShow() {
    timerText.textContent = secondsLeft + " seconds left";
    timerId = setInterval(startTimer, 1000);
}

function startTimer() {
    if (secondsLeft > 1) {
        secondsLeft = secondsLeft - 1;
        timerText.textContent = secondsLeft + " seconds left";
    } else {
        clearPreviousTimers();
        timerText.textContent = timerCompletedText;
    }
}