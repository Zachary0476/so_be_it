const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const config = require('../config');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
	mode: 'development',
	devServer: {
		contentBase: false,
		publicPath: '/',
		compress: true,
		host: "127.0.0.1",
		noInfo: true,
		hot: true,
		clientLogLevel: "error",
		// hotOnly: true,
		open: true,
		overlay: {
			warnings: true,
			errors: true
		},
		port: 10214,
		proxy: config.dev.proxyTable
	},
	plugins: [
		// 分析
		new webpack.NamedModulesPlugin(),
		// 热更新插件
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'cheap-module-eval-source-map'
})