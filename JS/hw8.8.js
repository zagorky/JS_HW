// Выведите на экран на какие дни недели выпадают в 
// этом году официальные государственные праздники

function thisYear() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth.()+1;
    return {day: day, month: month};
}
function checkHoliday(today){
 for ( let i=0; i < holiday.length; i++)
 if (holiday[i].day == today.day && holiday[i].month == today.month )
 return i;
}
let days = [
    'вс',
    'пн',
    'вт',
    'ср',
    'чт',
    'пт',
    'сб'
]
 
let holiday = [
    {   day: 7, 
        month: 1, 
        desc: 'Рождество'
    } ,
    {   day: 23, 
        month: 2, 
        desc: 'День защитника отечества'
    } ,
    {   day: 8, 
        month: 3, 
        desc: 'Международный женский день'
    } ,
    {   day: 1, 
        month: 5, 
        desc: 'Первомай'
    } ,
    {   day: 9, 
        month: 5, 
        desc: 'День Победы'
    } ,
    {   day: 12, 
        month: 6, 
        desc: 'День России'
    } ,
    {   day: 4, 
        month: 11, 
        desc: 'День народного единства'
    } ,
    {   day: 31, 
        month: 12, 
        desc: 'Новый год'} 
];


