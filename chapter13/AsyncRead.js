const fs = require('fs')

console.log("Before read");
fs.readFile('AsyncRead.js', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("Data Completed: >>",data);
});
console.log("after read API");