module.exports = {
	devtool: 'source-map',
	target: 'node',
	entry: {
		index: './src/index.js'
	}
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.m?js$/,
	// 			exclude: /node_modules/,
	// 			use: {
	// 				loader: 'babel-loader'
	// 			}
	// 		}
	// 	]
	// }
};
