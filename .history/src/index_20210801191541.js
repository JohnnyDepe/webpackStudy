import addContent from './add-content.js';
import _ from 'lodash';
import './style.css';
document.write("my first webpackapp<br />");
addContent();
function component (){
    const ele = document.createElement('div');
    ele.classList.add('.hello');
}
console.log(__dirname);