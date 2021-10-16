var express = require('express');
var router = express.Router();
var Mclient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';
router.get('/',function(req,res,next){
    res.render('signup');
})
router.post('/', function (req, res) {
    Mclient.connect(url,(err,db)=>{
        if(err)
        {
            console.log(err);
            throw err;
        }
        else
        {
            console.log("Connection Established!!")
            var obj=[{username: req.body.username, password: req.body.password}];
            var dbase=db.db('EXP2');
            dbase.collection('users').insert(obj,(err,res)=>{
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
    res.render('signin');
});
module.exports = router;
