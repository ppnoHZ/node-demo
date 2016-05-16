var http = require('http')
var url = require("url")
var util = require('util')

var querystring = require('querystring');

// var httpServer = http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Node.js</h1>')
//     res.end('<p>Hello World</p>')
// }).listen(3000);

// var httpServer = http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Node.js</h1>')
//     res.write(util.inspect(url.parse(req.url, true)))

//     res.end('<p>Hello World</p>')
// }).listen(3000);


//POST
var httpServer = http.createServer(function (req, res) {

    var post = '';
    req.on('data', function (chunk) {
        post += chunk
    })

    req.on('end', function (chunk) {
        post = querystring.parse(post);//将post解析为正在的post请求格式
        res.end(util.inspect(post))
    })
    // res.end('<p>Hello World</p>')
}).listen(3000);


//当TCP连接建立的时候触发，提供一个参数socket
httpServer.on('connection', function (scoket) {
    console.log('connection', arguments);
})

//客户端请求来到时触发。两个参数 req,res
httpServer.on('request', function () {
    console.log('request', arguments);
})

//当服务端关闭的时候，不是用户连接断开的时候。
httpServer.on('close', function () {
    console.log('server is close');
})

// http://localhost:3000/user?name=zhoudd&old=19
// 以上URl被url.parse(req.url, true)转换后如下：
//  query就是我们get请求的内容，路径则是path
// Url { protocol: null, slashes: null, auth: null, host: null, port: null, hostname: null, hash: null, 
// search: '?name=zhoudd&old=19', 
// query: { name: 'zhoudd', old: '19' }, 
// pathname: '/user', 
// path: '/user?name=zhoudd&old=19', 
// href: '/user?name=zhoudd&old=19' }



console.log('http server is listening at prot 3000');