var http = require("http");


http.createServer(function(req,res){
res.end("hello" + "HI" );
//res.end("Hi" +"hello");

}).listen(3000);

//console.log("Server is running at localhost at port 3000");


