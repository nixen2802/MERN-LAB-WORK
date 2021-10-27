// const express=require('express');
// const app=express();
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// const mongoose=require('mongoose');
// app.use(express.urlencoded({extended:false}));
// app.use(express.json())
// mongoose.connect('mongodb://localhost:27017/EXP4');
// const db=mongoose.connection;
// var Student=require('./1create');
// const path=require('path');
// app.get('/:id',(req,res)=>{
//     Student.find({name: req.params.id},(err, data)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         else if(data.length==0)
//         {
//             res.send("Invalid name!!!");
//         }
//         else
//         {
//             var str;
//             str=[data[0].roll_no,data[0].name,data[0].division,data[0].year_of_study,data[0].branch,data[0].cgpa]
//             res.render(path.join(__dirname, '/public', 'update.html'), {stri: str});
//         }
//     });
// })
// app.post('/:id',(req,res)=>{
//     Student.updateOne({name:req.params.id},{cgpa:Number(req.body.cgpa)},(err,data)=>{
//         if(err) 
//         {
//             console.log(err);
//         } 
//         else 
//         {
//             res.send("CGPA updated successfully!!!!");
//         }
//     });
// })
// app.listen(7000,(req,res)=>{
//     console.log("Server listening on port 7000!!!");
// })

const express=require('express');
const app=express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
const mongoose=require('mongoose');
app.use(express.urlencoded({extended:false}));
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/EXP4');
const db=mongoose.connection;
var Student=require('./1create');
const path=require('path');
app.get('/:id',(req,res)=>{
    Student.find({division: req.params.id},(err, data)=>{
        if(err)
        {
            console.log(err);
        }
        else if(data.length==0)
        {
            res.send("Invalid division!!!");
        }
        else
        {
            var str=[];
            var temp;
            for(var i=0;i<data.length;i++)
            {
                temp=[data[i].roll_no,data[i].name,data[i].division,data[i].year_of_study,data[i].branch,data[i].cgpa]
                str.push(temp);
            }
            res.render(path.join(__dirname, '/public', 'update.html'), {stri: str});
        }
    });
})
app.post('/:id',(req,res)=>{
    Student.updateMany({divsion:req.params.id},{year_of_study:Number(req.body.year_of_study)},(err,data)=>{
        if(err) 
        {
            console.log(err);
        } 
        else 
        {
            res.send("Updations successful!!!!");
        }
    });
})
app.listen(7000,(req,res)=>{
    console.log("Server listening on port 7000!!!");
})