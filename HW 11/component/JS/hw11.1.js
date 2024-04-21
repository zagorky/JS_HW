// Создайте компонент “Форма». 
// Компонент должен содержать:
// Объект с описанием формы. Например:

// Класс, конструктор которого получает объект 
// и метод размещения формы на странице.
// Файл index.js, в котором импортируются класс 
// и объект, а далее вызывается метод создания формы.
// Папка css, в которой описаны классы оформления 
// элементов формы.
// Компонент должен размещаться в отдельной папке
//  в проекте. В главной папке проекта создайте файл
//  index.html, в котором подключается только файл index.js 
// компонента.

// Внимание! Ваш класс должен размещать ЛЮБУЮ
//  форму с ЛЮБЫМ количеством элементов.
//


import {formObj} from './form.js'
import {Form} from './classForm.js';
let style = document.createElement('link');
style.setAttribute('rel', 'stylesheet');
style.setAttribute('href', './component/css/form.css');
document.querySelector('head').append(style);
let myForm = new Form(formObj);
myForm.createFormHTML();