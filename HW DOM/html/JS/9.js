// Создать страницу с убегающей картинкой. 
// При нажатии на картинку сформировать сообщение 
// со случайно скидкой.


let img = document.querySelector(".runImg");
let timer = setInterval("run()", 1000);
function run(){
    maxLeft = screen.availWidth-400;
    console.log(screen.availHeight);
    maxTop = screen.availHeight-300;
    let top = Math.round(Math.random() * maxTop);
    let left =  Math.round(Math.random() * maxLeft);
    img.style.top =`${top}px`;
    img.style.left = `${left}px`;
}

img.onclick = function() {
    clearInterval(timer);
    img.remove();
    let h = document.createElement("h1");
    h.textContent = `Ваша скидка составляет ${Math.round(Math.random()*50)} %`;
    document.body.append(h);
}