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


function createLinkItem(cat){
    return function(art){
         return `https://myshop.ru/${cat}/${art}`
    }
} 
let categories = ['pc', 'notebooks', 'monitors']; 
let art = ['1001','4004','345'];

categories.forEach(function(elem, index) 
{
    let a = document.createElement('a');
    a.setAttribute("href", createLinkItem(elem)(art[index]));
    a.textContent = elem;
    document.body.append(a);
    let p = document.createElement('p');
    document.body.append(p);
})
 
