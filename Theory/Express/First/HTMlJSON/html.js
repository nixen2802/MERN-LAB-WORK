var fs = require('fs');
var http = require('http');

//var writeStream = fs.createWriteStream('write_file.txt');
//readStream.pipe(writeStream);
http.createServer(function(req,res){

    res.writeHead(200,{'content-Type':'text/html'});

    var readStream = fs.createReadStream('index.html');
    readStream.pipe(res);
    //res.end("hello");
}).listen(3000);

console.log("Server is running at port 3000");