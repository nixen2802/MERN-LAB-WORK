var express = require('express');
 var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req,rep){
rep.sendFile(__dirname + '/index.html');
});

app.get('/about', function(req,rep){
    rep.sendFile(__dirname + '/about.html');
    });
    
var students= {
    1 :'Mark',
    2: 'Swapnil',
    3: 'Kavya' 
}
app.get('/student/:id',function(req,rep){

rep.render('student',{name:students[req.params.id], id:req.params.id});
//rep.send('you are requested to students id:'+ students[req.params.id]);
});

app.listen(3000, function()
{
    console.log('Server is live on 3000');
});

