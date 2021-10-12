//with parameter

var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('clicked', function(button){
    console.log(button + ' is happens');

});

eventEmitter.emit('clicked','button 1')