// Создайте блок с картинкой. Она должна меняться 
// по таймеру каждую секунду. Добавьте 5 картинок, 
// они будут меняться «по кругу».

let images = ['1', '2', '3', '4', '5']
let i = 0;
document.getElementById("imgId");

function roundImg() {
    i++
    if (i >= images.length)
        {
            i = 0;
        }
        imgId.src = `img/${images[i]}.jpg`;
}
setInterval(roundImg,1000);