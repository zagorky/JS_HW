// Напишите таймер обратного отсчета для акции.
// В стиле «До конца распродажи осталось 10 дней 
// 12 часов». Конец акции – 1 января 2025 года.

function timer(){
let today = new Date();
let mainDate = new Date(2025,0,1);
let ms =  (mainDate - today);
let lastTimeDay = ( ms / (1000 * 60 * 60 * 24)).toFixed(0);
let lastTimeHour = (( ms / (1000 * 60 * 60 )) % 24).toFixed(0);
let lastTimeMin = (( ms / (1000 * 60 )) % 60).toFixed(0);
let lastTimeSec = (( ms / 1000) % 60).toFixed(0);
let str = `${lastTimeDay} д : ${lastTimeHour} ч : ${lastTimeMin} мин : ${lastTimeSec} сек`;
document.querySelector('.timer').innerHTML = str ;
}
console.log(timer());

setInterval('timer()', 1000); 