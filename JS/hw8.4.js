// Напишите функцию, которая параметром будет принимать 
// милисекунды, а возвращать количество дней, часов, 
// минут и секунд, соответствующих этим секундам, в 
// виде следующего объекта:
// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }
let ms = new Date();

let checkMSec = function(ms) {

   let day = ms.getDate();
   let hour = ms.getHours();
   let min = ms.getMinutes(); 
   let sec = ms.getSeconds();


 return {
    d : day, 
    h : hour, 
    m : min,
    s : sec
 }
}
console.log(checkMSec(ms));