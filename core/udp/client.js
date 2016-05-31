var dgram = require('dgram')

var message = new Buffer('深入浅出Node.js')

var client = dgram.createSocket('udp4')

/**
 * send 参数
 * 1,要发送的buffer
 * 2,buffer偏移量
 * 3,buffer的长度
 * 4,目标端口
 * 5,目标地址
 * 6,发送成功之后的回调
 */
client.send(message, 0, message.length, 41234, 'localhost', function (err, btyes) {
    client.close();
})