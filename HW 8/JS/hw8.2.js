// Напишите функцию, которая сообщит сколько дней 
// осталось до нового года.

let dateToday = new Date(); //+
let dateNY = new Date(dateToday.getFullYear(),0,1); //+
let afterNY = (dateToday - dateNY); //+
let nextNY = dateNY.setFullYear(dateToday.getFullYear()+1); //
let beforeNY = ((nextNY-dateToday) / (1000*60*60*24)).toFixed(1); //
document.write(`  Сегодня ${dateToday} . `);//+
document.write(`  С нового года прошло ${(afterNY / (1000*60*60*24)).toFixed(1)} дней . `); //+
document.write(`  До нового года осталось ${beforeNY} дней . `); //