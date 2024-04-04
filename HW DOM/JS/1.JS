// Создать HTML-страницу, которая при загрузке 
// случайным образом выводит одну из четырех 
// карточных мастей.

let cards = ['черви','крести', 'буби', 'пики'];
let n;
let timer = setInterval(function(){
    n = Math.round(Math.random()*3);
    document.querySelector(".card").innerHTML = cards[n];
}, 1000);
