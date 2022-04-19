const express = require('express')
const router = express.Router()
const { addArticle, getArticle } = require('../mongodb/controllers/articles')


router.get('/add', addArticle)
router.get('/get', getArticle)


module.exports = router