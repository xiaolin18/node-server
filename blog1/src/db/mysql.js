const mysql = require("mysql");
const { MYSQL_CONF } = require("../conf/db");

// 创建链接对象
const con = mysql.createConnection(MYSQL_CONF);

// 链接
con.connect();

// 统一执行sql的函数
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (error, result) => {
      if (error) {
        return reject(error);
      }
      return resolve(result);
    });
  });
  return promise;
}
// 关闭
// con.end();

module.exports = {
  exec
};