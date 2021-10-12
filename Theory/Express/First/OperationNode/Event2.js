//showing inheritance and usage of Util
var events = require('events');
var util = require('util');
//create object of class
var Students = function(name){
    this.name = name;
}
//Two arguments class which inherits and object of eventEmiiter

util.inherits(Students, events.EventEmitter);

var max  =new Students('max');
max.on('scored', function(marks){
    console.log(max.name + ' Score '+ marks + ' marks');

});

max.emit('scored',95);