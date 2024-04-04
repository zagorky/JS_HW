// Написать функцию, которая в строке, переданной в 
// качестве аргумента, изменяет на противоположные 
// регистры всех символов (например, для строки 
// "Lower OR Upper" должны получить "lOWERoruPPER"). 
// Строка должна браться из абзаца на странице. 
// Вывод результата производится в этот же абзац. 
// Фактически по нажатию на кнопку текст в абзаце 
// должен инвертироваться.

function invertText(){
    let str = document.querySelector(".text").innerHTML;
    let strF = '';
    for(let i=0; i<str.length; i++)
{
    if(str[i].toUpperCase() === str[i]) strF += str[i].toLowerCase();
    else strF += str[i].toUpperCase();
}
return strF;
}
document.querySelector(".text").innerHTML = invertText();
