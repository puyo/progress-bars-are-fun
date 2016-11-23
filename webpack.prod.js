const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        './src/index',
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: ''
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.styl']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, 'src'),
        }, {
            test: /\.styl$/,
            loader: 'style-loader!css-loader!stylus-loader'
        }]
    }
}
