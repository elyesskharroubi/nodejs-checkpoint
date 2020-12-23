var fs = require("fs");
var path = require("path");

module.exports = function (dir, fltr, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);
    list = list.filter((el) => path.extname(el) === "." + fltr);
    callback(null, list);
  });
};
