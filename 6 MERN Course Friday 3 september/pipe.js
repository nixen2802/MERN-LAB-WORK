const fs=require('fs');
const reader=fs.createReadStream('data.txt');
const writer=fs.createWriteStream('data2.txt');
reader.pipe(writer);