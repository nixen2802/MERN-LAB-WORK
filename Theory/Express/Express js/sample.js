var express= require('express')

var first = express();

first.get('/',function(req,res){
    res.send('Welcome to FSDL')
})

console.log('hi')
first.listen(8080);