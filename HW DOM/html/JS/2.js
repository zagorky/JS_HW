// Написать программу, которая реализует функции 
// фотоальбома на странице. Добавьте кнопки 
// «Вперед» и «Назад», чтобы можно было листать 
// картинки. Изображения должны листаться «по кругу».

let count = 1;
document.querySelector(".back").onclick = function (){
    count--;
    if (count<1) count = 6;
    loadImg (count);
}
document.querySelector(".forward").onclick = function (){
        count++;
        if (count>6) count = 1;
        loadImg (count);
    }
    function loadImg(count){
        document.querySelector("img").src=`/HW DOM//img/${count}.jpg`;
    }