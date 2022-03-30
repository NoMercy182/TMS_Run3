"use strict";

// Task 1 lesson -------------------------------------------------------------

const arr = [{a: 1}, {id: 2}, {id:3}, {}];

const newArr = arr.filter(value => value.id);
console.log(newArr);

const newArr2 = arr.filter(value => {
  return value.id;
});
console.log(newArr2);

// Task 2 lesson -------------------------------------------------------------

const array1 = [7, 7, 8, 10, 6];
const array2 = [5, 6, 5, 10, 10];
const array3 = [9, 9, 10, 10, 10];

const getAverageScore = (array) => {
  return (array.reduce((accum, value) => accum + value, 0)) / array.length;
};

console.log(getAverageScore(array1));
console.log(getAverageScore(array2));
console.log(getAverageScore(array3));

// Task 3 lesson -------------------------------------------------------------

const numArray = [1, 2, 3, 4, 5];

const newNumArray = numArray.map(value => value * 2);

console.log(newNumArray);

// Task 1 ---------------------------------------------------------------------

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

function showElements(array) {
  array.forEach(function(elem, i, arr) {
    console.log(`index ${i}: ${elem} in arr ${arr}`);
  });
}

showElements(fibonacci);

const elements = (array) => array.forEach((elem, i, arr) => {
  console.log(`index ${i}: ${elem} in arr ${arr}`);
});

elements(fibonacci);

// Task 2 ---------------------------------------------------------------------

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

const modUsers = users.map((value, index) => {
  value = `member ${index + 1}: ${value}`;
  return value;
});

console.log(modUsers);

function modifyUsers (array) {
  let newArr = [];
  newArr = users.map(function(value, index) {
    value = `member ${index + 1}: ${value}`;
    return value;
  });
  return newArr;
}

console.log(modifyUsers(users));

// Task 3 ---------------------------------------------------------------------

const numbers = [7, -4, 32, -90, 54, 32, -21];

const newNumbers = numbers.filter(value => value > 0);
console.log(newNumbers);

const newNumbers2 = numbers.filter(function(value) {
  return value > 0;
});
console.log(newNumbers2);

// Task 4 ---------------------------------------------------------------------

const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

const sumFibonacci = fibonacci2.reduce((accum, value) => accum + value);

console.log(sumFibonacci);

const sumFibonacci2 = fibonacci2.reduce(function(accum, value) {
  return accum + value;
});

console.log(sumFibonacci2);

// Task 5 ---------------------------------------------------------------------

const numbersS = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

console.log(numbersS.find(value => value % 2 === 0));

console.log(numbersS.find(function(value) {
  return value % 2 === 0;
}));

// Task 1 Advanced --------------------------------------------------------------

function Student (name, salary, rate) {
  this.name = name;
  this.salary = salary;
  this.rate = rate;
  this.giveCredit = function() {
    switch (rate) {
      case 'A':
        return salary * 12;
      case 'B':
        return salary * 9;
      case 'C':
        return salary * 6;
      case "D":
        return 0;      
    }
  };
}

const students = [new Student('Jora', 500, 'D'), new Student('Dima', 1200, 'B'),
                  new Student('Lesha', 900, 'B'), new Student('Gleb', 1900, 'A'),
                  new Student('Roma', 1400, 'A'), new Student('Vlad', 700, 'C')];

function giveCreditAll(array) {
  return array.reduce((accum, value) => accum + value.giveCredit(), 0);
}
  
console.log(giveCreditAll(students));

console.log(students[1].giveCredit());

// Task 2 Advanced --------------------------------------------------------------

function attackingThrools (string) {
  const stringToArray = string.split('');

  const array = stringToArray.filter(v => v == ' ' || v == 'b' || v == 'c' ||
                                          v == 'd' || v == 'f' || v == 'g' ||
                                          v == 'h' || v == 'j' || v == 'k' ||
                                          v == 'l' || v == 'm' || v == 'p' ||
                                          v == 'r' || v == 's' || v == 't' ||
                                          v == 'v' || v == 'w' || v == 'x' ||
                                          v == 'z' || v == 'B' || v == 'C' ||
                                          v == 'D' || v == 'F' || v == 'G' ||
                                          v == 'H' || v == 'J' || v == 'K' ||
                                          v == 'J' || v == 'M' || v == 'P' ||
                                          v == 'R' || v == 'S' || v == 'T' ||
                                          v == 'V' || v == 'W' || v == 'X' ||
                                          v == 'Z');
  
  const arrayToString = array.join('');
  return arrayToString;
}

console.log(attackingThrools('Throooools are atacking Us!!!'));

// Task 3 Advanced --------------------------------------------------------------

function accum (string) {
  let arr = string.split('');

  let result = arr.map((value, index) => value.toUpperCase() + value.repeat(index).toLowerCase());
  return result.join('-');
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

// Task 4 Advanced --------------------------------------------------------------

function highAndLow(string) {
  const strToArrNum = string.split(' ').map(value => Number(value));
  const maxNum = (array) => Math.max.apply(null, array);
  const minNum = (array) => Math.min.apply(null, array);
  return `${maxNum(strToArrNum)} ${minNum(strToArrNum)}`;
}

console.log(highAndLow('1 -2 -3 9'));

// Task 5 Advanced --------------------------------------------------------------

function isIsogram(string) {
  const array = string.toLowerCase().split('');
  const obj = {};
  let counter = 1;

  array.forEach(function(value) {
    obj[value] = (value in obj) ? obj[value] + 1 : counter;
  });

  for (let key in obj) {
    if (obj[key] > 1) {
      return false;
    }
  }
  return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));

// Task 6 Advanced --------------------------------------------------------------

const DoTrash = (string) => {
  let array = [];
  for (let i = 0; i < string.length; i += 1) {
    array.push(string.charCodeAt(i));
  }
  let total1 = +array.join('');
  let total2 = +String(total1).split('').map(v => v == 7 ? v = 1 : v).join('');
  return total1 - total2;
};

console.log(DoTrash('ABC'));

// Task 7 Advanced --------------------------------------------------------------
