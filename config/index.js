'use strict'
const path = require('path')

module.exports = {
	dev: {
		proxyTable: {
			'/api': {
				target: 'http://127.0.0.1:8999',
				changeOrigin: true,
			}
		},
	},

	build: {

	}
}
