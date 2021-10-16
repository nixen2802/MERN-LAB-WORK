var express = require('express');
var router = express.Router();
var Mclient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';
router.get('/',function(req,res,next){
    res.render('signin');
})
router.post('/', function (req, res) {
    Mclient.connect(url,(err,db)=>{
        if(err)
        {
            throw err;
        }
        else
        {
            console.log("Connection Established!!");
            var dbase=db.db('EXP2');
            dbase.collection('users').find({}).toArray((err,result)=>{
                if(err)
                {
                    throw err;
                }
                else
                {
                    var i=0;
                    var flag=0;
                    for(i=0;i<result.length;i++)
                    {
                        if(result[i].username==req.body.username)
                        {
                            flag=1;
                            if(result[i].password==req.body.password)
                            {
                                res.render('showgroceries');
                            }
                        }
                    }
                    if(flag==0)
                    {
                        res.render('signin');
                    }
                    db.close();
                }
            })
        }
    })
})
module.exports = router;