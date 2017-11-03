let db = require('./configs/db');//获取数据库连接信息
let mysql      = require('mysql');
let  connection = mysql.createConnection(db);


/*connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});*/
var  sql = 'SELECT goodsCustomNumber,goodsName,goodsTypeID,goodsTypeName FROM goods limit 20';
//查
connection.query(sql,function (err, result) {
  if(err){
    console.log('[SELECT ERROR] - ',err.message);
    return;
  }

  console.log('--------------------------SELECT----------------------------');
  console.log(result[0].goodsName);
  console.log('------------------------------------------------------------\n\n');
});

connection.end();
