var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'}); //调用模板引擎，并将产生的页面直接返回给客户端
});

module.exports = router;
