// var Mclient=require('mongodb').MongoClient;
// var url='mongodb://localhost:27017/';
// Mclient.connect(url,(err,db)=>{
//     if(err)
//     {
//         console.log(err);
//         throw err;
//     }
//     else
//     {
//         console.log("Connection Established!!");
//         var query={name: "Krish"};
//         var dbase=db.db('Company');
//         dbase.collection('Employee').deleteOne(query,(err,result)=>{
//             if(err)
//             {
//                 console.log(err);
//             }
//             else
//             {
//                 console.log("Document removed!!!");
//             }
//         })
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

// var Mclient=require('mongodb').MongoClient;
// var url='mongodb://localhost:27017/';
// Mclient.connect(url,(err,db)=>{
//     if(err)
//     {
//         console.log(err);
//         throw err;
//     }
//     else
//     {
//         console.log("Connection Established!!");
//         var query={age: /^2/};
//         var dbase=db.db('Company');
//         dbase.collection('Employee').deleteMany(query,(err,result)=>{
//             if(err)
//             {
//                 console.log(err);
//             }
//             else
//             {
//                 console.log("Document removed!!!");
//             }
//         })
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
        dbase.collection('Employee').drop((err,result)=>{
            if(err)
            {
                throw err;
            }
            else
            {
                console.log("Collection removed!!");
                db.close();
            }
        })
    }
})