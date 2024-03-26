// Напишите функцию, которая параметром будет получать
//  дату, а возвращать день недели словом, 
//  соответствующий этой дате.
let date = new Date(prompt('Введите дату гггг-мм-дд'));
let weekDays = [
    'Sunday',
    'Monday', 
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
let checkDay = (date) => weekDays[date.getDay()];

document.write(checkDay(date));