// var custommodule=require('./hello.js')
// console.log(custommodule.SplitMe('Nayan, Hiral, Unnati, Utsavi',','));
// var hello=require('./multiple.js')
// console.log(hello.sayHello());
var http=require('http');
var dt=require('./myfirst');
const server=http.createServer((req,res)=>{
    res.write(dt.myDate());
    res.end();
})
server.listen(5000,(req,res)=>{
    console.log("server listening on port 5000!!!");
})