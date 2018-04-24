var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "ilab.engr.utk.edu",
  user: "xli27",
  password: "xli27@421"
});

con.connect(function(err) {
    if (err) {
      // throw err;
    }
    console.log("Connected!");
    //res.send('MySQL::Connected!');
  });

/* GET users listing. */
router.get('/student', function(req, res, next) {
	con.query("SELECT * FROM xli27.student order by utid", function (err, result, fields) {
    if (err) {
      // throw err;
    }
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

/* GET users listing. */
router.get('/doctors', function(req, res, next) {
  con.query("SELECT * FROM xli27.q2_doctor", function (err, result, fields) {
    if (err) {
      // throw err;
    }
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

/* Post student data. */
router.post('/student', function(req, res, next) {
  var sql = con.query("INSERT INTO xli27.student set ? ", req.body, function (err, result, fields) {
    if (err) {
      //throw err;
      res.send(400); // send an error 
    } else {      
      console.log(sql);
      // res.send(result);
      res.json({"status": "OK"}); // your own code
    }
  });
});

/* Search */
router.post('/search_stu', function(req, res, next) {  
  var stu = '%' + (req.body.student_name) + '%'; // add % 
  // console.log("stu: " + stu);
  var sql = con.query("SELECT * FROM xli27.student where student_name like ? ", stu, function (err, result, fields) {
    if (err) {
      // throw err;
    }
    
    console.log(sql);
    res.send(result);
  });
});

/* login */
router.post('/login', function(req, res, next) {
  var utid =  req.body.utid;
  var name =  req.body.student_name;
  var stmt =  "SELECT * FROM xli27.student where  utid =  " + utid + " and student_name='" + name + "'";
  var sql = con.query( stmt, function (err, result, fields) {
    if (err) {
      // throw err;
      res.sendStatus(401); // send an error 
    } else{
      console.log(sql);
      
      if (result.length >0) {
        if (result)
          res.send(result);
        else
          res.sendStatus(401);
        // res.sendStatus(200);
      } else {
        res.sendStatus(401);
      }
    }    
    // res.send(result);
  });
});

/*GET customers*/ 
router.get('/customer', function(req, res, next) {
  con.query("SELECT * FROM xli27.customer", function (err, result, fields) {
    if (err) {
      // throw err;
    }
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

module.exports = router;

