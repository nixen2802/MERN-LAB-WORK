//methods ON() EMIT() and addListener()
const eventobj=require('events')
var emitter=new eventobj.EventEmitter();
emitter.on('click', function(){
    console.log("Something is clicked.");
})
emitter.emit('click');