

const questions = [
    "what is your name?",
    "what is your age?",
    "what is your gender?"
]

const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`)
    process.stdout.write(` > `)
}

ask(1)

process.stdin.on("data", data => {
    
    process.stdout.write(`\n\n ${data.toString().trim()} \n`)
    process.exit()
})

process.on('exit', ()=>{
    console.log("thanks for playing");
})

//notes
/*
    use process.exit() to end a process
    .on(exit) is an event listener which allows you perform
    certain actions upon exit e.g loggin to the console.

*/