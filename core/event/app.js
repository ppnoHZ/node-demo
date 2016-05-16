var events = require('events');

var emitter = new events.EventEmitter();


// once 只会触发一次的事件，触发后立即解除监听
emitter.once('onceEvent', function () {
    console.log(arguments);
})


emitter.on('someEvent', function (arg1, arg2) {
    console.log('listerner1', arg1, arg2);//listerner1 zhoudd 1990
})

emitter.on('someEvent', function (arg1) {
    console.log(arg1);
})

emitter.removeListener('someEvent', function (arg1) {
    console.log('removeListener');
})

emitter.emit('someEvent', 'zhoudd', 1990);//{ '0': 'zhoudd', '1': 1990 }


// once 只会触发一次的事件，触发后立即解除监听
emitter.emit('onceEvent', 'once', 1990);
emitter.emit('onceEvent', 'once', 1990);

emitter.emit('error')// 发送错误事件

