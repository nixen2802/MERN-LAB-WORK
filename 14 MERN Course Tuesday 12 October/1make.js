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
        var dbase=db.db('Company');
        dbase.createCollection('Employee',(err,res)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("Collection created!!!");
                console.log(dbase.databaseName);
            }
            db.close();
        })
    }
})