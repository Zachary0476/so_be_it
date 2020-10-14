const mongoose = require('mongoose')
const dbURL = 'mongodb://localhost:8989/zachary'

mongoose.connect(dbURL).then(con => {
	console.log("数据库连接成功");
}).catch(err => {
	console.log("数据库连接失败", err);
})

const db = mongoose.connection;
db.once('error', () => console.log('Mongo 连接出错'));
db.once('open', () => console.log('Mongo 连接成功'));
db.once('close', () => console.log('Mongo 退出连接'));

module.exports = mongoose