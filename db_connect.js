var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "payoda@123",
  database: "nodejs"
});

module.exports = connection;