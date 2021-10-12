var express = require('express');  
var app = express();  
app.use(express.static('public'));  
  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
app.get('/get1', function (req, res) {  
response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
app.listen(8000, function () {  
    console.log("Example of get method");  
  })  