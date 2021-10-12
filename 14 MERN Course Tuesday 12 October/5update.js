// var MClient=require('mongodb').MongoClient;
// var url='mongodb://localhost:27017/';
// MClient.connect(url,(err,db)=>{
//     if(err)
//     {
//         console.log(err);
//         throw err;
//     }
//     else
//     {
//         console.log("Connection Established!!")
//         var dbase=db.db('Company');
//         dbase.collection('Employee').updateOne({
//             "name": "Keish"
//         }, 
//         {
//             $set: 
//             {
//                 "name": "Krish"
//             }
//         });
//         console.log("Document updated!!!")
//         dbase.collection('Employee').find({}).toArray((err,result)=>{
//             if(err)
//             {
//                 throw err;
//             }
//             else
//             {
//                 console.log("The documents in the collection are : ");
//                 console.log(result);
//                 db.close();
//             }
//         })
//     }
// })


var MClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';
MClient.connect(url,(err,db)=>{
    if(err)
    {
        console.log(err);
        throw err;
    }
    else
    {
        console.log("Connection Established!!")
        var dbase=db.db('Company');
        dbase.collection('Employee').updateMany({ 
            age: /^2/ 
        },
        {
            $set: 
            {
                "address": "Somaiya"
            }
        });
        console.log("Document updated!!!")
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