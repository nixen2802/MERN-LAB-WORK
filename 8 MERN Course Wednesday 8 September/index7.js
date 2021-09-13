const fs=require('fs');
fs.readFile('text.txt',(err,data)=>{
    const d=data.toString().split('\n');
    console.log(`Number of lines in the text.txt is : ${d.length}`);
})