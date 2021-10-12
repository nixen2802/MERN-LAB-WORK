var MClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/"
MClient.connect(url,(err,db)=>{
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("Connection Established!!");
        var dbase=db.db('Company');
        dbase.collection('Employee').find({}).toArray((err,result)=>{
            if(err)
            {
                throw err;
            }
            else
            {
                console.log("The documents in the collection are : ");
                console.log(result);
                db.close();
            }
        })
    }
})