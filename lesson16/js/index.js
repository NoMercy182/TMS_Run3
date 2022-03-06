"use strict";

// Task 1

let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

// Task 2

let userAge = +prompt('Enter your age: ', '');
let secondsInMinute = 60;
let minuteInHour = 60;
let houresInDay = 24;
let daysInYear = 365;

let myAgeInSeconds = BigInt(userAge * secondsInMinute * minuteInHour * houresInDay * daysInYear);

alert(`your age in seconds: ${myAgeInSeconds}`);

// Task 3

let count = 42;
let userName = '42';

count = String(count);
userName = +userName;
userName = Number(userName);

// Task 4

// let a = 1;
// let b = 2;
// let c = "белых медведей";

// console.log(String(a) + String(b) + ' ' + c);

// Task 5

let access = 'доступ';
let marine = 'морпех';
let ice = 'наледь';
let reproach = 'попрек';
let chopper = 'рубило';

let lengthWords = (`${access}${marine}${ice}${reproach}${chopper}`).length;

console.log(lengthWords);

// Task 6

let str = 'ssd'; 
let num = 182;
let bool = true;

console.log(`Variable: str have type: ${typeof(str)}`);
console.log(`Variable: num have type: ${typeof(num)}`);
console.log(`Variable: bul have type: ${typeof(bool)}`);

// Task 7

let user_name = prompt('Enter your name: ', '');
let user_age = +prompt('Enter your age: ', '');
alert(`Hello, ${user_name}, your age: ${user_age}.`);

// Task 1*

let a = 4;
let b = 3;

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);

// Task 2*

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = `${codeWord1[1]}${codeWord2[1]}${codeWord3[1]}${codeWord4[1]}${codeWord5[1]}`;

console.log(cipher);

// Task 1 - extra

let timeNatan = +prompt('Сколько часов Натан крутил педали?', '');

let litres = Math.floor(timeNatan * 0.5);

alert(`Натан выдул ${litres}л. воды.`);

// Task 2 - extra

let yourYear = +prompt('Enter the year: ', '');
let century;

if (yourYear % 10 == 0) {
  century = Math.floor(yourYear / 100);
  alert(century);
} else {
  century = Math.floor((yourYear / 100) + 1);
  alert(century);
}

// Task 3 - extra

if (yourYear % 4 == 0) {
  alert(`${yourYear} - високосный год`);
} else {
  alert(`${yourYear} - не високосный год`);
}

// Task 4 - extra

let userAmount = +prompt('Enter your amount: ', '');

if (Number.isInteger(userAmount)) {
  alert(`Your amount: $${userAmount}.00`);
} else if (Number.isInteger(userAmount + 0.1) ||
           Number.isInteger(userAmount + 0.2) ||
           Number.isInteger(userAmount + 0.3) ||
           Number.isInteger(userAmount + 0.4) ||
           Number.isInteger(userAmount + 0.5) ||
           Number.isInteger(userAmount + 0.6) ||
           Number.isInteger(userAmount + 0.7) ||
           Number.isInteger(userAmount + 0.8) ||
           Number.isInteger(userAmount + 0.9)) {
  alert(`Your amount: $${userAmount}0`);
} else {
  alert(`Your amount: $${userAmount}`);
}

// Task 5 - extra

let ask = prompt('Что делаем? "+", "-", "*", "/": ', '');
let xx = +prompt('Введите первое число: ', '');
let yy = +prompt('Введите второе число: ', '');

if (ask == '+') {
  alert(xx + yy);
} else if (ask == '-') {
  alert(xx - yy);
} else if (ask == '*') {
  alert(xx * yy);
} else if (ask == '/') {
  alert(xx / yy);
} else {
  alert('Вы ввели какую-то бараду =)');
}
















