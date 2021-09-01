const fs=require('fs')
fs.open('textfile.txt', 'w', function(err,data){
    // Some options are given for file mode as the second argument in the open function
    if(err){
        throw err;
    }
    console.log("Some temporary text")
})

fs.writeFile('textfile.txt', 'Is written successfully', (err,data)=>{
    if(err){
        console.log('Some glitch inside')
    }
    console.log('Is this done')
})

fs.appendFile('textfile.txt', '. Appedned successfully',(err, data)=>{
    if(err){
        console.log('Some glitch inside')
    }
    console.log('Append successfull')
})

// fs.unlink('textfile.txt', (err,data)=>{
//     if(err){
//         console.log('Some glitch inside');
//     }
//     console.log('Delete successfull');
// })

fs.rename('input2.txt', 'renamedfile2.txt', (err,data)=>{
    if(err)
    {
        console.log(err);
    }
    console.log('Rename was successfull.')
})