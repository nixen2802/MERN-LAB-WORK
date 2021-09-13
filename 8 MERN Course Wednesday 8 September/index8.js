// const fs=require('fs')
// const readline=require('readline')
// const readInterface = readline.createInterface({
//     input: fs.createReadStream('text.txt'),
//     output: process.stdout
// });
// readInterface.on('\n', function(line) {
//     console.log(line);
// });

const line=require('line-reader')
line.eachLine('text.txt',(line)=>{
    console.log(line);
})