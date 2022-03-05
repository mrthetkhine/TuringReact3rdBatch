const fs = require("fs");
function copyFile(sourceFile,destinationFile,callback)
{
    fs.readFile(sourceFile,(err,buffer)=>{
        if(err)
        {
            callback(err);
        }
        else
        {
            fs.writeFile(destinationFile,buffer,callback);
        }
    });
}
copyFile('hello.txt','copy.txt',(e)=>console.log('callback e is',e))