const mysql = require("mysql");

// 创建链接对象
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test1234",
  port: "3306",
  database: "myblog",
  insecureAuth : true
});

// 开始连接
con.connect();

// 执行sql语句
const sql = "show tables";
con.query(sql, (error, result) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(result);
});

// 关闭连接
con.end();