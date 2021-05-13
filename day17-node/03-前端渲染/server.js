const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/getData', (req, res) => {
  let arr = ['a', 'b', 'c', 'd']
  res.send(arr)
})
app.listen(5000, () => {
  console.log('成功')
})
