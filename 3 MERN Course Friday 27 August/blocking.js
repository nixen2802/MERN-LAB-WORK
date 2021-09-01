const fs=require('fs');
console.log('Started');
var data=fs.readFileSync('input.txt')
console.log(data.toString());
console.log('Ended');