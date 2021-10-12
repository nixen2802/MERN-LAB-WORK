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
        var query={age: /^2/};
        dbase.collection('Employee').find(query).toArray((err,result)=>{
            if(err)
            {
                throw err;
            }
            else
            {
                console.log("The documents in the collection matching regex are  : ");
                console.log(result);
                db.close();
            }
        })
    }
})