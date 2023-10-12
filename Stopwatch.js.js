document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateTimer();
    startButton.disabled = false;
    stopButton.disabled = false;
}

function updateTimer() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    display.textContent =
        formatTime(hours) + ":" +
        formatTime(minutes) + ":" +
        formatTime(seconds) + "." +
        formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// Initialize the timer display
updateTimer();

  });