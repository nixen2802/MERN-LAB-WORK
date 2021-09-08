const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    res.write("First file reading started");
    fs.readFile('first.txt',(data,err)=>{
        if(err)
        {
            console.log("There is some error generated!!")
        }
        else
        {
            res.write(data.toString());
            res.write("First file reading done!!!");
        }
    })
    res.write("Second file reading started");
    fs.readFile('second.txt',(data,err)=>{
        if(err)
        {
            console.log("There is some error generated!!")
        }
        else
        {
            res.write(data.toString());
            res.write("Second file reading done!!!");
        }
    })
    res.write("Third file reading started");
    fs.readFile('third.txt',(data,err)=>{
        if(err)
        {
            console.log("There is some error generated!!")
        }
        else
        {
            res.write(data.toString());
            res.write("Third file reading done!!!");
        }
    })
    res.end();
})
server.listen(5000,()=>{
    console.log("Server listening on port 5000!!!");
})