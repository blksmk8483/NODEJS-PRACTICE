const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  database: "node-complete",
  password: "1Drummer@1",
  port: "3306",
});

module.exports = pool.promise();
