var fs=require('fs');
var http=require('http')
const server=http.createServer((req,res)=>{
    const stream=fs.createReadStream('file.txt');
    stream.pipe(res);
})
server.listen(5000,(req,res)=>{
    console.log("Server listening on port 5000!!");
})