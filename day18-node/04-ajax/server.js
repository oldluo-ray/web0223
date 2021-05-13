const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.post('/findUser', (req, res) => {
  let arr = ['zs', 'ls', 'ww']
  const username = req.body.username
  const result = arr.includes(username)
  if (result) {
    //不能使用
    res.send('no')
  } else {
    res.send('ok')
  }
})
app.listen(5000, () => {
  console.log('Ok')
})
