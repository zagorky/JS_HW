// Создать HTML-страницу, с блоком приветствия. 
// Фон у блока тем светлее, чем меньше дней до 
// воскресенья. В воскресенье - фон белый. В 
// блоке должно быть размещено сообщение, сколько 
// дней осталось до воскресенья.
let dateToday = new Date();
function getColor(day){
    if (day.getDay() == 0) return 'ffffff';
    else if(day.getDay() == 1) return 'ffdb58';
    else if(day.getDay() == 2) return 'ffe176';
    else if(day.getDay() == 3) return 'ffe792';
    else if(day.getDay() == 4) return 'ffecae';
    else if(day.getDay() == 5) return 'fff3e9';
    else if(day.getDay() == 6) return 'fff9e4';
    }
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
    return curr;
}
let isEndWeek = function(day)  {
    if (day.getDay() == 0) return 'осталось 0 дней'
    else if (day.getDay() == 1) return 'осталось 6 дней'
    else if (day.getDay() == 2) return 'осталось 5 дней'
    else if (day.getDay() == 3) return 'осталось 4 дня'
    else if (day.getDay() == 4) return 'осталось 3 дня'
    else if (day.getDay() == 5) return 'осталось 2 дня'
    else if (day.getDay() == 6) return 'остался 1 день'
}

    document.querySelector(".container").style.background = `#${getColor(dateToday)}`;
    document.querySelector(".weekDay").innerHTML = `<br/> Сегодня ${checkDay(dateToday)}, до конца недели ${isEndWeek(dateToday)}`;
