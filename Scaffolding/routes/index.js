var express = require('express');
var router = express.Router();
var MClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/"
var results=[]
/* GET home page. */
router.get('/', function(req, res, next) {
  MClient.connect(url,(err,db)=>{
    if(err)
    {
        throw err;
    }
    else
    {
        var dbase=db.db('EXP2');
        dbase.collection('Users').find({}).toArray((err,result)=>{
            if(err)
            {
                throw err;
            }
            else
            {
                results.push(result);
                res.render('index', { title: 'Express', "results": results });
                db.close();
            }
        })
    }
})
});


module.exports = router;
