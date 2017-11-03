let db = require('./configs/db');//获取数据库连接信息
let mysql      = require('mysql');
var pool = mysql.createPool(db);
//导出查询相关
var query=function(sql,callback){
  pool.getConnection(function(err,conn){
    if(err){
      callback(err,null,null);
    }else{
      conn.query(sql,function(qerr,vals,fields){
        //释放连接
        conn.release();
        //事件驱动回调
        callback(qerr,vals,fields);
      });
    }
  });
};


var  sql = 'SELECT goodsCustomNumber,goodsName,goodsTypeID,goodsTypeName FROM goods limit 20';

var result=query(sql,function(err,rows,fields){
  console.log(rows);
  //其他信息
});
console.log(result);
//module.exports=query;
