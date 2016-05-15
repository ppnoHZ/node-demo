/**
 *  Sub 仅仅继承了 Base 在原型中定义的函数，而构造函数内部创造的 base 属
    性和 sayHello 函数都没有被 Sub 继承。同时，在原型中定义的属性不会被 console.log 作
    为对象的属性输出。
 */

var util = require('util')

function Base() {
    //----------------不被继承
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('hello ' + this.name);
    }
    this.toString = function () {
        return this.name
    }
    //----------------不被继承
}

//---------------继承,console.log 的时候不会体现出来
Base.prototype.showName = function () {
    console.log(this.name);
}


function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);
//仅仅继承原型中定义的，构造函数内部定义的属性和方法都不会被继承
//
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);


var objSub = new Sub();
objBase.showName();
console.log(objSub);


// base
// hello base
// Base {
//   name: 'base',
//   base: 1991,
//   sayHello: [Function],
//   toString: [Function] }
// base
// Sub { name: 'sub' }



/**
 * util.inspect 输入对象的详细信息
 */
console.log(util.inspect(objBase));
// Base {
//   name: 'base',
//   base: 1991,
//   sayHello: [Function],
//   toString: [Function] }
console.log(util.inspect(objBase,true));

// Base {
//   name: 'base',
//   base: 1991,
//   sayHello:
//    { [Function]
//      [length]: 0,
//      [name]: '',
//      [arguments]: null,
//      [caller]: null,
//      [prototype]: { [constructor]: [Circular] } },
//   toString:
//    { [Function]
//      [length]: 0,
//      [name]: '',
//      [arguments]: null,
//      [caller]: null,
//      [prototype]: { [constructor]: [Circular] } } }
