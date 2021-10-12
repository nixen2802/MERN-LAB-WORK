var express = require('express');  
var app=express();  
app.get('/get2', function (req, res) {  
res.send('<p>Username: ' + req.query['first_name']+'</p><p>Lastname: '+req.query['last_name']+'</p>');  
})  
 app.listen(8000, function () {  
  
})  