# Readme:: HOWTO STEPS

https://nodejs.org/en/

https://expressjs.com/en/starter/installing.html
$ npm install express --save

https://expressjs.com/en/starter/generator.html
$ npm install express-generator -g
$ express --view=pug myapp


$npm install
$npm start


$npm install -g nodemon
$nodemon

- FE:: Put front end code in the /public folder

https://www.w3schools.com/nodejs/nodejs_mysql.asp

# sql script

CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `utid` int(11) NOT NULL,
  `student_name` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(35) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gpa` decimal(10,0) DEFAULT NULL,
  `photo` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'images/profile.jpg',
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_name` (`student_name`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
