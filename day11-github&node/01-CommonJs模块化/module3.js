let d = 4

exports.d = d

// let exports
// let module = {exports: {}} ==> let module.exports = {}
// exports = module.exports = {}
console.log(module.exports === exports)
