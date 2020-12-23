var fs = require("fs");
var path = require("path");

let folder = process.argv[2];
let extension = "." + process.argv[3];
fs.readdir(folder, (err, list) => {
  if (err) return console.error(err);
  list.forEach((el) => {
    path.extname(el) === extension && console.log(el);
  });
});
