# 路由控制转移

 当两个路由名称相同时，默认匹配写在前面的路由，忽略后面的路由。
 可以通过回调函数的第三个参数next，将路由的控制权转移给后面的规则。
 ```javascript
   var users = { 'byvoid': {
        name: 'Carbo',
        website: 'http://www.byvoid.com'
      }
    };
    app.all('/user/:username', function(req, res, next) { // 检查用户是否存在
        if (users[req.params.username]) {
            next(); 
        } else {
            next(new Error(req.params.username + ' does not exist.')); 
        }
    });
    app.get('/user/:username', function(req, res) {
        // 用户一定存在,直接展示
        res.send(JSON.stringify(users[req.params.username])); });
        app.put('/user/:username', function(req, res) { // 修改用户信息
        res.send('Done');
    });
 
 ```
 next如果接受了参数表示发生错误。