// Сделайте страницу, на которой сначала не
//  видно ни одной картинки, она выглядит 
//  пустой. Однако стоит набрать на клавиатуре 
//  слово "show", как картинки немедленно 
//  появляются. Если потом набрать "hide", 
//  они исчезают. Текстовые поля не использовать!
let str = '';
document.onkeydown = function(e){
    str +=e.key;
    if(str == 'show') {
    createImg();
    str = '';
}
    if(str == 'hide') {
    deleteImg();
    str = '';
}
}
document.querySelector(".reset").onclick = function(){
    str = '';
}
function createImg(){
    for(let i=1; i<6; i++)
    {
        let div = document.createElement("div");
        document.body.append(div);
        let img = document.createElement("img");
        img.setAttribute("src", `img/${i}.jpg`);
        document.body.append(img);
    }
}
function deleteImg(){
    let img = document.querySelectorAll("img");
    let div = document.querySelectorAll("div");

    for(let i = 0; i<5; i++){
        div[i].remove();
        img[i].remove();
    }
}