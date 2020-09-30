const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');

module.exports = merge(baseConfig, {
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, "../src/assets/"),
		compress: true,
		host: "localhost",
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
		proxy: {
		},
	},
	devtool: 'cheap-module-eval-source-map'
})