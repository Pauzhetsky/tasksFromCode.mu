// Уровень 1.1 задачника JavaScript

// 1. Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
// let number = -5;
// if (number < 0) {
//     console.log('Число отрицательное');
// } else if (number === 0) {
//     console.log('Число равно нулю');
// } else {
//     console.log('Число положительное');
// };

// 2. Дана строка. Выведите в консоль длину этой строки.
// const string = 'какая-то строка';
// console.log(`Длина строки: ${string.length}`);

// 3. Дана строка. Выведите в консоль последний символ строки.
// const string = 'какая-то строка';
// const lastChar = string[string.length -1];
// console.log(`Послений символ строки: ${lastChar}`);

// 4. Дано число. Проверьте, четное оно или нет.
// const number = 32;
// if (number % 2 === 0) {
//     console.log(`Число: ${number} четное`);
// } else {
//     console.log(`Число: ${number} нечетное`);
// };

// 5. Даны два слова. Проверьте, что первые буквы этих слов совпадают.
// const theSame = (str1, str2) => {

//     if (str1.length === 0 || str2.length == 0) {
//         console.log('Одна из строк пустая');
//     }

//     if (str1[0] === str2[0]) {
//         console.log('Первые буквы этих слов совпадают');
//     } else {
//         console.log('Первые буквы этих слов НЕ совпадают');
//     }
// };
// theSame('кошка', 'попугай');
// theSame('апельсин', 'ананас');
// theSame('', 'берёза');

// 6. Дано слово. Получите его последнюю букву.
//Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
// const lastChar = (str) => {
//     if (str.at(-1) === 'ь') {
//         console.log(str.at(-2));
//     } else {
//         console.log(str.at(-1));
//     }
// };
// lastChar('бинокль');
// lastChar('сапог');

// Решение с проверкой на пустую строку.
// const lastChar = (str) => {
//     // Проверяем что строка не пустая
//     if (str.length === 0) {
//         return 'Пустая строка';
//     }
//     //Получаем последний символ строки
//     const lastSymbol = str.at(-1);

//     // Если последний символ мягкий знак
//     if (lastSymbol === 'ь') {
//         return str.at(-2) || '';
//     }
//     // Иначе возвращаем последний символ
//     return lastSymbol;
// };
// console.log(lastChar('сапог'));
// console.log(lastChar(''));       
// console.log(lastChar('кость'));

// Уровень 1.2 задачника JavaScript

// 1. Дано число. Выведите в консоль первую цифру этого числа.
// const number = -42;
// const strNumber = String(number);
// let newNumber = strNumber.at(0);
// // Проверка, если число отрицательное
// if (newNumber === '-') {
//     newNumber = strNumber.at(1);
// }
// console.log(newNumber);

// 2. Дано число. Выведите в консоль последнюю цифру этого числа.
// const number = 42;
// const lastNumber = String(number).at(-1);
// console.log(lastNumber);

// 3. Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
// const number = 42;
// // Преобразовываю число в строку
// const numberOfString = String(number);
// // Получаю первую и последнюю цифры
// const firstCharOfNumber = numberOfString[0];
// const lastCharOfNumber = numberOfString[numberOfString.length - 1]; // Последний символ строки
// // Преобразую симолы обратно в числа и складываю
// const sum = Number(firstCharOfNumber) + Number(lastCharOfNumber);
// console.log(sum);

// Если чисто отрицательное или дробное
// const number = -42.5;
// // Преобразую число в строку
// const numberString = String(number);
// // Убираю знак минуса и точку, если они есть
// const cleanedNumberString = numberString.replace(/[^0-9]/g, '');
// // Регулярное выражение /[^0-9]/g означает, нужно найти все символы в строке, которые не являются цифрами.
// // Второй аргумент '' означает, что все найденные символы (не цифры) будут заменены на ничего, то есть удалены.
// // Получаю первую и последнюю цифры
// const firstCharOfNumber = cleanedNumberString[0];
// const lastCharOfNumber = cleanedNumberString[cleanedNumberString.length - 1];
// // Складываю
// const sum = Number(firstCharOfNumber) + Number(lastCharOfNumber);
// console.log(sum);

// 4. Дано число. Выведите количество цифр в этом числе.
// const number = 42;
// const strNumber = String(number);
// const numberOfDigits = strNumber.length
// console.log(`Количество цифр в числе равно ${numberOfDigits}`);

// 5. Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
// const firstNumber = 42;
// const secondNumber = 48;
// // Преобразую числа в строки
// const stringFirstNumber = String(firstNumber); 
// const stringSecondNumber = String(secondNumber);
// //Сравниваю первые символы строк
// if (stringFirstNumber[0] === stringSecondNumber[0]) {
//     console.log('Первые цифры этих чисел совпадают');
// } else {
//     console.log('Первые цифры этих чисел НЕ совпадают');
// };

// Уровень 1.3 задачника JavaScript

// 1. Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
// const str = 'frontend';
// if (str.length > 1) {
//     console.log(str[str.length -2]);
// } else if (str.length === 1) {
//     console.log('В строке только один символ');
// } else {
//     console.log('Пустая строка');
// }

// 2. Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
// const firstNumber = 30;
// const secondNumber = 10;
// if (firstNumber === 0 || secondNumber === 0) {
//     console.log('Ошибка: ноль делю на число или число делю на ноль');
// } else if (firstNumber % secondNumber === 0) {
//     console.log('Первое число без остатка делится на второе');
// } else {
//     console.log('Первое НЕ делится без остатка на второе');
// }
