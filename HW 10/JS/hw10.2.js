// Вам предоставлен массив объектов с данными о 
// заказах товаров. Напишите функцию, которая 
//выводит в консоль сумму заказа, название 
//товара и фио клиента. Объединять заказы одних 
//и тех же покупателей не нужно.
//Для следующего массива объектов должно быть 
//выведено:
// заказ покупателя иван составил 15000
// заказ покупателя светлана составил 1000
let orders=[
    {
        fio:"Ivan",
        tovar:"phone",
        price:10000,
        quantity:2
    },
    {
        fio:"Peter",
        tovar:"usb",
        price:2300,
        quantity:5
    },
    {
        fio:"Mary",
        tovar:"connector",
        price:100,
        quantity:100
    },
   ]

        function showOrders(){
            let str = `Зaказ покупателя ${this.fio} составил ${this.price*this.quantity}`
            let ul = document.createElement('ul');
            document.body.append(ul);
            let li = document.createElement('li');
            li.textContent = str;
            ul.append(li);
            }
        
        orders.forEach(elem => (showOrders.call(elem)));