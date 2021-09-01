//methods ON() EMIT() and addListener()
const http=require('http');
const server=http.createServer((req,res)=>{
    const eventobj=require('events')
    var emitter=new eventobj.EventEmitter();
    emitter.on('click', function(){
        res.write("Something is clicked");
        res.end();
    })
    emitter.on('second', function(){
        console.log("Working fine re baba... Jay Maharashtra")
    })
    emitter.addListener('trying', function(){
        console.log("Working fine re baba... Jay Gujarat")
    })
    emitter.on('customs', function(){
        if(1>2)
        {
            console.log("You dont know JS");
        }
        else
        {
            console.log("You are trying to learn JS");
        }
    })
    emitter.emit('click');
    emitter.emit('second');
    emitter.emit('customs');
    emitter.emit('trying');
})

server.listen(5000,(req,res)=>{
    console.log("Server listening on port 5000");
})