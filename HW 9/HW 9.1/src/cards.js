import {tovarsObj} from './tovars.js';//+
//создаем массив который хранит элементы card из html кода
let cards = Array.from(document.querySelectorAll('.card'));//+
//перебираем элементы карточек товара из массива
cards.forEach(function(elem, index)
{
//tovarObj[index] обращается к массиву объектов с товаром и берет объекты по 
// очереди, далее берутся значения свойств и записывается в html
//заполняем картинку записывая новый путь атрибута src
    
    elem.querySelector('img').src = `img/${tovarsObj[index].imgSrc}`;
//записываем заголовок

    elem.querySelector('h5').innerHTML = `<br>${tovarsObj[index].nameTovar}`;
//длинная строка для заполнения тела карточки
    let str = `<br>Корпус: ${tovarsObj[index].corpus}
    <br> Ремешок: ${tovarsObj[index].remen}
    <br> Размер дисплея: ${tovarsObj[index].displaySize} 
    <br> Тип дисплея: ${tovarsObj[index].displayType}`;//+

    if (tovarsObj[index].bluetooth) str += '<br>Блютуз: есть';//+
    else str += '<br>Блютуз: нет';//+

    str += `<br> Операционные системы: ${tovarsObj[index].OS.os1}, ${tovarsObj[index].OS.os2}`;//+
    elem.querySelector('.card-text').innerHTML = str;//+
});