'use strict';

// Виконуй це завдання у файлі task-2.js +


// Оголоси функцію getShippingMessage, яка очікує три параметри: 

// country — рядок, країна доставки
// price — число, вартість товару
// deliveryFee — число, вартість доставки


// Значення параметрів задаються під час виклику. Функція повертає рядок:

// Shipping to <country> will cost <totalPrice> credits



// Де:

// <country> — країна доставки
// <totalPrice> — загальна вартість, що включає вартість товару і доставки


// Встав код нижче після оголошення функції для перевірки. Залиш його для перевірки ментором.

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"



// Вимоги

// Оголошено функцію getShippingMessage(country, price, deliveryFee).
// Виклик getShippingMessage("Australia", 120, 50) повертає "Shipping to Australia will cost 170 credits".
// Виклик getShippingMessage("Germany", 80, 20) повертає "Shipping to Germany will cost 100 credits".
// Виклик getShippingMessage("Sweden", 100, 20) повертає "Shipping to Sweden will cost 120 credits".
// Виклик з будь-якими валідними аргументами повертає правильне значення.
// Результати всіх викликів виведено в консоль.


function getShippingMessage(country, price, deliveryFee) {
const totalPrice = price + deliveryFee;
return `Shipping to ${country} will cost ${totalPrice} credits`

}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));


