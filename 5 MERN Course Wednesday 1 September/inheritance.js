var eventEmit=require('events');
var util=require('util');
var Students=function(name){
    this.name=name;
}
util.inherits(Students, eventEmit);
var stud=new Students("nayan");
stud.on('Info', (age)=>{
    console.log(`Your name is ${stud.name} and your age is ${age}`)
})
stud.emit('Info', 19);