
var express= require('express')
var app = express()

//Define middleware

//req, res, next()

function login(req, res, next){
    console.log("middleware 1")
    next()
}

app.use(show)

app.use(login)



function show(req, res, next){
    console.log('Middleware 2')
    next()
}



app.get('/',function(req, res){

    res.send("welcome to the middleware demo")

})

app.listen(3000)


