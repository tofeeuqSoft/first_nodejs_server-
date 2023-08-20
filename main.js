const http = require("http");

const server=http.createServer(function (req, res){

    res.end("Hello World")

});

server.listen(5050);
console.log("server success");