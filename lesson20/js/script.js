// Task ---------------------------------------------------------

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// console.log(styles);
// styles[Math.floor(styles.length / 2)] = 'Классика';
// console.log(styles);

// Task ---------------------------------------------------------

// let arr = [2, -4, 5, -10, 3];
// let result = 0;

// for (let value of arr) {
//   if (value >= 0) {
//     result += value;
//   }
// }

// console.log(result);

// Task ---------------------------------------------------------

// function sumInput() {
//   let arrNumbers = [];
//   let result = 0;

//   while (true) {
//     let ask = prompt('Input a number:', '');
//     console.log(ask);
//     if (ask === '' || ask === null || !isFinite(ask)) {
//       break;
//     } 
//     arrNumbers.push(+ask);
//   }
//   for (let value of arrNumbers) {
//     result += value;
//   }
//   return result;
// } 

// console.log(sumInput());

// Task 1 ---------------------------------------------------------

const colors = ['red', 'green', 'blue'];
console.log(colors.length);

// Task 2 ---------------------------------------------------------

const animals = ['monkey', 'dog', 'cat'];
console.log(animals[(animals.length - 1)]);

// Task 3 ---------------------------------------------------------

const numbers = [5, 43, 63, 23, 90];

while (true) {
  if(numbers.length == 0) {
    break;
  }
  numbers.pop();
}

console.log(numbers);

// Task 4 ---------------------------------------------------------

const students = ['Polina', 'Dasha', 'Masha'];

students.pop();
students.push(`Borya`);
students.shift();
students.unshift(`Andrey`);
console.log(students);

// Task 5 ---------------------------------------------------------

const cats = ['Gachito', 'Tom', 'Batman'];

for (let i = 0; i < cats.length; i += 1) {
  console.log(cats[i]);
}

for (let value of cats) {
  console.log(value);
}

// Task 6 ---------------------------------------------------------

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const allNumbers = evenNumbers.concat(oddNumbers);

for (let i = 0; i < allNumbers.length; i += 1) {
  if (allNumbers[i] == '8') {
    console.log(allNumbers.indexOf(allNumbers[i]));
  }
}

// Task 7 ---------------------------------------------------------

const binary = [0, 0, 0, 0];

const binaryString = binary.join(1);

console.log(binaryString);

// Task 1* ---------------------------------------------------------

function polindromTest(string) {
  let array = [];
  let stringReverse = '';
  for (let value of string) {
    array.push(value);
  }
  stringReverse = (array.reverse()).join('');
  if (stringReverse === string) {
    console.log('true');
  } else {
    console.log('false');
  }
}

polindromTest('esedese');
polindromTest('esw');

// Task 2* ---------------------------------------------------------

const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];

let counter = 0;
let sum0 = 0;
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let value of matrix[0]) {
  sum0 += value;
  counter += 1;
}
for (let value of matrix[1]) {
  sum1 += value;
  counter += 1;
}
for (let value of matrix[2]) {
  sum2 += value;
  counter += 1;
}
for (let value of matrix[3]) {
  sum3 += value;
  counter += 1;
}

console.log((sum0 + sum1 + sum2 + sum3) / counter);

// Task 3* ---------------------------------------------------------

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

let array1 = [];
let array2 = [];

for (let value of mixedNumbers) {
  value >= 0 ? array1.push(value) : array2.push(value);
}

console.log(array1);
console.log(array2);

// Task 4* ---------------------------------------------------------

function arrayDinamic() {
  let array1 = [];
  let array2 = [];
  for (let i = 1; i <= 5; i += 1) {
    array1.push(Math.floor(Math.random()*10));
  }
  console.log(array1);
  for (let value of array1) {
    array2.push(value**3);
  }
  console.log(array2);
}

arrayDinamic();
