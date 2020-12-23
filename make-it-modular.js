var filtered = require("./mymodule.js");
var dir = process.argv[2];
var fltr = process.argv[3];

filtered(dir, fltr, (err, list) => {
  err && console.log("somthing went wrong:", err);
  list.forEach((el) => console.log(el));
});
