var fs = require('fs');
//to create directory
fs.mkdirSync('demo');
// To remove directory
fs.rmdirSync('demo');
 // use call back function
 
 fs.mkdir('demo',function() {
    fs.writeFile('./demo/file.txt',"hello welcome to class", function(err, data){
        if(err) console.log('error',err)       
    });
});