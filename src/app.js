const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resumeButton = document.getElementById('resume');
const resetButton = document.getElementById('reset');

let pomodoro = 25 * 60; // seconds
let intervalId;

const startClock = () => {
    intervalId = setInterval(() => {
        pomodoro = pomodoro - 1; 

        minutes.innerHTML = Math.floor( pomodoro / 60);
        seconds.innerHTML = pomodoro % 60;

        if(pomodoro === 0)
            clearInterval(intervalId);
    }, 
    1000);
}

startButton.addEventListener('click', e => {
    startClock();
    startButton.classList.toggle('hidden');
    stopButton.classList.toggle('hidden');
});

stopButton.addEventListener('click', e =>  {
    clearInterval(intervalId);
    stopButton.classList.toggle('hidden');
    resumeButton.classList.toggle('hidden');
    resetButton.classList.toggle('hidden');
});

resumeButton.addEventListener('click', e => {
    startClock();
    stopButton.classList.toggle('hidden');
    resumeButton.classList.toggle('hidden');
    resetButton.classList.toggle('hidden');
});

resetButton.addEventListener('click', e => {
    resumeButton.classList.toggle('hidden');
    resetButton.classList.toggle('hidden');
    startButton.classList.toggle('hidden');
    pomodoro = 25 * 60;
});