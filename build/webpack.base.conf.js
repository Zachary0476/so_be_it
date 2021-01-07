const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin"); 被mini-css..替代
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css抽离
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const HappyPack = require('happypack'); // 打包进程优化
const os = require('os'); // 配合多进程打包
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin'); // 友好提示
const notifier = require('node-notifier'); // 配合友好提示
const chalk = require('chalk');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

const webpackBaseConfig = {
	entry: path.resolve(__dirname, '../src/index.js')
	,
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/[name].[hash:8].bundle.js',
		chunkFilename: 'js/[name]-[contenthash:7].js',
		publicPath: '/'
	},
	module: {
		rules: [
			// js-loader
			{
				test: /\.js|jsx$/,
				loader: 'happypack/loader?id=happyBabel',
				exclude: /node_modules/,
				include: path.resolve(__dirname, '../src')
			},
			// ts-loader
			{ test: /\.tsx?$/, loader: "ts-loader" },
			// CSS-loader
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			// less-loader
			{
				test: /\.less$/,
				use: [
					{
						loader: process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: '[path][name]__[local]--[hash:base64:5]'
							},
							importLoaders: 2 // 自此后再加载两个loader
						}
					},
					'postcss-loader',
					{
						loader: "less-loader",
						options: {
							sourceMap: true
						}
					}
				],
				exclude: /node_modules/,
				sideEffects: true
			},
			// 图片文件
			{
				test: /\.(png|jpg|jpeg|gif|ico)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							esModule: false, // 不加的话会有这种情况 img属性src="[object Module]"
							limit: 1024 * 10, // 当大于100kb时候，将文件打包到publicPath中 
							name: 'img/[name].[hash:8].[ext]'
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
							name: 'fonts/[name].[ext]',
						},
					},
				],
			},
			// html-loader
			{
				test: /\.(htm|html)$/,
				loader: 'html-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		// new CopyWebpackPlugin(
		// 	{
		// 		patterns: [
		// 			{
		// 				from: path.join(__dirname, '../src/assets/imgs'),
		// 				to: path.join(__dirname, '../dist/img')
		// 			}
		// 		],
		// 	}
		// ),
		new HappyPack({
			//用id来标识 happypack处理那里类文件
			id: 'happyBabel',
			//如何处理  用法和loader 的配置一样
			loaders: [{
				loader: 'babel-loader?cacheDirectory=true',
			}],
			//共享进程池
			threadPool: happyThreadPool,
			//允许 HappyPack 输出日志
			verbose: true,
		}),
		new HtmlWebpackPlugin({
			title: 'myApp',
			template: path.join(__dirname, '../src/index.html'),
			filename: 'index.html',
			favicon: path.join(__dirname, '../favicon.ico'),
			inject: true,
			hash: true,
			// chunks 多页
		}),
		new MiniCssExtractPlugin({
			// 	filename: devMode ? '[name].css' : '[name].[hash].css',
			//  chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
			filename: 'css/[name].[hash:5].css', // 入口模块文件输出
			chunkFilename: 'css/[id].[hash:5].css', // 非入口模块文件输出
		}),
		// 友好的终端错误显示方式
		new FriendlyErrorsPlugin({
			// 运行成功
			compilationSuccessInfo: {
				messages: process.env.NODE_ENV === 'development' ? [chalk.blue('The project is Running at: http://0.0.0.0:10214')] : ''
			},
			//  运行错误
			onErrors: function (severity, errors) {
				// 严重性可以是'错误'或'警告'
				if (severity !== 'error') {
					return;
				}
				const error = errors[0];
				notifier.notify({
					title: "Webpack error",
					message: chalk.red(severity + ': ' + error.name),
					subtitle: error.file || '',
					// icon: ICON
				});
			},
			//是否每次编译之间清除控制台
			clearConsole: true,
		}),
		// new BundleAnalyzerPlugin(),
		new AntdDayjsWebpackPlugin()
	],
	resolve: {
		extensions: ['.jsx', '.js', 'json'],
		alias: {
			'@': path.join(__dirname, '../src')
		}
	},
	performance: {
		hints: false
	},
	externals: {
	},
}

if (process.env.ANALYZ_PORT === 'true' && process.env.NODE_ENV === 'production') {
	const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
	webpackBaseConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackBaseConfig