"use strict";

// Task 1 -------------------------------------------------------------

function getSum(number) {
  let allSum = 0;
  for (let i = 0; i <= number; i += 1) {
    allSum += i;
  }
  return allSum;
}

console.log(getSum(100));

// Task 2 -------------------------------------------------------------

function getCredit (credit) {
  const lendingRate = 17;
  const years = 5;
  const overpayment = credit * lendingRate * years / 100;
  return overpayment;
}

console.log(getCredit(100));

// Task 3 -------------------------------------------------------------

function trimSting(str, num1, num2) {
  const result = str.slice(num1,num2);
  return result;
}

console.log(trimSting('Oliver', 0, 3));

// Task 4 -------------------------------------------------------------

function getSumNumbers(number) {
  const numberToString = String(number);
  let arr = [];
  let result = 0;
  for (let value of numberToString) {
    arr.push(value);
  }
  for (let i = 0; i < arr.length; i += 1) {
    result += +arr[i];
  }
  return result;
}

// Мне думается есть способ попроще))))

console.log(getSumNumbers(2358));

// Task 5 -------------------------------------------------------------

function getSumSum(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i += 1) {
    if (a === b) {
      sum = a;
    } else {
      sum += i;
    }
  }
  return sum;
}

console.log(getSumSum(10, 10));

// Task 6 -------------------------------------------------------------

function foo() {
  console.log('foo');
}

function boo() {
  console.log('boo');
}

function fooboo(bool, foo, boo) {
  switch (bool) {
    case true:
      foo();
      break;
    case false:
      boo();
      break;
    default:
      console.log('-_______-');
  }
}

fooboo(false, foo, boo);

// Task 1* -------------------------------------------------------------

function triangleOrNot (a, b, c) {
  let result = a + b > c && a + c > b && b + c > a;
  return result;
}
console.log(triangleOrNot(2, 20, 3));
