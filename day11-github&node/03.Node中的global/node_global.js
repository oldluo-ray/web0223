/*
 * 1.JS由哪几部分组成（对于浏览器说）？
    -- BOM
    -- DOM
    -- EMCSCRIPT
 *
 * 2.NodeJs由哪几部分组成？
 * 
 *  -- EMCSCRIPT
 *  -- global
 * 
 *
 * 3.global上有什么东西？
 *
 * */

// console.log(global)
setTimeout(() => {
  console.log(1)
}, 0)
setImmediate(() => {
  console.log(2)
})
