import addContent from './add-content.js';
import _ from 'lodash';
import './style.css';
document.write("my first webpackapp<br />");
addContent();
function component (){
    const ele = document.createElement('div');
    ele.classList.add('hello');
    ele.innerHTML("he")
    return ele;
}
document.body.appendChild(component());
console.log(__dirname);