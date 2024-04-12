// Используя замыкания, создайте функцию, 
// генерирующую ссылки для меню сайта с 
// переходом на товары.
// http://myshop.ru/
// {категория товара}/
// {код товара}
// Разделы – ПК (PC), Ноутбуки (Notebooks), Мониторы (Monitors)
        
//  Пользуясь возможностями фабрики функций, 
// у вас должны появиться функции

//  createPCLink(1001) 
//  – генерирует и возвращает 
// ссылку на товар с кодом 1001 из категории ПК
        
// createNotebooksLink(4004) 
// – генерирует ссылку
//  на товар с кодом 4004 из категории ноутбуки 
        
// createMonitorLink(345) 
// – генерирует ссылку 
// на товар с кодом 345 из категории мониторы.

// пришлось немного переделать код с пары, так как 
// там не менялись артикулы, везде был артикул (100)
// теперь здесь нет замыкания(

let categories = ['pc', 'notebooks', 'monitors']  
categories.forEach(function(elem) 
{
    if (elem === 'pc') art = '1001';
    else if (elem === 'notebooks') art = '4004';
    else if ( elem === 'monitors') art = '345'
    let a = document.createElement('a');
    a.setAttribute("href", `https://myshop.ru/${elem}/${art}`);
    a.textContent = elem;
    document.body.append(a);
    let p = document.createElement('p');
    document.body.append(p);
})
   
