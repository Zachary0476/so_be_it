// const mongoose = require('mongoose')
const mongoose = require('../../config/mongodb')

var articles = new mongoose.Schema({
    title: String,
    content: String,
    tag: String,
    discuss: String,
    viewcount: Number,
    cheers: Number,
    createtime: String,
    img: String
})

const Articles = mongoose.model('articles', articles);

module.exports = Articles