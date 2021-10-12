var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type':'application/json'});
    var jsonObj = {
        name:'max',
        surname:'peter',
        age:23
    };

    res.end(JSON.stringify(jsonObj));

}).listen(3000);

console.log("Server is running at port 3000");