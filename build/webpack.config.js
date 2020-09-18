const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production', // production development
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].[hash].bundle.js',
		publicPath: '/dist/assets/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime']
					}
				}
			},
			{ test: /\.tsx?$/, loader: "ts-loader" },
			// 图片文件
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			},
			// 字体文件
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
						attrs: [':data-src']
					}
				}
			},
			{
				test: /\.less$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader', options: {
						sourceMap: true,
						modules: true,
						localIdentName: '[path][name]__[local]--[hash:base64:5]'
					}
				}, {
					loader: 'less-loader', options: {
						sourceMap: true
					}
				}],
				exclude: [path.resolve(__dirname, '..', 'node_modules')]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
						}
					}
				],
				// exclude: [path.resolve(__dirname, '..', 'node_modules')]
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'myApp',
			template: path.join(__dirname, '../src/index.html'),
			filename: 'index.html',
			// favicon: '',
			inject: true,
			hash: true,
			// chunks 多页
		}),
	],
	resolve: {
		extensions: ['.ts', 'tsx', '.jsx', '.js', 'json'],
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	// watch: true,
	devServer: {
		contentBase: path.join(__dirname, "../src/assets/"),
		compress: true,
		// filename: '[name].[hash].bundle.js',
		host: "0.0.0.0",
		hot: true,
		hotOnly: true,
		// https: true, 需要提供自己的证书
		inline: true,
		noInfo: true,
		open: true,
		overlay: true,
		port: 10214,
		quiet: false,
		watchOptions: {
			aggregateTimeout: 300,
			ignored: /node_modules/,
		},
		proxy: {
		},
	}
}