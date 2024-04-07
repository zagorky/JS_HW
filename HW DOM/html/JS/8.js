// Разместите на странице кнопку, по нажатию на 
// которой открывается окно с формой (окно взять в 
// бутстрап). В форме пользователь может выбрать 
// цвет текста и цвет фона. При нажатии на кнопку 
// «Ок» цвета страницы устанавливаются в выбранные.

let backColor = document.getElementById("backColor"); // на всякий случай
let textColor = document.getElementById("textColor"); // на всякий случай

// притягиваю определенные html элементы к переменным, на всякий случай

let textGreen = document.getElementById("textGreen"); 
let textBrown = document.getElementById("textBrown");
let textPurple = document.getElementById("textPurple");
let backPink = document.getElementById("backPink");
let backYellow = document.getElementById("backYellow");
let backBlue = document.getElementById("backBlue");


//пытаюсь сделать так , чтобы при нажатии на определенную радио-кнопку
// возвращался определенный цвет и применялся к стилю страницы

//пытаюсь поменять цвет текста
let radio1 = document.querySelectorAll(`input[name="rad1"]`); 
let button = document.getElementsByClassName(".btn btn-primary");
button.addEventListener('click', function(){
    for ( let rad1 of radio1){
        if (rad1.checked){
            if (document.getElementById("textGreen") === rad1.checked)
            return document.querySelector(".coloredItem").style.color = `#89BFC5`;
            else if(document.getElementById("textBrown") === rad1.checked)
            return document.querySelector(".coloredItem").style.color = `#6E6739`;
            else if(document.getElementById("textPurple") === rad1.checked)
            return document.querySelector(".coloredItem").style.color = `#9A3BBC`;
        }
    }
});

//пытаюсь поменять цвет фона

let radio2 = document.querySelectorAll(`input[name="rad2"]`);
button = document.getElementsByClassName(".btn btn-primary");
button.addEventListener('click', function(){
    for ( let rad2 of radio1){
        if (rad2.checked){
            if (document.getElementById("backPink") === rad2.checked)
            return document.body.style.backgroundColor = `#7C467B`;
            else if(document.getElementById("backYellow") === rad2.checked)
            return document.body.style.backgroundColor = `#D2CBA5`;
            else if(document.getElementById("backBlue") === rad2.checked)
            return document.body.style.backgroundColor = `#799CE4`;
        }
    }
});

//ничего не работает из за модального окна?
