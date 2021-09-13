const fs=require('fs');
const http=require('http');
const prompt=require('prompt-sync')();
file=prompt("Please enter the name of the file (filename.extention): ");
const server=http.createServer((req,res)=>{
    fs.access(file,(err)=>{
        if(err)
        {
            res.end("File Doesnt exists please re run the server!!!");
        }
        else    
        {
            const stream=fs.createReadStream(file);
            stream.pipe(res);
        }
    });
})
server.listen(5000,(req,res)=>{
    console.log("Server listening on port 5000!!");
})