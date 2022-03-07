const fs = require("fs"); 
const zlib = require("zlib");

function gzip(filename, callback) {
    // Create the streams
    let source = fs.createReadStream(filename);
    let destination = fs.createWriteStream(filename + ".gz"); 
    let gzipper = zlib.createGzip();
   
    source.on("error", callback)
            .pipe(gzipper)
            .pipe(destination)
            .on("error", callback)
            .on("finish", callback); // call callback when writing is complete
}

gzip('hello.txt', ()=>console.log("Done"))