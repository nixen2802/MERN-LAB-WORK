const express=require('express');
const morgan=require('morgan');
const app=express();
app.use(morgan('tiny'));
app.get('/',(req,res)=>{
    res.send('GET request!!!');
})
app.post('/',(req,res)=>{
    res.send('POST request!!!');
})
app.delete('/',(req,res)=>{
    res.send('DELETE request!!!');
})
app.listen(5000,()=>{
    console.log("Server listening on port 5000!!!!");
})