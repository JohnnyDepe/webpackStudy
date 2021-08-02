const path = require('path');
const HtmlWenpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWenpackPlugin({
            title: Development
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        publicPath: '/dist',
    }
}