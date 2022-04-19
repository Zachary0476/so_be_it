// 引入创建模块
const express = require('express')
const http = require('http')
// const session = require('./config/session')
// const mongoose = require('./config/mongodb')
// 辅助模块
const path = require('path')
const badyParser = require('body-parser')
// 使用redis
// const redis = require('./config/redis')
// 创建服务器
const app = express()
const server = http.createServer(app)
// 解析
// app.use(express.static(path.join(__dirname, '../views/dist')))
app.use(badyParser.json({ limit: '1024kb' }))
app.use(badyParser.urlencoded({ extended: true, limit: '1024kb' }))
//设置跨域访问
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});
// session
// app.use(session)
// 后端路由配置
app.use('/api', require('./router'))
app.use('/login', (req, res) => {
	// req.session.userinfo = '唐三'
	res.send('登录成功')
})

app.use('/record', (req, res) => {
	res.send('部署成功')
	// res.send(`${req.session.userinfo} 欢迎回来！！`)
})

app.use('/destory', (req, res) => {
	res.send('退出成功')
	// req.session.destroy(err => {
	// 	console.log(err)
	// 	res.send('退出成功')
	// })
})

// 错误处理中间件
app.use('*', (err, req, res, next) => {
	res.status(500).send('服务器正忙')
})
// 跑起来
server.listen(8989, () => {
	console.log('Server is running at http://localhost:8989');
})