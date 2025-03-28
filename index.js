//! Уровень 1.1 задачника JavaScript

// 1. Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
// let number = -5;
// if (number < 0) {
//     console.log('Число отрицательное');
// } else if (number === 0) {
//     console.log('Число равно нулю');
// } else {
//     console.log('Число положительное');
// };


//* 2. Дана строка. Выведите в консоль длину этой строки.
// const string = 'какая-то строка';
// console.log(`Длина строки: ${string.length}`);

//* 3. Дана строка. Выведите в консоль последний символ строки.
// const string = 'какая-то строка';
// const lastChar = string[string.length -1];
// console.log(`Послений символ строки: ${lastChar}`);

//* 4. Дано число. Проверьте, четное оно или нет.
// const number = 32;
// if (number % 2 === 0) {
//     console.log(`Число: ${number} четное`);
// } else {
//     console.log(`Число: ${number} нечетное`);
// };

//* 5. Даны два слова. Проверьте, что первые буквы этих слов совпадают.
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

//* 6. Дано слово. Получите его последнюю букву.
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

//! Уровень 1.2 задачника JavaScript

//* 1. Дано число. Выведите в консоль первую цифру этого числа.
// const number = -42;
// const strNumber = String(number);
// let newNumber = strNumber.at(0);
// // Проверка, если число отрицательное
// if (newNumber === '-') {
//     newNumber = strNumber.at(1);
// }
// console.log(newNumber);

//* 2. Дано число. Выведите в консоль последнюю цифру этого числа.
// const number = 42;
// const lastNumber = String(number).at(-1);
// console.log(lastNumber);

//* 3. Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
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

//* 4. Дано число. Выведите количество цифр в этом числе.
// const number = 42;
// const strNumber = String(number);
// const numberOfDigits = strNumber.length
// console.log(`Количество цифр в числе равно ${numberOfDigits}`);

//* 5. Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
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

//! Уровень 1.3 задачника JavaScript

//* 1. Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
// const str = 'frontend';
// if (str.length > 1) {
//     console.log(str[str.length -2]);
// } else if (str.length === 1) {
//     console.log('В строке только один символ');
// } else {
//     console.log('Пустая строка');
// }

//* 2. Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
// const firstNumber = 30;
// const secondNumber = 10;

// if (firstNumber === 0 || secondNumber === 0) {
//     console.log('Ошибка: ноль делю на число или число делю на ноль');
// } else if (firstNumber % secondNumber === 0) {
//     console.log('Первое число без остатка делится на второе');
// } else {
//     console.log('Первое НЕ делится без остатка на второе');
// }

//! Уровень 1.4 задачника JavaScript

//* 1. Выведите в консоль все целые числа от 1 до 100.
// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }

//* 2. Выведите в консоль все целые числа от -100 до 0.
// for (let i = -100; i <= 0; i++) {
//     console.log(i)
// }

//* 3. Выведите в консоль все целые числа от 100 до 1.
// for (let i = 100; i >= 1; i--) {
//     console.log(i)
// }

//* 4. Выведите в консоль все четные числа из промежутка от 1 до 100.
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }
//* 5. Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//     console.log(i)
//     }
// }
//! Уровень 1.6 задачника JavaScript
//* 2. Дан массив с числами. Найдите сумму квадратов элементов этого массива.
// const arr = [1, 2, 3, 4, 5, 6]
// let sumOfSqueres = 0

// for (i = 0; i < arr.length; i++) {
//     let squereOfNumber = arr[i] * arr[i]
//     sumOfSqueres += squereOfNumber
// }
// console.log(sumOfSqueres)

// через метод reduce
// const arr = [1, 2, 3, 4, 5, 6]
// const sumOfSquares = arr.reduce((sum, num) => sum + num * num, 0);

// console.log(sumOfSquares)

//* 3. Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
// const arr = [1, 2, 3, 4, 5, 6, 7]
// let sumOfSquareRoots = 0
// for (i = 0; i < arr.length; i++) {
//     let squereRoots = Math.sqrt(arr[i])
//     sumOfSquareRoots += squereRoots
// }
// console.log(sumOfSquareRoots)

//* 4. Дан массив с числами. Найдите сумму положительных элементов этого массива.
// const arr = [1, 2, 3, 4, 5, 6, -7]
// let sumOfPositive = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sumOfPositive += arr[i]
//     }
// }
// console.log(sumOfPositive)

// с помощью reduce
// const arr2 = [1, 2, 3, 4, 5, 6, -7];
// const sumOfPositive2 = arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);

// console.log(sumOfPositive);


//* 5. Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
// const arr = [1, 2, -3, 4, 5, 6, -7, 14, 13, 78, 36, 4, 49]
// let sumElements = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] < 10) {
//         sumElements += arr[i]
//     }
// }
// console.log(sumElements)

//! Уровень 1.7 задачника JavaScript
//* 1. Дана строка: 'abcde' Получите массив букв этой строки.
// const str = 'abcde'
// const arr = str.split('')
// console.log(arr)
//* 2. Дано некоторое число: 12345 Получите массив цифр этого числа.
// const someNumber = 12345
// Использование Array.from()
// const arr = Array.from(String(someNumber), Number)
// console.log(arr)

// Использование split('') и map(Number)
// const arr = String(someNumber).split('').map(Number)
// console.log(arr)

// Использование оператора расширения (spread operator) и map(Number)
// const arr = [...String(someNumber)].map(Number)
// console.log(arr)
//* 3. Дано некоторое число: 12345 Переверните его: 54321
// const someNumber = 12345;
// const arr = someNumber.toString().split('').reverse().join('');
// const reversedNum = parseInt(arr) * Math.sign(someNumber); //  Math.sign() знак исходного числа
// console.log(reversedNum);
//* 4. Дано некоторое число: 12345 Найдите сумму цифр этого числа.
// function sumOfDigits(number) {
//   // Преобразуем число в строку
//   const str = number.toString();
  
//   // Разбиваем строку на массив символов (цифр)
//   const digits = str.split('');
  
//   // Преобразуем каждый символ обратно в число и суммируем
//   const sum = digits.reduce((acc, digit) => acc + Number(digit), 0);
  
//   return sum;
// }

// function sumOfDigits(number) {
//   const str = Math.abs(number).toString(); // Игнорируем знак
//   let sum = 0;
  
//   for (const char of str) {
//     sum += Number(char); // Преобразуем символ в число и добавляем к сумме
//   }
  
//   return sum;
// }
// рекурсия
// function sumOfDigits(number) {
//   number = Math.abs(number); // Игнорируем знак
//   if (number < 10) return number; // Базовый случай: если число состоит из одной цифры
//   return (number % 10) + sumOfDigits(Math.floor(number / 10)); // Рекурсивный случай
// }

// while
// function sumOfDigits(number) {
//   number = Math.abs(number);
//   let sum = 0;

//   while (number > 0) {
//     sum += number % 10; // Добавляем последнюю цифру числа к сумме
//     number = Math.floor(number / 10); // Убираем последнюю цифру числа
//   }
//   return sum;
// }
// console.log(sumOfDigits(1234567))

//! Уровень 1.8 задачника JavaScript
//* 1. Заполните массив целыми числами от 1 до 10
// const arr = [];
// for (let i = 1; i < 10; i++) {
//   arr.push(i); 
// }
// console.log(arr)
//* 2. Заполните массив четными числами из промежутка от 1 до 100.
// const arr = [];
//----------------------------------
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     arr.push(i);
//   }
// }
//----------------------------------
// for (let i = 2; i <= 100; i += 2) {
//   arr.push(i);
// }
// console.log(arr);
//* 3. Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34] округлите эти дроби до одного знака в дробной части
// const arr = [1.456, 2.125, 3.32, 4.1, 5.34];
//----------------------------------
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Math.round(arr[i] * 10) / 10;
// }
// console.log(arr)
//---------------------------------- map() и toFixed()
// const rounded = arr.map(num => Number(num.toFixed(1)));
// console.log(rounded);
//---------------------------------- Math.round()
// const rounded = arr.map(num => Math.round(num * 10) / 10);
// console.log(rounded)
//! 1.9