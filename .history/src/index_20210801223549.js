import addContent from './add-content.js';
import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
document.write("my first webpackapp<br />");
addContent();
function component (){
    const ele = document.createElement('div');
    ele.classList.add('hello');
    ele.innerHTML("hello world!");
    const myIcon = new Image();
    
    return ele;
}
document.body.appendChild(component());
console.log(__dirname);