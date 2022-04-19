const mongoose = require('mongoose')

let url = 'mongodb://zachary:zachary0476@8.136.6.19:27017/blog'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('connection', () => {
    console.log('已成功连接mongodb');
})
db.on('error', () => {
    console.log('mongodb连接失败');
})

module.exports = mongoose