var fs = require('fs');

var stream = fs.readFileSync('text1.txt', 'utf8');

console.log(stream);
 
fs.writeFileSync('text22.txt',stream);

var fileStream = fs.readFile('text1.txt', 'utf8',function(err , data){
        if (err)
       return console.log(err);

       console.log(data);
    });

console.log("hello");