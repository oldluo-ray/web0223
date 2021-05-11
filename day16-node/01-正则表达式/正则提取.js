// let str = '张三：1000，李四：5000，王五：8000。'
// //需求:将字符串中的数字都提取出来
// let res = str.match(/\d+/g)
// console.log(res)

// let str =
//   '1. 123123@xx.com,fangfang@valuedopinions.cn 286669312@qq.com;2、emailenglish@emailenglish.englishtown.com 286669312@qq.com...'

// let res = str.match(/\w+@\w+\.(com|cn)/g)
// console.log(res)

let dateStr = '2016-1-5'
// let res = dateStr.match(/\d{1,4}/g)
// console.log(res)

//使用另外一种方式去提取:
let reg = /(\d{4})-(\d{1,2})-(\d{1,2})/
reg.test(dateStr)

console.log(RegExp.$1)
console.log(RegExp.$2)
console.log(RegExp.$3)
