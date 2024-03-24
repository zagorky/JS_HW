// Напишите функцию, которая вернет предыдущий, 
// текущий и следующий дни недели словом в виде 
// следующего объекта:
// {
// 	next: 'пн',
// 	curr: 'вс',
// 	prev: 'сб',
// }

let dateToday = new Date();
let checkDay = function(day)  {
    let week = [
        'вс',
        'пн', 
        'вт',
        'ср',
        'чт',
        'пт',
        'сб',
    ];
    let curr = week[day.getDay()];
    let prev = week[day.getDay() - 1];
    let next = week[day.getDay() + 1];
return  {'Curr' : curr ,
        'Prev' : prev ,
        'Next' : next ,}
}
days = checkDay(dateToday);
console.log(days);