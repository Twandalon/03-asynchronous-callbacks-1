const fs = require('fs');

module.exports = (paths, callback) => {
  let results = [];
  fs.readFile(paths[0], (err, data) => {
    if(err) return callback(err); results.push(data.toString());
    fs.readFile(paths[1], (err, data) => {
      if(err) return callback(err); results.push(data.toString());
      fs.readFile(paths[2], (err, data) => {
        if(err) return callback(err); results.push(data.toString());
        callback(null, results);
      });
    });
  });
};
