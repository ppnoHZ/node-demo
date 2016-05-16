/**
 * readFile  
 * arg1：文件名称
 * arg2: 文件字符编码
 * arg3: 回调函数接受文件内容，如果不指定字符编码则回调函数就是第二个参数
 * 如果指定了encoding 则解析出来的data就是一个字符串，否则是一个以buffer表示的二进制数据
 */


var fs = require('fs');

fs.readFile('content.text', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        //返回buffer形式的二进制文件
        console.log(data);
    }
})
console.log('不指定文件编码读取文件1');
fs.readFile('content.text', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        //返回字符串
        console.log(data);
    }
})
console.log('指定文件编码读取文件');

try {
    var fileText = fs.readFileSync('content.text', 'utf-8');
    console.log('同步读取文件内容。',fileText);
} catch (error) {

}