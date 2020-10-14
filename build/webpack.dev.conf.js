const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const config = require('../config')

module.exports = merge(baseConfig, {
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, "../src/assets/"),
		compress: true,
		host: "0.0.0.0",
		hot: true,
		inline: true,
		noInfo: true,
		open: true,
		overlay: true,
		port: 10214,
		watchOptions: {
			aggregateTimeout: 300,
			ignored: /node_modules/,
		},
		proxy: config.dev.proxyTable
	},
	devtool: 'cheap-module-eval-source-map'
})