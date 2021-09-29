// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/"
// MongoClient.connect(url,(err,db)=>{
//     if(err)
//     {
//         throw err;
//     }
//     var dbase=db.db('mern2');
//     dbase.collection('mernfirst').find({}).toArray((err,result)=>{
//         if(err)
//         {
//             throw err;
//         }
//         else
//         {
//             console.log(result);
//             db.close();
//         }
//     })
// })

var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/"
MongoClient.connect(url,(err,db)=>{
    if(err)
    {
        throw err;
    }
    var dbase=db.db('mern2');
    var query={age: /^2/}
    dbase.collection('mernfirst').find(query).skip(2).toArray((err,result)=>{
        if(err)
        {
            throw err;
        }
        else
        {
            console.log(result);
            db.close();
        }
    })
})