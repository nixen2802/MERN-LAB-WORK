const express=require('express')
const app=express()
const mongoose=require('mongoose');
app.use(express.urlencoded({extended:false}));
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/EXP4');
const db=mongoose.connection;
var StudentSchema=mongoose.Schema({
    roll_no: Number,
    name: String,
    division: String,
    year_of_study: Number,
    branch: String,
    cgpa: Number
})
const path=require('path');
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/create.html'));
})
app.post('/',(req,res)=>{
    var Student=mongoose.model('EXP4',StudentSchema,'Students')
    var s=new Student({
        roll_no: req.body.roll_no,
        name: req.body.name,
        division: req.body.division,
        year_of_study: req.body.year_of_study,
        branch: req.body.branch,
        cgpa: req.body.cgpa
    })
    s.save((err,stu)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Insertion successfull!!!");
            res.send("Insertion successfull!!!");
            res.end()
        }
    })
})
app.listen(5000,()=>{
    console.log('Server is listening on port 5000!!!!');
})
module.exports=mongoose.model('EXP4',StudentSchema,'Students');