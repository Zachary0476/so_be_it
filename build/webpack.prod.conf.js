const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');

console.log(process.env.NODE_ENV);
module.exports = merge(baseConfig, {
	mode: 'production'
})