var express = require('express');
var router = express.Router();
var url = require('url')
var util = require('util')

/* GET users listing. */


router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.all('/:username', function (req, res, next) {
  console.log('object');
  next();//交由下一个路由去处理，类似中间件
})

router.get('/:username', function (req, res, next) {
  //如果 zdd?a=a&a=b  解析出来的query为 { a: [ 'a', 'b' ] }
  res.send('user:' + req.params.username + util.inspect(url.parse(req.url, true).query));
});

module.exports = router;
