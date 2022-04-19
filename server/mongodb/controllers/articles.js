const Articles = require('../models/articles')

exports.addArticle = function (req, res) {
    let params = req.query
    let article = new Articles(params)
    article.save(err => {
        if (err) console.log(err);
        else console.log('ok');
    })
}
exports.getArticle = function (req, res) {
    Articles.find({}, (err, result) => {
        if (err) {
            res.send({ success: false, data: null })
            return false
        }
        res.send({ success: true, data: result })
    })
}
