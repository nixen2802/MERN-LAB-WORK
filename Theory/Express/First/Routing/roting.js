var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){

    console.log('requested url:'+ req.url);
    if(req.url === '/home'|| req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream('index.html').pipe(res);
    }else if (req.url === '/api')  { 

    res.writeHead(200, {'Content-Type':'application/json'});
    fs.createReadStream('sample.json').pipe(res);
    /*var jsonObj = {
        name:'max',
        surname:'peter',
        age:23
    };*/

    //res.end(JSON.stringify(jsonObj));
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream('404.html').pipe(res);
    }
}).listen(3000);

console.log("Server is running at port 3000");  