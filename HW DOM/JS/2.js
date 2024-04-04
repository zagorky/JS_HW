// Написать программу, которая реализует функции 
// фотоальбома на странице. Добавьте кнопки 
// «Вперед» и «Назад», чтобы можно было листать 
// картинки. Изображения должны листаться «по кругу».

let count = 0;
document.querySelector(".back").onclick = function (){
    count--;
    if (count<1) count = 3;
    loadImg (count);
}
document.querySelector(".forward").onclick = function (){
        count++;
        if (count>3) count = 1;
        loadImg (count);
    }
    function loadImg(count){
        document.querySelector("img").src=`img/js${count}.jpg`;
    }