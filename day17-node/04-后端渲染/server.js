const express = require('express')
const app = express()

// 告诉express,后端渲染时,使用的模板引擎是ejs
app.set('view engine', 'ejs')
// 告诉express,模板所处的文职
app.set('views', './views')

app.get('/data', (req, res) => {
  res.render('data', { data: ['哈哈', '呵呵', '嘿嘿'] })
})

app.listen(5000, () => {
  console.log('成功')
})
