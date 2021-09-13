const fs=require('fs');
const prompt=require('prompt-sync')();
var file=prompt("Enter name of the file/folder : ");
fs.access(file,(err)=>{
    if(err)
    {
        console.log(`${file} doesn't exists!!!`);
    }
    else    {
        console.log(`${file} exists!!!`);
    }
});