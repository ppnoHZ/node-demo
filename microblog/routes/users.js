var express = require('express');
var router = express.Router();

/* GET users listing. */


router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.all('/:username', function (req, res, next) {
  console.log('object');
  next();//交由下一个路由去处理，类似中间件
})

router.get('/:username', function (req, res, next) {
  res.send('user:' + req.params.username);
});

module.exports = router;
