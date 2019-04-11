import _ from 'lodash';
import './style/index.css'; //loader => css-loader module , style-loader
import './style/a.scss';

function createDomElement(){
    var dom = document.createElement('div');
    dom.innerHTML = _.join(['Hello World','Hello Webpack','Hello yves'],'');
    // dom.className = 'box';
    dom.classList.add('box');
     return dom;
}
var divDom = createDomElement();

document.body.appendChild(divDom);
