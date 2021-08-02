import path from 'path';
const outputPath = path.join(__dirname, 'dist');
console.log(outputPath);
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
        
    },
    mode: 'development'
}