const http=require("http");//required module to build server
const fs=require('fs')
//server created and routing inserted
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        fs.readFile('base.html',(err,data)=>{
            res.write(data);
            res.end();
        })
    }
    else if(req.url=='/home')
    {
        fs.readFile('home.html',(err,data)=>{
            res.write(data);
            res.end();
        })
    }
    else if(req.url=='/about')
    {
        fs.readFile('about.html',(err,data)=>{
            res.write(data);
            res.end();
        })
    }
    else if(req.url=='/contact')
    {
        fs.readFile('contact.json',(err,data)=>{
            res.write(data);
            res.end();
        })
    }
    else
    {
        fs.readFile('error.html',(err,data)=>{
            res.write(data);
            res.end();
        })
    }
})
//server listening on port 5000
server.listen(5000,()=>{
    console.log("Server is listening on port 5000!!!");
})
