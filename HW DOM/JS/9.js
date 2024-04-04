// Создать страницу с убегающей картинкой. 
// При нажатии на картинку сформировать сообщение 
// со случайно скидкой.


let img = document.querySelector(".runImg");
let timer = setInterval("run()", 1000);
function run(){
    maxTop = screen.availHeight-150;
    maxLeft = screen.availWidth-200;
    let top = Math.round(Math.random()*maxLeft);
    let left =  Math.round(Math.random()*maxTop);
    img.style.top =` ${top}px`;
    img.style.left = `${left}px `;
}