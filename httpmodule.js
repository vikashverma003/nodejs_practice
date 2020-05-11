// for creating the server we use the http module

const http = require("http");
const server = http.createServer(function(req,res){
    res.writeHead(200, {"content-type":"text/html"});
    res.write("<h3>Server is running</h3>"); // for writing into the web page.

    res.end(); // is mandatory
}).listen(3000, ()=>console.log("server is running on port 3000"));