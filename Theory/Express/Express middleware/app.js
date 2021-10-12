var express = require('express')
var app = express()


var myLogin=function(req,res,next){
    
    console.log('Welcome')
    next()
}

app.use(myLogin)


app.get('/', function(req,res){

    res.send('hello world')
})

app.listen(3000)
