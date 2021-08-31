const fs=require('fs');
const http=require('http');
console.log('Started');
const server=http.createServer((req,res)=>{
    fs.readFile('home.html',(err,data)=>{
        if(err)
        {
            res.write(err);
        }
        res.write(data);
    })
    fs.readFile('input2.txt',function(err,data){
        if(err)
        {
            res.write(err);
        }
        else
        {
            res.write(data);
        }
        res.end();
    })
    
    console.log('Ended');
})
server.listen(5000,(req,res)=>{
    console.log("Server listening on port 5000");
})