// По заданной пользователем дате рождения сообщить его 
// возраст в годах, месяцах и днях.

let birthday = new Date(prompt('Введите дату рождения гггг-мм-дд'));
let today = new Date();
if (!Boolean(birthday) || isNaN(birthday) ) alert ('Ошибка');
else {
console.log(birthday);
let age = today - birthday;
console.log(` Ваш возраст в годах ${((age / (1000*60*60*24)) / 365).toFixed(1)}` );
console.log(` Ваш возраст в месяцах ${((age / (1000*60*60*24)) / 30).toFixed(1)}` );
console.log(` Ваш возраст в днях ${(age / (1000*60*60*24)).toFixed(1)}` );
}