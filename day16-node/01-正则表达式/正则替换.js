// let str = '   123AD  asadf   asadfasf  adf '

// let newStr = str.replace(/\s/g, '-')
// console.log(newStr)

let str = 'abc,efg,123，abc,123，a'
let newStr = str.replace(/,|，/g, '-')
console.log(newStr)
