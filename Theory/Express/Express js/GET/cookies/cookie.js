var express = require('express');  
var cookieParser = require('cookie-parser');  
var app = express();  
app.use(cookieParser());  
app.get('/cookieset',function(req, res){  
res.cookie('cookie_name', 'cookie_value');  
res.cookie('company', 'KJSCE');  
res.cookie('name', 'swapnil');  
  
res.status(200).send('Cookie is set');  
});  
app.get('/cookieget', function(req, res) {  
  res.status(200).send(req.cookies);  
});  
app.get('/', function (req, res) {  
  res.status(200).send('Welcome to KJSCE!');  
});  
 app.listen(8000)  
  