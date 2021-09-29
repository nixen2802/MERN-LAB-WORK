const http=require('http');
var Mongoclient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';
const server=http.createServer((req,res)=>{
    var str="";
    Mongoclient.connect(url,(err,db)=>{
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
                res.writeHead(200,{'Content-Type': 'text/json'});
                res.end(JSON.stringify(result));
                db.close();
            }
        })
    })
})
server.listen(5000,(req,res)=>{
    console.log("Server listening on port 5000");
})