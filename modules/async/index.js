var async = require('async')

var fs = require('fs');

//异步串行执行（无依赖）
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

//异步串行执行（有依赖）

async.waterfall([
    function (callback) {
        fs.readFile('file1.text', 'utf-8', function (err, content) {
            console.log('waterfall file1.text:', content);
            callback(err, content)
        });

    },
    function (arg, callback) {
        console.log('arg', arg);
        fs.readFile(arg, 'utf-8', function (err, content) {
            console.log('waterfall file2.text', content);
            callback(err, content)
        });

    },
    function (arg, callback) {
        console.log('arg', arg);
        fs.readFile(arg, 'utf-8', function (err, content) {
            console.log('waterfall file3.text', content);
            callback(err, content)
        });

    }
], function name(err, result) {
    console.log('waterfall err', err);
    console.log('waterfall result', result);
})