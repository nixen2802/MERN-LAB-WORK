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
        console.log("Connection Established!!");
        var query={name: "Nayan"};
        var dbase=db.db('mern2');
        dbase.collection('mernfirst').deleteOne(query,(err,result)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("Collection removed!!!");
                db.close();
            }
        })
    }
})