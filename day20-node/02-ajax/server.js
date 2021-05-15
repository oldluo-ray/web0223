const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// app.use((req, res, next) => {
//   res.set('Access-Control-Allow-Origin', '*')
//   next()
// })
app.post('/test', (req, res) => {
  let arr = ['a', 'b', 'c']
  res.send(arr)
})

// 接口(接口文档)
app.get('/test', (req, res) => {
  const callback = req.query.callback
  let arr = ['a', 'b', 'c']
  let arrStr = JSON.stringify(arr)
  // res.send(arr) "['a', 'b', 'c']"
  // res.send('let result = ' + arrStr)
  // res.send(`fn(${arr})`) // fn(a,b,c)
  setTimeout(() => {
    res.send(`${callback}(${arrStr})`) //fn(['a','b','c'])
  }, 2000)
})

app.listen(5000, () => {
  console.log('ok')
})
