const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	module : {
		rules : [
			{
				// Con test le estamos diciendo a webpack que busque todos los archivos que matcheen con la regexp
				// /.(js|jsx)$/, osea todos los archivos que finalicen con la extension '.js' o '.jsx'.
				test : /\.(js|jsx)$/,
				// Excluimos el directorio 'node_modules' ya que nuestras dependencias ya están escritas en ES5.
				exclude : /node_modules/,
				// Indicamos usar el loader babel para estas reglas.
				use : {
					loader : "babel-loader"
				}
			},
			{
				test : /\.html$/,
				use : [
					{
						loader : 'html-loader',
						options : { minimize : true }
					}
				]
			},
			{
				test : /\.css$/,
				use : [ MiniCssExtractPlugin.loader, 'css-loader' ]
			}
		]
	},
	plugins : [
		new HtmlWebpackPlugin ({
			template : './src/index.html',
			filename : './index.html'
		}),
		new MiniCssExtractPlugin({
			filename : '[name].css',
			chunkFilename : '[id].css'
		})
	]
} 