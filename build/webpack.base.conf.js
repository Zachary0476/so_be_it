const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin"); 被mini-css..替代
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css抽离
const TerserPlugin = require('terser-webpack-plugin'); // css压缩
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HappyPack = require('happypack'); // 打包进程优化
const os = require('os'); // 配合多进程打包
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin'); // 友好提示
const notifier = require('node-notifier'); // 配合友好提示
const chalk = require('chalk');
console.log(path.join(__dirname))

module.exports = {
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/[name].[hash:8].bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			// js-loader
			{
				test: /\.js|jsx$/,
				loader: 'happypack/loader?id=happyBabel',
				exclude: /(node_modules|bower_components)/,
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
				exclude: /node_modules/
			},
			// 图片文件
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
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
			chunkFilename: '[id].[hash:5].css', // 非入口模块文件输出
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
	],
	resolve: {
		extensions: ['.ts', 'tsx', '.jsx', '.js', 'json'],
		alias: {
			'@': path.join(__dirname, 'src')
		}
	},
	optimization: {
		// minimize: true, // 根据mode区分优化策略
		splitChunks: {
			chunks: 'all',
			// minSize: 20000, // 最小分割大小
			// maxAsyncRequests: 30, // 按需加载时的最大并行请求数。
			// maxInitialRequests: 30, // 入口点的最大并行请求数。
			automaticNameDelimiter: '_', // 指定生成文件名称间的间隔符
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					minChunks: 2,
					priority: -10,
				},
				default: {
					name: 'common',
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true // 已提取复用
				}
			}
		},
		minimizer: [
			new TerserPlugin({
				exclude: /node_modules/,
				// cache: true, // webpack 5已忽略 默认就是true
				parallel: true, // 多进程并行运行 强烈建议使用
				// sourceMap: true, // 如果在生产环境中使用 source-maps，必须设置为 true
				terserOptions: {
					ecma: undefined,
					parse: {},
					compress: {},
					mangle: true, // Note `mangle.properties` is `false` by default.
					module: false,
					output: null,
					toplevel: false,
					nameCache: null,
					ie8: false,
					keep_classnames: undefined,
					keep_fnames: false,
					safari10: false,
				},
				extractComments: true,
			}),
		],
	},
}