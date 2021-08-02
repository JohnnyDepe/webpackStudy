const path = require('path');
const HtmlWenpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    plugins: [
        new HtmlWenpackPlugin({
            title: 'Development'
        })
    ],
    // devtool: 'inline-souce-map',
    // devServer: {
    //     publicPath: '/dist',
    // },
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}