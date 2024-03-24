// Выведите на экран на какие дни недели выпадают в 
// этом году официальные государственные праздники

let week = [
    'вс',
    'пн',
    'вт',
    'ср',
    'чт',
    'пт',
    'сб'
];
let month = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
]
 
let holiday = [
    {   day: 7, 
        month: 0, 
    } ,
    {   day: 23, 
        month: 1, 
    } ,
    {   day: 8, 
        month: 2, 
    } ,
    {   day: 1, 
        month: 4, 
    } ,
    {   day: 9, 
        month: 4, 
    } ,
    {   day: 12, 
        month: 6, 
    } ,
    {   day: 4, 
        month: 10, 
    } ,
    {   day: 31, 
        month: 11, 
    } 
];

function getArrDayOff(holiday) { //+
    let arrHoliday = []; //+

    for ( day of holiday) //+
    {
        let days = Object.values(day); //+
        let date = new Date(); //+
        let holidays = new Date(date.getFullYear(),days[1], days[0] ); //+
        arrHoliday.push(holidays.getDay()); //+
    }
    return arrHoliday; //+
}
let arrHoliday = getArrDayOff(holiday); //+
arrHoliday.forEach(function(el,ind){ //+
    let string = `${holiday[ind].day} ${month[holiday[ind].month]} это ${week[el]}`;
    
    return console.log(string);
})

