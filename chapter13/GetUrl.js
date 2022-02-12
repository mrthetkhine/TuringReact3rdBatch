const https = require('https')
function getUrl(url)
{
    let request = https.get(url);
    //console.log("Request ",request);
    request.on("response",(response)=>{
        //console.log("Response ",response);
        response.setEncoding("utf-8");
        let data = "";
        response.on("data",(chunk)=>{
            console.log("Data event");
            data+= chunk;
        });
        response.on("end",()=>{
            console.log("End event");
            console.log("Data ",data);
        });
    });

}
let url = "https://jsonplaceholder.typicode.com/todos/1";
getUrl(url);