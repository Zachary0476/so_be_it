const axios = require('axios')

axios.get('/api/test').then(res => {
	console.log(res.status)
})