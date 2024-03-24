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
    let week = 
    [
        'воскресенье',
        'понедельник', 
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота'
    ];
    let curr = week[day.getDay()];
    let prev = week[day.getDay()+6];
    let next = week[day.getDay()+1];
return  {
         'Prev' : prev ,
         'Curr' : curr ,
         'Next' : next ,
        }
}
days = checkDay(dateToday);
console.log(days);