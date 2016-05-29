var async = require('async')

var fs = require('fs');

//异步串行执行
async.series([
    function (callback) {
        console.log("read file1.text");
        fs.readFile('file1.text', 'utf-8', callback);
    }
    , function (callback) {
        console.log("read file2.text");

        fs.readFile('file2.text', 'utf-8', callback);
    }], function (err, result) {
        console.log(err);//如果出现错误，则有err参数接收
        console.log(result);//结果会以数组的形式返回。["file text1","file text2"]

    })


//异步并行执行
async.parallel([
    function (callback) {
        console.log("read file1.text");
        fs.readFile('file1.text', 'utf-8', callback);
    }
    , function (callback) {
        console.log("read file2.text");

        fs.readFile('file2.text', 'utf-8', callback);
    }], function (err, result) {
        console.log(err);//如果出现错误，则有err参数接收
        console.log(result);//结果会以数组的形式返回。["file text1","file text2"]

    })

