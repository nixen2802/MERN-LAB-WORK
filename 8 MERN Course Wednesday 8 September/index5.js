const e = require('express');
const fs=require('fs');
const prompt=require('prompt-sync')();
var file=prompt("Enter name of the file/folder : ");
flag=0;
fs.access(file, fs.constants.X_OK, (err)=>{
    if(err)
    {
        console.log("File doesnt exists!!!");
        flag=1;
    }
    else
    {
        console.log("File can be executed!!!");
    }
});
fs.access(file, fs.constants.R_OK, (err)=>{
    if(!err)
    {
        console.log("File can be Readed!!!");
    }
});
fs.access(file, fs.constants.W_OK, (err)=>{
    if(!err)
    {
        console.log("File can be edited!!!");
    }
});