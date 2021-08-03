import addContent from './add-content.js';
import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import {cube} from './math.js';

addContent();


function component (){
    const element = document.createElement('pre');
    const btn = document.createElement('button');

    element.classList.add("hello");

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    btn.innerText = "点击这里然后查看console";
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}
// document.body.appendChild(component());
let ele = component();
document.body.appendChild(ele);

console.log(__dirname);

// if(module.hot){
//     console.log(222)
//     module.hot.accept('./print.js', () => {
//         console.log("Accepting the updated printMe module!");
//         // printMe();
//         document.body.removeChild(ele);
//         ele = component();
//         document.body.appendChild(ele);
//     });
// }