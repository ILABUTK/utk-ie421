var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "ilab.engr.utk.edu",
  user: "xli27",
  password: "xli27@421"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //res.send('MySQL::Connected!');
  });

/* GET users listing. */
router.get('/student', function(req, res, next) {
	con.query("SELECT * FROM xli27.student", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

/* GET users listing. */
router.get('/doctors', function(req, res, next) {
  con.query("SELECT * FROM xli27.q2_doctor", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

/* Post student data. */
router.post('/student', function(req, res, next) {
  var sql = con.query("INSERT INTO xli27.student set ? ", req.body, function (err, result, fields) {
    if (err) throw err;
    
    console.log(sql);
    // res.send(result);
    res.json({"status": "OK"}); // your own
  });
});

/*GET customers*/ 
router.get('/customer', function(req, res, next) {
  con.query("SELECT * FROM xli27.customer", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

module.exports = router;

