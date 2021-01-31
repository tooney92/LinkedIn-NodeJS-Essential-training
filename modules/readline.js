const { promises } = require("fs")
const readLine = require("readline")

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("how do you like node? ", answer =>{
    console.log(answer);
    process.exit()
})

console.log("\n\n\n\n hello world");
console.log(`\n\n\n 5/5 = ${5/5}`);