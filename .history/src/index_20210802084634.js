import addContent from './add-content.js';
import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
mport toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

document.write("my first webpackapp<br />");
addContent();


console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`
function component (){
    const ele = document.createElement('div');
    ele.classList.add('hello');
    ele.innerText= "hello world!";
    const myIcon = new Image();
    myIcon.src = Icon;
    ele.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

    return ele;
}
document.body.appendChild(component());
console.log(__dirname);