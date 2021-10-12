var express = require('express')
var app = express()

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  console.log('hi')
  next()
}


app.use(requestTime)
var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
  
  app.use(myLogger)


app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})


app.listen(3000)