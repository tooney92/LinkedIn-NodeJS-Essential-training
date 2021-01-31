const waitTime = 5000; 
const waitInterval = 500;
let  currentTime = 0;


const incTime = ()=>{
    currentTime += waitInterval
    const p = Math.floor((currentTime/waitTime)* 100)
    process.stdout.cursorTo(1);
    process.stdout.write(`waiting .... ${p} %`);
    console.log(currentTime/waitTime);
    process.stdout.clearLine();
}

console.log(`setting a ${waitTime/1000} second delay`);

const timerFinished = ()=> {
    process.stdout.write('\n done')
    clearInterval(interval)
}

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
process.stdout.write("hello");