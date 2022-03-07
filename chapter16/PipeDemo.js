var fs = require('fs')

var readable = fs.createReadStream('hello.txt')
var writable = fs.createWriteStream('pipe.txt')

readable.pipe(writable) // returns writable