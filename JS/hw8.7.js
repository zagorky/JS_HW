// Написать скрипт, который при загрузке по разному в 
// зависимости от времени суток приветствует 
// пользователя (например, "доброе утро", "добрый день" 
// или "добрый вечер"). Время, в которое следует 
// говорить то или иное приветствие, выберите сами.
let date = new Date();
let hour =  date.getHours();
console.log(hour);
let greeding = function(hour)
{
 if ( hour >= 4 && hour <= 11 ) 
    return 'Доброе утро'; 
 else if ( hour >= 12 && hour <= 16)  
    return 'Добрый день'; 
 else if( hour >= 17 && hour <= 22) 
    return 'Добрый вечер';
 else  
    return 'Доброй ночи'; 
}

console.log(greeding(hour));