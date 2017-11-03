let dbConfig = require('./dbConfig');//获取数据库连接信息
let mysql      = require('mysql');
let pool = mysql.createPool(dbConfig);

/*function query(sql,vals,callback) {
  pool.getConnection(function (err, conn) {
    if (err) {
      callback(err, null, null);
    } else {
      conn.query(sql,vals, function (qerr, fields) {
        //释放连接
        conn.release();
        //事件驱动回调

        callback(qerr, fields);
      });
    }
  });
}*/



module.exports = {
  query(sql,vals,callback) {
   pool.getConnection((err, conn) => {
    if (err) {
      callback(err, null);
    } else {
      conn.query(sql, vals,(err, rows) => {
        //释放连接
        conn.release();
        //事件驱动回调
        callback(err, rows);
      });
    }
  });
},

// json格式
  writeJson(res, code = 200, msg = 'ok', data = null) {
    let obj = {code, msg, data};

    if (!data) {
      delete obj.data;
    }
    res.send(obj);
  },
};

