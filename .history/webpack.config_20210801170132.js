import path from 'path';
const outputPath = path.join(__dirname, )

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    mode: 'development'
}