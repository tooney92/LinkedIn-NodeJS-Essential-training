const path = require("path")
const util = require("util")

const dirU = path.join(__dirname, 'www', 'files', 'uploads');
console.log(dirU);

util.log(path.basename(__filename))