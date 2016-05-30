var net = require('net');

// var iconv = require('iconv-lite');
// Buffer转字符串


var server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        console.log('接收数据');
        console.log("data:", data.toString('utf-8'));
        // console.log("data", iconv.decode(data, 'win1251')); //Buffer转字符串
        console.log('发送数据');
        socket.write('你好');
    })

    socket.on('end', function () {
        console.log('链接断开');
    })

    // socket.write('hello world!');
})

server.on('connection', function (socket) {
    console.log('客户端链接', socket);
})
server.on('close', function () {
    console.log('服务端关闭');
})

server.listen(8124, function () {
    console.log("server runing ");
})

