const express=require('express');
const app=express();
const port=8000;
app.get('/',(req,res)=>{
    res.send("<h2>Hello World!!</h2>");
    res.end();
})
app.get('/login',(req,res)=>{
    res.send("<h2>Login Page!!</h2>");
    res.end();
})
app.get('/logout',(req,res)=>{
    res.send("<h2>Logout Page!!</h2>");
    res.end();
})
app.get('/Register',(req,res)=>{
    res.send("<h2>Register Page!!</h2>");
    res.end();
})
app.get('/about',(req,res)=>{
    res.send("<h2>About Us Page!!</h2>");
    res.end();
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}!!!`);
})
