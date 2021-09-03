const http=require('http');
var eventEmit=require('events');
var util=require('util');
var Students=function(name){
    this.name=name;
}
var Teacher=function(teach1, teach2, teach3, teach4, subject){
    this.one=teach1;
    this.two=teach2;
    this.three=teach3;
    this.four=teach4;
    this.subject=subject;
}
const server=http.createServer((req,res)=>{
    util.inherits(Students, eventEmit);
    util.inherits(Teacher, eventEmit);
    var stud=new Students("Nayan");
    var teach=new Teacher("Gopal Sir", "Manish Sir", "Swapnil Sir", "Vaibhav Sir", "MERN");
    stud.on('Info', (age)=>{
        res.write(`Your name is ${stud.name} and your age is ${age}`)
    })
    stud.addListener('GetYear',(year)=>{
        year=year+4;
        res.write(`\nYou will be provided with bachelors degree in the year : ${year}`)
    })
    teach.on('mern', ()=>{
        res.write('\nYou will learn MERN stack course by following professors : ')
        res.write(`\n1. ${teach.one}\n2. ${teach.two}\n3. ${teach.three}\n4. ${teach.four}`)
    });
    stud.emit('Info', 19);
    stud.emit('GetYear', 2019);
    teach.emit('mern');
    res.end();
})
server.listen(5000,()=>{
    console.log("Server listening on port!!!!");
})
