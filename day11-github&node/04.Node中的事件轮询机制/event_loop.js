/*
 * 在Node中事件轮询分为：六个阶段：
 *
 *   第1阶段：timers（定时器阶段）
 *     执行定时器的回调
 *
 *   第2阶段：pending callbacks（系统阶段）
 *
 *   第3阶段：idle, prepare（准备阶段）
 *
 *   第4阶段：poll（轮询阶段）
 *         --如果回调队列不为空（有回调函数）
 *             从队列中取出回调函数同步执行（一个一个执行）直到队列为空 或 达到系统最大限度
 *         --如果回调队列为空（没有回调函数）
 *             --如果有设置了setImmediate
 *                   进入下一个check阶段，目的：为了执行setImmediate的回调。
 *             --如果没有有设置setImmediate
 *                   在此阶段停留（等待），等待回调函数被插入到轮询队列
 *                   定时器到点了，进入下一个check阶段（被动进入的，目的：执行定时器的回调）。
 *
 *   第5阶段：check（专门用于执行setImmediate的回调）
 *
 *   第6阶段：close callbacks（关闭回调阶段，clearInterval...）
 *
 *   极其特殊的：process.nextTick，能在任意阶段优先被执行。
 * */
setTimeout(() => {
  console.log(1)
}, 0)
setImmediate(() => {
  console.log(2)
})

process.nextTick(() => {
  console.log('nextTick')
})
