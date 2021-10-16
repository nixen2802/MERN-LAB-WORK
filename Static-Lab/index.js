const express=require('express');
const app=express();
app.use(express.static('public'));
app.use(express.static('static'));
app.get('/',(req,res)=>{
    res.end("Hello!!");
})
app.get('/stat',(req,res)=>{
    res.sendFile("index2.html", {root: "public"});
})
app.get('/json',(req,res)=>{
    res.sendFile("Employees.json",{root: "static"});
})
app.listen(5000,()=>{
    console.log("Server listening on port 5000!!!!");
})