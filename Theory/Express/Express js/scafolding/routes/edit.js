var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.send("respone with hello");
    res.render('form');

});


module.exports = router;
