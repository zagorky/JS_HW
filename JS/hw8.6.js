// Заполнить массив датами все пятниц, на которые 
// выпадает 13-е число в текущем году.

let date = new Date();
let year = date.getFullYear();
console.log(year);

let checkDate = function () {
    let arrDate = []; 
    for (let month = 0; month <=11; month++) {
    let newDate = new Date(year, month, 13); 
    if (newDate.getDay() === 5) 
    arrDate.push(newDate);
}
return arrDate
}
let arr = [checkDate(year)];
console.log(arr);
