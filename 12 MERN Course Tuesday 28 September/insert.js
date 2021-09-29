var Mclient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';
Mclient.connect(url,(err,db)=>{
    if(err)
    {
        console.log(err);
        throw err;
    }
    else
    {
        console.log("Connection Established!!")
        var obj=[{name: "Keish", age: "23", address:"Ghatkopar"},{name: "Triven", age: "25", address:"Andheri"},{name: "Kater", age: "27", address:"Bandra"}];
        var dbase=db.db('mern2');
        dbase.collection('mernfirst').insertMany(obj,(err,res)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("Collection created!!!");
                db.close();
            }
        })
    }
})