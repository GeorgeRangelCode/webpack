const path = require('path')

module.exports = {
	entry: path.resolve(__dirname, 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		port: 9000,
	},
	module: {
		rules: [
			// Aqui van los loaders
			{
				// test: Que tipo de archivo quiero reconocer
				// use: Que loader se va a encargar del archivo
				test: /\.css$/,
				use: ['style-loader',
					  'css-loader'
					 ],
			}
		]
	}
}