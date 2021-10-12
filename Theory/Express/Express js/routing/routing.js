var express = require('express');  
var app = express();  

app.get('/', function (req, res) {  
   console.log("Got a GET request for the homepage");  
   res.send('Welcome to MEAN satck');  
})  
app.get('/abc', function (req, res) {  
   console.log("Got a POST request for the homepage");  
   res.send('Nature is God Gift ');  
})  
app.get('/del', function (req, res) {  
   console.log("Got a DELETE request for /del_student");  
   res.send('Studnet deleted');  
});  app.listen(8000)
console.log("Welcome");