const path = require('')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        publicPath: '/dist'
    }
}