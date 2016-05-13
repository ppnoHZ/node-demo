# package
* 将文件加封装为一个模块就是所谓的包。
* node在调用包的时候首先检测package.json中main字段，将其作为包的入口
如果不存在则会寻找index.js index.node作为包的入口。