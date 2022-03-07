const net = require('net')

let server = net.createServer();
let handleConnection = (con)=>{
    con.on('data',(data)=>{
        console.log("Data ",data.toString());

        let responseStatus ="HTTP/1.1 200 Ok\r\n";
        let responseBody = "<h1>Hello From Server</h1>";
        responseStatus +="Content-Type:text/html\r\n";
        responseStatus +=`Content-Length:${responseBody.length}\r\n\r\n`;
        con.write(responseStatus);
        con.write(responseBody);
        //con.close();
    });
}
server.on("connection",handleConnection);


server.listen(9000,()=>console.log("server started"));