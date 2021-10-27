const express=require('express')
const app=express()
const mongoose=require('mongoose');
app.use(express.urlencoded({extended:false}));
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/EXP4');
const db=mongoose.connection;
var Student=require('./1create');
app.get('/',(req,res)=>{
    Student.find((err, data)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            var str=" ";
            for(var i=0;i<data.length;i++)
            {
                str=str+"<br>{<br>&nbsp; &nbsp;&nbsp; &nbsp;roll_no: "+data[i].roll_no+",<br>&nbsp; &nbsp;&nbsp; &nbsp;name: "+data[i].name+",<br>&nbsp; &nbsp;&nbsp; &nbsp;division: "+data[i].division+",<br>&nbsp; &nbsp;&nbsp; &nbsp;year_of_study: "+data[i].year_of_study+",<br>&nbsp; &nbsp;&nbsp; &nbsp;branch: "+data[i].branch+",<br>&nbsp; &nbsp;&nbsp; &nbsp;cgpa: "+data[i].cgpa+"<br>},";
            }
            res.send(str);
        }
    }); 
})
app.get('/:id',(req,res)=>{
    Student.find({roll_no: req.params.id},(err, data)=>{
        if(err)
        {
            console.log(err);
        }
        else if(data.length==0)
        {
            res.send("Invalid roll number!!!");
        }
        else
        {
            var str;
            str="<br>{<br>&nbsp; &nbsp;&nbsp; &nbsp;roll_no: "+data[0].roll_no+",<br>&nbsp; &nbsp;&nbsp; &nbsp;name: "+data[0].name+",<br>&nbsp; &nbsp;&nbsp; &nbsp;division: "+data[0].division+",<br>&nbsp; &nbsp;&nbsp; &nbsp;year_of_study: "+data[0].year_of_study+",<br>&nbsp; &nbsp;&nbsp; &nbsp;branch: "+data[0].branch+",<br>&nbsp; &nbsp;&nbsp; &nbsp;cgpa: "+data[0].cgpa+"<br>}";
            res.send(str);
        }
    });
})
app.listen(7000,(req,res)=>{
    console.log("Server listening on port 7000!!!");
})