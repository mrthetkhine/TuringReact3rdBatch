const http = require("http");

const requestListener = (req,res)=>{
    console.log("Req ",req.headers);
    //res.setHeader('Content-Type', 'text/plain');
    let obj = {
        text:"Hello"
    };
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(obj));
};

const server = http.createServer(requestListener);
server.listen(9000,()=>console.log('Server started'));