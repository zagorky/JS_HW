// Создать HTML-страницу со случайным цветом текста.
document.querySelector(".text").style.color = `rgb(${getColor(0,255)},${getColor(0,255)},${getColor(0,255)})`;
function getColor(min,max){
    return Math.ceil(Math.random()*(max-min)+min);
}

