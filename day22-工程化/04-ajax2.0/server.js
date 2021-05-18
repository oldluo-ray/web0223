const express = require('express')
// 处理上传的文件的
const multer = require('multer')

// 解决跨域
const cors = require('cors')
// 设置保存路径
const upload = multer({
  dest: './static/upload',
})
const app = express()

app.use(cors())
app.use(upload.any())
app.use(express.urlencoded({ extended: true }))
app.post('/upload', (req, res) => {
  console.log(req.files)
})

app.listen(5000, () => {
  console.log('ok')
})
