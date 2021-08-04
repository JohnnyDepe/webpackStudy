const path = require('path');
const HtmlWenpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // entry: './src/index.js',
    mode: 'production',
    entry: {
        app: './src/index.js',
        // print: './src/print.js'
        another: './src/another-module.js'
    },

    devtool: 'inline-source-map',

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWenpackPlugin({
            title: '管理输出'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    
    devServer: {
        contentBase: '/dist',
        hot: true
    },

    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all'
        }
    }

    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}