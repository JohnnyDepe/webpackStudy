import path from 'path';
const outputPath = path.join(__dirname, 'dist');
console.log(outputPath);
export default function(){
    document.write('using config file!');
}