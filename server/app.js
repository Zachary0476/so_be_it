const express = require('express')
const http = require('http')
const bodyParse = require('body-parser')

const app = express()
const server = http.createServer(app)

// 标定静态资源文件托管目录
// app.use(express.static(__dirname, '/dist'))
// 解析JSON格式
app.use(bodyParse.json({ limit: '50mb' }))
// 解析二进制格式
app.use(bodyParse.urlencoded({ extended: true, limit: '50mb' }))
// 解析文本格式
app.use(bodyParse.text())

// app.use((req, res, next) => {
// 	res.send('网站维护中...')
// })

// 拦截path，进入路由分发
app.use('/api', require('./router/index'))

// 404 页面
app.get('*', (req, res) => {
	res.status(404).send('404')
})

// 错误处理中间件
app.use((err, req, res, next) => {
	res.send(`node服务器错误:${err}`)
})



server.listen(8999, 'localhost', () => {
	console.log('server is running at: http://127.0.0.1:8999');
})