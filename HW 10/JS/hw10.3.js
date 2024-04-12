// Добавьте к предыдущей задаче возможность 
// отправлять размер скидки в процентах. 
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

        function showOrders(action){
            let str = `Зaказ покупателя ${this.fio} составил ${this.price*this.quantity*(100-action)/100}, скидка составила ${action}%`
            let ul = document.createElement('ul');
            document.body.append(ul);
            let li = document.createElement('li');
            li.textContent = str;
            ul.append(li);
            }
        
showOrders.call(orders[0],1);
showOrders.call(orders[1],12);
showOrders.call(orders[2],14.5)
