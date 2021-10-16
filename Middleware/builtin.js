// Express.static 
// const express=require('express');
// const app=express();
// const path=require('path'); 
// app.use(express.static(path.join(__dirname,'public2'))) 
// app.get('/', function (req, res, next) {
//     res.render('index.html');
// })
// app.listen(5000,()=>{
//     console.log("Server listening on port 5000!!!!");
// });

// Express.json
// const express=require('express');
// const app=express();
// app.use(express.json());
// app.post('/post',(req,res)=>{
//     res.send("Hiii "+req.body.name+" You are currently in "+req.body.year+" year");
//     res.end();
// })
// app.listen(5000,()=>{
//     console.log("Server listening on port 5000!!!!");
// })

// Express.urlencoded
const express=require('express');
const app=express();
app.use(express.urlencoded({extended:false}));
const path=require('path');
app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname, './public3/temp.html'));
})
app.post("/", (req, res) => {
    res.send(req.body)
})
app.listen(5000,()=>{
	console.log("Server listening on port 5000!!!!");
});

