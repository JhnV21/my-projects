function createTimer(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const clock = document.querySelector('.clock');
const startButton = document.querySelector('.btn-start');
const pauseButton = document.querySelector('.btn-pause');
const restartButton = document.querySelector('.btn-restart');
let seconds = 0;  

startButton.addEventListener('click', function(){
    setInterval(function(){
        createTimer(seconds);
    }, 1000)
})

pauseButton.addEventListener('click', function(){
    clearInterval(start);
})

restartButton.addEventListener('click', function() {
    clock.innerHTML = '00:00:00';
})
