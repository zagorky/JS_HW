// Разместите на странице кнопку, по нажатию на 
// которой открывается окно с формой (окно взять в 
// бутстрап). В форме пользователь может выбрать 
// цвет текста и цвет фона. При нажатии на кнопку 
// «Ок» цвета страницы устанавливаются в выбранные.

let backColor = document.getElementById("backColor"); // на всякий случай
let textColor = document.getElementById("textColor"); // на всякий случай

// притягиваю определенные html элементы к переменным

let textGreen = document.getElementById("textGreen"); 
let textBrown = document.getElementById("textBrown");
let textPurple = document.getElementById("textPurple");
let backPink = document.getElementById("backPink");
let backYellow = document.getElementById("backYellow");
let backBlue = document.getElementById("backBlue");


//Я пытаюсь сделать? чтобы при нажатии на определенную радио-кнопку
//(якобы эта кнопка при выборе ее возвращает тру)
// возвращался определенный цвет

function getTextColor(){
    if (Boolean(textGreen) == true) return `#89BFC5`;
    else if (Boolean(textBrown) == true)  return `#6E6739`;
    else if (Boolean(textPurple) == true) return `#9A3BBC`;
}
function getBackColor(){
    if (Boolean(backPink) == true) return `#7C467B`;
    else if (Boolean(backYellow) == true) return `#D2CBA5`;
    else if (Boolean(backBlue) == true) return `#799CE4`;
}

// пытаюсь сделать чтобы на клик на кнопку "применить"
// применялись новые цвета к фону и тексту

window.onload = function() {
    let button = document.getElementsByClassName(".btn btn-primary");
    let text = document.getElementsByClassName(".coloredItem");
    let body = document.getElementsByTagName('body')[0];
    button.onclick = function() {
        body.style.backgroundColor = getBackColor();
        text.style.color = getTextColor();
    };
};

