let express = require('express');
let goods = require('../controls/goods');
let api = require('../api');


let router = express.Router();

// goods
router.get(api.goodsList, goods.fetchAll);



module.exports = router;
