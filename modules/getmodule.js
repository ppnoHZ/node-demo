var myModule = require('./module')

//require 不会重复加载模块，无论调用多少次require 获得都是同一个对象
myModule.setName('zhoudd')
// myModule.sayHello();  //输出  hello zhoudd


var myModule1 = require('./module')

myModule1.setName('zhoudd1')
myModule.sayHello();  //hello zhoudd1
myModule.sayHello();    //hello zhoudd1