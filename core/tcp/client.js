var net = require('net')

var client = net.connect({ port: 8124 }, function () {
    console.log("连接服务端");
    console.log("发送数据");
    client.write('world!\r\n');
})

client.on('data', function (data) {
    console.log('接收数据:');
    console.log('data',data.toString());
})
client.on('end', function () {
    console.log('client disconnected');
})