module.exports = {
	entry: './client/jsx/main.js',
	output: {
		path: './builds',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};