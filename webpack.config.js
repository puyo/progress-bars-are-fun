const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        './src/index',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
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
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ template: 'src/index.html', inject: 'body' })
    ]
}