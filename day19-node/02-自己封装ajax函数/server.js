const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.post('/xxx', (req, res) => {
  console.log('post', req.body)
  res.send('ok')
})

app.get('/xxx', (req, res) => {
  setTimeout(() => {
    console.log('get', req.query)
    let arr = [
      { name: 'zs', age: 18 },
      { name: 'ls', age: 20 },
    ]
    // express自动将数组,转成了json字符串
    res.send(arr)
  }, 3000)
  // res.send('get-ok')
})

app.listen(5000, () => {
  console.log('ok')
})
