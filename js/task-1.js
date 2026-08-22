'use strickt';

// Станція з продажу ремонтних дроїдів готова до запуску — залишилося написати програмне забезпечення для відділу продажів.



// Оголоси функцію makeTransaction, яка очікує два параметри:

// quantity — число, кількість замовлених дроїдів
// pricePerDroid — число, вартість одного дроїда


// Значення параметрів задаються під час виклику. Функція повертає рядок:

// You ordered <quantity> droids worth <totalPrice> credits!



// Де:

// <quantity> — кількість замовлених дроїдів
// <totalPrice> — загальна вартість замовлення (вартість усіх замовлених дроїдів)


// Встав код нижче після оголошення функції для перевірки. Залиш його для перевірки ментором.

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"



// Вимоги

// Оголошено функцію makeTransaction(quantity, pricePerDroid).
// Виклик makeTransaction(5, 3000) повертає "You ordered 5 droids worth 15000 credits!".
// Виклик makeTransaction(3, 1000) повертає "You ordered 3 droids worth 3000 credits!".
// Виклик makeTransaction(10, 500) повертає "You ordered 10 droids worth 5000 credits!".
// Виклик з будь-якими валідними аргументами повертає правильне значення.
// Результати всіх викликів виведено в консоль.



// function makeTransaction(quantity, pricePerDroid) {

//     console.log(`You ordered ${quantity} droids worth ${pricePerDroid} credits!`);

//     return quantity *= pricePerDroid;
// }

// makeTransaction(5, 3000);


function makeTransaction(quantity, pricePerDroid) {

    const totalPrice = quantity * pricePerDroid;
    console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
    
}

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);

