const http=require("http");//required module to build server
//server created 
const server=http.createServer((req,res)=>{
    res.end("This is working fine and server is created successfully!!");
})
//server listening on port 5000
server.listen(5000,()=>{
    console.log("Server is listening on port 5000!!!");
})
