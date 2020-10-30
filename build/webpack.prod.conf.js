const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const TerserPlugin = require('terser-webpack-plugin'); // css压缩

module.exports = merge(baseConfig, {
	mode: 'production',
	optimization: {
		// minimize: true, // 根据mode区分优化策略
		splitChunks: {
			chunks: 'initial',
			automaticNameDelimiter: '_', // 指定生成文件名称间的间隔符
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					priority: -10
				},
				default: {
					minChunks: 2,
					name: 'default',
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
})