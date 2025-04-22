const startBtn = document.querySelector('.start')
const resetBtn = document.querySelector('.reset')
const stopBtn = document.querySelector('.stop')

const blocks = document.querySelectorAll('.block')

startBtn.addEventListener('click', start);
resetBtn.addEventListener('click', reset);
stopBtn.addEventListener('click', stop);


// console.log(blocks)
let intervalId = null; 

function start() {
    // give random heights to the block
    console.log("start")

    // Prevent multiple intervals
    if (intervalId) return;

    intervalId = setInterval(() => {
        for (let i = 0; i < blocks.length; i++) {
            const height = Math.floor(Math.random() * 450);
            // console.log(height);
            blocks[i].style.height = `${height}px`;
        }
    }, 1000); 

}

function reset() {
    // all block heights is full height(400px)
    console.log("reset")
    // Stop the interval and reset heights
    clearInterval(intervalId);
    intervalId = null;
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.height = `450px`; // Reset height to full
    }
}

function stop() {
    // fix the random height to the blocks
    console.log("stop")
    // Stop the interval but keep the current heights
    clearInterval(intervalId);
    intervalId = null;
}