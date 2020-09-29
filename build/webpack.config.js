const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin"); 被mini-css..替代
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css抽离
const TerserPlugin = require('terser-webpack-plugin'); // css压缩
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development', // production development
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
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						// presets: ['@babel/preset-env'],
						// plugins: ['@babel/transform-runtime']
					}
				}
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
						loader: MiniCssExtractPlugin.loader,
						// loader: 'style-loader',
						// devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'myApp',
			template: path.join(__dirname, '../src/index.html'),
			filename: 'index.html',
			// favicon: '',
			inject: true,
			hash: true,
			// chunks 多页
		}),
		new MiniCssExtractPlugin({
			// 	filename: devMode ? '[name].css' : '[name].[hash].css',
			//  chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
			filename: 'css/[name].[hash:5].css', // 入口模块文件输出
			chunkFilename: '[id].[hash:5].css', // 非入口模块文件输出
		})
	],
	resolve: {
		extensions: ['.ts', 'tsx', '.jsx', '.js', 'json'],
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	optimization: {
		// minimize: true, // 根据mode区分优化策略
		splitchunks: {
			chunks: 'initial',
			minSize: 20000, // 最小分割大小
			maxAsyncRequests: 5, // 按需加载时的最大并行请求数。
			maxInitialRequests: 5, // 入口点的最大并行请求数。
			automaticNameDelimiter: '_', // 指定生成文件名称间的间隔符
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
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
	// watch: true,
	devServer: {
		contentBase: path.join(__dirname, "../src/assets/"),
		compress: true,
		// filename: '[name].[hash].bundle.js',
		host: "localhost",
		// host: "0.0.0.0",
		hot: true,
		// https: true, 需要提供自己的证书
		inline: true,
		noInfo: false,
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