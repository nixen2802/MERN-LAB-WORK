const express=require('express');
const app=express()
const path=require('path');
app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname, './public/index3.html'));
})
app.post('/',(req,res,next)=>{
    next(new Error("You have posted something that is errorneous!!!"));
})
app.use((err,req,res,next)=>{
    res.status(404).send(err.message);
})
app.listen(5000,()=>{
    console.log("Server listening on port 5000!!!");
})