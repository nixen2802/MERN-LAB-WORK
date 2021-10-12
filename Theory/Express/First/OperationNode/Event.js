var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('clcked', function(){
    console.log('happens');
    //console.log('hello')

});

eventEmitter.emit('clcked')