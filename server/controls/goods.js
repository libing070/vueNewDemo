let dbPool = require('../configs/dbPool');
let sql=require('../sql/goodsSql');

module.exports = {
  queryGoodsLimit20(){
    var result = dbPool.query(sql.queryGoodsLimit20, ['goods'], (err, rows) => {
      console.log(rows);
    });
  }

}



