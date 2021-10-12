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
//         console.log("Connection Established!!")
//         var obj={name: "Keish", age: "23", address:"Ghatkopar"};
//         var dbase=db.db('Company');
//         dbase.collection('Employee').insertOne(obj,(err,res)=>{
//             if(err)
//             {
//                 console.log(err);
//             }
//             else
//             {
//                 console.log("Collection inserted using insertone!!!");
//                 db.close();
//             }
//         })
//     }
// })

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
        var obj=[{name: "Triven", age: "31", address:"Vidyavihar"},{name: "Robert", age: "18", address:"US"},{name: "Kannady", age: "21", address:"Paris"}];
        var dbase=db.db('Company');
        dbase.collection('Employee').insert(obj,(err,res)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("Collection inserted using insert!!!");
                db.close();
            }
        })
    }
})