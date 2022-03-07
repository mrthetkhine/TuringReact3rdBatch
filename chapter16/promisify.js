const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
/*
fs.readFile('transform.js',(err,data)=>{
    console.log("Data ",data.toString());
});
*/
readFile('transform.js')
    .then(data=>console.log("data is ",data.toString()))