const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production';

const imagePath = () => {
	const generator = {
		filename: isProduction ? 'assets/media/[contenthash][ext]' : '[name][ext]'
	}
	return generator
}

const cssLoaders = extra => {
	const loaders = [
		{ 
			loader: MiniCssExtractPlugin.loader,
		},
		'css-loader'
	]
	if (extra) loaders.push(extra)
	return loaders
}

const babelLoaders = (presets) => {
	const babelOptions = {
		loader: 'babel-loader',
		options: {
			presets: [
				[
					'@babel/preset-env',
					{
						"useBuiltIns": "entry",
						"corejs": 3
					}
				]
			]
		}
	}
	if (presets.length !== 0 ) presets.map(preset => {
		babelOptions.options.presets.push(preset)
	})
	return babelOptions
}

module.exports = () => {
	return {
		entry: {
			main: ['@babel/polyfill', './src/index.tsx']
		},
		output: {
			filename: isProduction ? 'assets/js/[contenthash].js' : 'main.js',
			path: path.resolve(__dirname, 'dist'),
			publicPath: '/',
		},
		mode: isProduction ? 'production' : 'development',
		devServer: {
			open: true,
			port: 4242,
			watchContentBase: true,
			hot: true,
			historyApiFallback: true
		},
		devtool: isProduction ? false : 'source-map',
		resolve: {
			extensions: ['.js', '.json', '.scss', '.css', '.ts', '.tsx', '.jsx']
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './index.html',
				minify: {
					collapseWhitespace: isProduction
				}
			}),
			new MiniCssExtractPlugin({
				filename: isProduction ? 'assets/styles/[contenthash].css' : '[name].css'
			}),
			new CopyWebpackPlugin({
				patterns: [
					{
						from: path.resolve(__dirname, './src/assets/images/fav.icon.png'),
						to: path.resolve(__dirname, 'dist/')
					},
					{
						from: path.resolve(__dirname, './src/.htaccess'),
						to: path.resolve(__dirname, 'dist/')
					},
				]
			}),
			new CleanWebpackPlugin()
		],
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					use: cssLoaders('sass-loader')
				},
				{
					test: /\.(ttf|woff|woff2|eot)$/i,
					loader: 'file-loader',
					options: {
						outputPath: isProduction ? 'assets/fonts/' : '',
						filename: isProduction ? 'assets/fonts/[contenthash].[ext]' : '[name].[ext]', 
					}
				},
				{
					test: /\.(svg|png|jpg|gif)$/i,
					type: 'asset/resource',
					generator: imagePath(isProduction)
				},
				{
					test: /\.(js|jsx)$/i,
					exclude: /node_modules/,
					use: babelLoaders(['@babel/preset-react'])
				},
				{
					test: /\.(ts|tsx)$/i,
					exclude: /node_modules/,
					use: babelLoaders([
						'@babel/preset-react',
						'@babel/preset-typescript'
					])
				}
			],
		},
	}
};
