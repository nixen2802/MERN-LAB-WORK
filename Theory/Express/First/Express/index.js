//var express = require("express");
var express = require('express');
 
var app = express();
//GET
//POST
//PUT
//DELETE

app.get('/', function(req,rep){
rep.send('this is home page');
});

app.get('/home',function(req,rep){
rep.send('this is home page');
});

app.delete('/about',function(req,rep){
rep.send('this is delete response on  page');
});

app.get('/contact',function(req,rep){
rep.send('this is home page');
});

app.listen(3000, function()
{
    console.log('Server is live on 3000');
});

