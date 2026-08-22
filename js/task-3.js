'use strickt';

// Виконуй це завдання у файлі task-3.js


// Оголоси функцію getElementWidth, яка очікує три параметри:

// content — число, ширина контенту
// padding — число, горизонтальний паддінг для кожної зі сторін
// border — число, товщина бордера для кожної зі сторін


// Значення параметрів — числа, цілі або дробові. Функція повертає число — загальну ширину елемента за формулою:

// загальна ширина = content + padding * 2 + border * 2



// Встав код нижче після оголошення функції для перевірки. Залиш його для перевірки ментором.

// console.log(getElementWidth(50, 8, 4)); // 74
// console.log(getElementWidth(60, 12, 8.5)); // 101
// console.log(getElementWidth(200, 0, 0)); // 200



// Вимоги

// Оголошено функцію getElementWidth(content, padding, border).
// Виклик getElementWidth(50, 8, 4) повертає число 74.
// Виклик getElementWidth(60, 12, 8.5) повертає число 101.
// Виклик getElementWidth(200, 0, 0) повертає число 200.
// Функція повертає число, а не рядок.
// Виклик з будь-якими валідними аргументами повертає правильне значення.

function getElementWidth(content, padding, border) {
    const totalWidth = content + (padding * 2 + border * 2);
   return totalWidth;

}

console.log(getElementWidth(50, 8, 4));
console.log(getElementWidth(60, 12, 8.5));
console.log(getElementWidth(200, 0, 0));
