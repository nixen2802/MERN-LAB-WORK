const http=require('http');
var eventEmit=require('events');
var util=require('util');
var Students=function(name){
    this.name=name;
}
const server=http.createServer((req,res)=>{
    util.inherits(Students, eventEmit);
    var stud=new Students("nayan");
    stud.on('Info', (age)=>{
        res.write(`Your name is ${stud.name} and your age is ${age}`)
    })
    stud.emit('Info', 19);
    res.end();
})
server.listen(5000,()=>{
    console.log("Server listening on port!!!!");
})
