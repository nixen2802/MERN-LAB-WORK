const express=require('express');
const app=express();
const bodyParser=require('body-parser')
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const courses=[
    {
        id:1,
        name: "Course1",
        cost: 4000
    },
    {
        id:2,
        name: "Course2",
        cost: 2000
    },
    {
        id:3,
        name: "Course3",
        cost: 5000
    },
    {
        id:4,
        name: "Course4",
        cost: 12000
    }
]
app.get('/',(req,res)=>{
      res.send("Hello world!!!");
})
app.get('/api/courses',(req,res)=>{
    res.send(courses);
})
app.get('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course)
    {
        res.send("Course not found!!!");
    }
    else
    {
        res.send(course);
    }
})
app.post('/api/courses',(req,res)=>{
    console.log(req.body);
    if(!req.body.name || req.body.name.length<3)
    {
        res.status(400).send("Name is required and length must be greater than 3!!!");
    }
    else
    {
        const course={
            id: courses.length+1,
            name: req.body.name,
            cost: req.body.cost
        }
        courses.push(course);
        res.send(course);
    }
})
app.listen(3000,()=>{
    console.log("Server listening on port 3000!!!");
})