const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const add=require('./add');
const sub=require('./sub');
const mul=require('./mul');
const div=require('./div');
const sinval=require('./sin');
const cosval=require('./cos');
const tanval=require('./tan');
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/example', (req, res) => {
    if(req.body.expr[1]=='+')
    {
        var temp=add(Number(req.body.expr[0]),Number(req.body.expr[2]));
        res.send(`Answer : ${temp}`);
    }
    else if(req.body.expr[1]=='-')
    {
        var temp=sub(Number(req.body.expr[0]),Number(req.body.expr[2]));
        res.send(`Answer : ${temp}`);
    }
    else if(req.body.expr[1]=='*')
    {
        var temp=mul(Number(req.body.expr[0]),Number(req.body.expr[2]));
        res.send(`Answer : ${temp}`);
    }
    else if(req.body.expr[1]=='/')
    {
        var temp=div(Number(req.body.expr[0]),Number(req.body.expr[2]));
        res.send(`Answer : ${temp}`);
    }
    else if(req.body.expr.slice(0,3)=='sin')
    {
        var temp=sinval(Number(req.body.expr.slice(3,5)));
        res.send(`Answer : ${temp}`);
    }
    else if(req.body.expr.slice(0,3)=='cos')
    {
        var temp=cosval(Number(req.body.expr.slice(3,5)));
        res.send(`Answer : ${temp}`);
    }
    else if(req.body.expr.slice(0,3)=='tan')
    {
        var temp=tanval(Number(req.body.expr.slice(3,5)));
        res.send(`Answer : ${temp}`);
    }
    else
    {
        res.send("Answer : Undefined");
    }
});

app.listen(5000, () => {
  console.log(`Server running on 5000!!`);
});