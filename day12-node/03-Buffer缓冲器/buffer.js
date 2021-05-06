/*
 * 1.什么是Buffer？
 *     1.它是一个类数组的对象，用于存储数据（存储的全部是二进制数据）(像一双万能的手,用来接收任何类型的数据)
 *     2.Buffer的效率很高，存储和读取的速度都很快，本质就是对内存的直接操作(RAM(内存)和ROM(硬盘))
 *     3.Buffer的大小一旦确定了，不可修改。
 *     4.每个元素占用内存的空间是1字节。
 *     5.Buffer是Node中非常核心的模块，无需下载，无需引入，直接可以使用
 * */

// const buffer = new Buffer(10)
// Buffer.alloc() //效率不如allocUnsafe高,但是比他安全
// const buffer = Buffer.alloc(10)
// Buffer.allocUnsafe() //效率更高,但是不如上面的安全
// const buffer = Buffer.allocUnsafe(10)
// Buffer.from() // 把其他数据类型,转成二进制,存储到一个buffer中
// const buffer = Buffer.from('中国')
// console.log(buffer)
