const http=require('http');
const EventEmitter=require('events')
const event=new EventEmitter()
const server=http.createServer((req,res)=>{
    event.on('signup', name=>{
        res.write(`Signup successfull ${name} you can login to the system now!!!!`);
    })
    event.addListener('login', (name,password)=>{
        res.write(`You have been logged in with credentials username : ${name} and password : ${password}!!`);
    })
    event.on('logout',name=>{
        res.write(`You have been successfully logged out ${name}!!!!!`);
    })
    if(req.url=="/signup")
    {
        event.emit('signup',"Nayan");
    }
    if(req.url=="/login")
    {
        event.emit('login',"Nayan", "Nayan@123");
    }
    if(req.url=="/logout")
    {
        event.emit('logout',"Nayan");
    }
    res.end();
})
server.listen(5000,(req,res)=>{
    console.log("Server started on port 5000!!!!");
})