const express = require('express')
const router = express.Router()



router.get('/proxy', (req, res, next) => {
	res.send('123')
})



module.exports = router