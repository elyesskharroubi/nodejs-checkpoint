var fs = require("fs");

let content = fs.readFileSync(process.argv[2]);
console.log(content.toString().split("\n").length - 1);
