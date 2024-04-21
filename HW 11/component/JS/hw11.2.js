// Создайте компонент “Карточка товара» и разместите на странице три карточки. 
// За основу возьмите задание DOM

'use strict'
import {itemsObj} from './items.js';
import {ROOT_ITEM} from './root.js';
class Items {


    render(){
        let htmlCatalog = ' ';

        itemsObj.forEach(({ nameTovar, imgSrc, corpus, remen, displaySize, displayType, bluetooth, OS1, OS2 }) => {
            htmlCatalog += 
            `
            <div class="prod">
            <span>Название: ${nameTovar}</span><br>
            <img scr="https://github.com/zagorky/JS_HW/blob/main/HW%2011/component/img/${imgSrc}.jpg"/><br> 
            <span>Цвет курпуса: ${corpus}</span><br>
            <span>Цвет ремешка: ${remen}</span><br>
            <span>Размер дисплея: ${displaySize}</span><br>
            <span>Тип дисплея:${displayType}</span><br>
            <span>Блютуз: ${bluetooth}</span><br>
            <span> Операционные системы: <br>
            ${OS1}, ${OS2}</span><br>
            <button>Подробнее</button><br>
            </div>
            `;
        })
        let html = 
        `
        <div class="container">
        ${htmlCatalog}
        </div>
        `;
        ROOT_ITEM.innerHTML = html;
        
    }
}

let itemsPage = new Items();
itemsPage.render();

