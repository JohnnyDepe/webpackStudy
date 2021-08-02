import path from 'path';
let outputPath = path.join(__dirname, 'dist');
console.log(outputPath);

export default function(){
    document.write('using config file!');
}