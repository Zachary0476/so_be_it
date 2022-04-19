const redis = require("redis")

const client = redis.createClient({
    password: '在你准备的本地redis.conf中，requirepass 的值，不设置也行'
})

client.on('connect', _ => {
    console.log('redis连接成功！')
})
client.on("error", function (error) {
    console.error(error);
})

module.exports = client