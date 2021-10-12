var express = require('express');  
var app = express();  

var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  

var urlencodedParser = bodyParser.urlencoded({ extended: false })  


app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  


app.post('/post1', urlencodedParser, function (req, res) {  
   // Prepare output in JSON format  
   response = {  
       first_name:req.body.first_name,  
       last_name:req.body.last_name  
   };  
   //console.log(response);  
   res.end(JSON.stringify(response));  
})  
 app.listen(8000, function () {  
   console.log("welcome");
})  