// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {
// res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     }  
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// // 1

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "USER",
//   password: "ROOT"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });


// // 2

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "USER",
//   password: "ROOT",
//   database: "mydb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE USERS (User VARCHAR(255), email VARCHAR(255), location VARCHAR(255), pincode int(6), phone int(15))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


// // 3

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "USER",
//   password: "ROOT",
//   database: "mydb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE LOGIN (id INT AUTO_INCREMENT PRIMARY KEY, User VARCHAR(255), password VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


//4

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "USER",
  password: "ROOT",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO LOGIN (User, password) VALUES ('admin', 'Admin')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});