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


app.delete('/about',function(req,rep){
rep.send('this is delete response on  page');
});

var students= {
    1 :'Mark',
    2: 'Swapnil',
    3: 'Kavya' 
}
app.get('/student/:id',function(req,rep){
rep.send('you are requested to students id:'+ students[req.params.id]);
});

app.listen(3000, function()
{
    console.log('Server is live on 3000');
});

