// // Application level middleware
// const express=require('express');
// const app=express();
// const path=require('path');
// const publicpath=path.join(__dirname,"./public");
// app.use(express.static(publicpath));
// app.get("/",(req,res,next)=>{
//     res.sendFile(path.join(__dirname, './public/index.html'));
//     next();
// })
// app.get("/",(req,res,next)=>{
//     console.log("Next middleware called successfully!!!");
// })
// app.post("/",(req,res,next)=>{
//     console.log("Data stored in the database successfully!!!!");
// })
// app.listen(5000,(req,res)=>{
//     console.log("Server listening on port 5000!!!");
// })

const express = require('express')
const app = express()
//  req => middleware => res
const path=require('path');
const publicpath=path.join(__dirname,"./public");
const logger=(req,res,next)=>{
  console.log("Method: ",req.method,"  URL: ",req.url,"  Year: ",new Date().getFullYear())
  next()
}
app.get('/', logger,(req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})
app.post('/',logger,(req,res)=>{
    console.log("Data stored in the database successfully!!!");
})
app.listen(5000,()=>{
  console.log('Server is listening on port 5000!!!!');
})
