const express=require('express');
const app=express();
const router=express.Router();
const path=require('path');
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname, './public/index2.html'));
})
router.post('/',(req,res,next)=>{
    console.log("Data stored on the database successfully!!!!");
    res.send("Done");
    next();
})
app.use('/', router)
app.listen(5000,()=>{
    console.log("Server listening on port 5000!!!!");
});