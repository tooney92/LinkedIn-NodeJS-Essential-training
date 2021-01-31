const grab = flag => {
    const info = {}
    for (let index = 0; index < flag.length; index++) {
        const element = flag[index];
        if (element.startsWith("-")) {
            info[element] = flag[index + 1]
        }
    }
    console.log(info);
}

grab(process.argv)
console.log(process.argv[2]); 