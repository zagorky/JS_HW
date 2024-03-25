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
    let prev;
    if (day.getDay() == 0) 
    prev = week[day.getDay() + 6];
    else 
     prev = week[day.getDay() - 1];
    let next;
    if (day.getDay() == 6)
    next = week[day.getDay() - 6];
    else
    next = week[day.getDay() + 1];
return  {
         'Prev' : prev ,
         'Curr' : curr ,
         'Next' : next ,
        }
}
days = checkDay(dateToday);
console.log(days);