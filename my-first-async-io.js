var fs = require("fs");
let file = process.argv[2];

fs.readFile(file, (err, content) => {
  let nLines = content.toString().split("\n").length - 1;
  console.log(nLines);
});
