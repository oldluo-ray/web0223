/*
 * 1.流是什么？
 *     类似于现实生活中的水流，可以传输数据（液体）
 * 2.特点：将要写入的数据，放在文件流中，连续不断的向指定位置传输，节约内存空间，而且效率高。
 *     fs.createWriteStream(path[, options])
 *         --path : 要写入的文件路径+文件名+文件后缀
 *         --options：配置对象
 *                 --flag：打开文件要进行的操作，默认值：'w'
 *                     'w' : 写入
 *                     'r' ：读取
 *                     'a' ：追加
 *                 --mode ：文件的权限控制，默认值是0o666
 *                     0o111 : 文件可被执行的权限
 *                     0o222 ：文件被写入的权限
 *                     0o444 ：文件被读取的权限
 *                 --encoding ：编码，默认是：'utf-8'
 *                 --fd ：文件描述符（文件内部编码），默认值是null
 *                 --autoClose ：自动关闭，当数据写入完毕后，自动关闭操作完的文件，默认值true
 *                 --start：写入文件的起始点（开始位置）
 * */

const fs = require('fs')

// 创建写入流
const ws = fs.createWriteStream('./music1.mp3') //创建写入流的时候就打开了
// 创建读取流
const rs = fs.createReadStream('./music.mp3') // 创建的时候,读取流就打开了
// 真正往目标文件中写入的方法
// ws.write('123')
// 要将music中的数据,写入到music1.mp3中,要读取music.mp3的数据

// 流对象有pipe方法, 返回的还是一个流对象(在gulp中会见到)
rs.pipe(ws)
