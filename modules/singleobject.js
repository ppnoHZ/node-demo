function Hello() {
    var name;

    this.setName = function (thyName) {
        name = thyName;
    }
    this.sayHello = function () {
        console.log('Hello ' + name);
    }
}

// exports.Hello = Hello; //在别的文件中引用的写法 require('./singleobject').Hello
module.exports = Hello; //在别的文件中引用的写法  require('./singleobject')
