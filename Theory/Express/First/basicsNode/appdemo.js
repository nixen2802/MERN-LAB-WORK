var http = require("http");
var up = require("upper-case");
var hello = function(req,res){
    res.end(up("hello"));
    
    }


http.createServer(hello).listen(3000);

console.log("Server is running at localhost at port 3000");


