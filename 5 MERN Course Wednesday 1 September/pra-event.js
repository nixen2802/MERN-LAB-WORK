const http=require('http');
const eventobj=require('events')
const server=http.createServer((req,res)=>{
    res.write('Nayan');
    var emitter=new eventobj.EventEmitter();
    emitter.on('first',function(){
        res.write("First is working fine!!!")
    })
    emitter.on('second',function(){
        res.write("\nSecond is working fine!!!")
    })
    emitter.addListener('third',function(){
        res.write('\nThird is working fine!!!!');
    })
    emitter.addListener('fourth',function(){
        res.write('\nFourth is working fine!!!');
    })
    emitter.emit('first');
    emitter.emit('second');
    emitter.emit('third');
    emitter.emit('fourth');
    res.end();
})
server.listen(5000,(req,res)=>{
    console.log("Server listening on port 5000");
})


