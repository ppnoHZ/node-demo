console.log(process.argv);

process.stdout.write('输入文字:');//标准的输出流，比console.log 更底层。

process.stdin.resume();

process.stdin.on('data',function (data) {
    process.stdout.write('输入的是:'+data.toString())
  })

//输入命令
// node app.js name=zdd --v "zhoudd"

//输出结果
// [ 
// 'D:\\Program Files\\nodejs\\node.exe',
//   'e:\\GitHub\\node-demo\\core\\process\\app.js',
//   'name=zdd',
//   '--v',
//   'zhoudd' 
// ]