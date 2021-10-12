var fs = require("fs");
var file = "input.txt";

fs.exists(file,function(exists){
    if (exists){
        fs.stat(file,function(err,stat){
            if(err) throw err;
            if (stat.isFile()){
                
                fs.readFile(file, "utf8", function(err,data)
                {
                    if (err) throw err;
                    console.log(data);
                });
            }
            else {
                throw new Error("This location contains not a file");
                }
            
        });
    }
    else {
        throw new Error("404: file not found");
        }
});