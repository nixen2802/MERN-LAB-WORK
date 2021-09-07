const express=require('express');
const app=express();
const path=require("path");
const staticpath=path.join(__dirname,"./public");
app.use(express.static(staticpath));
app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'));
})
app.listen(5000,()=>{
    console.log("Server listening on port 5000!!!");
})