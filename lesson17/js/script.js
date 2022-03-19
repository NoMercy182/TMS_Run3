// Homework ------------------------------------------------------------

// Task 1 ------------------------------------------------------------

const stringTrue = 'true';
const isFalse = false;
const NUMBER_17 = 17;
const undefinedVariable = undefined;
const empty = null;

console.log(typeof(stringTrue),
            typeof(isFalse),
            typeof(NUMBER_17),
            typeof(undefinedVariable),
            typeof(empty));

// Task 2 ------------------------------------------------------------

const height = 15;
const width = 20;

if (height > width) {
  console.log(height);
} else {
  console.log(width);
}

// Task 3 ------------------------------------------------------------

for (let i = 1; i <= 20; i += 1) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Task 4 ------------------------------------------------------------

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

const shouldGoToWork = key && documents && pen && (apple || orange); // ??????)))

// Task 5 ------------------------------------------------------------

const userNumber = +prompt('Enter your number:', '');

if (userNumber % 5 === 0 && userNumber % 3 === 0) {
  alert("FizBuz");
} else if (userNumber % 3 === 0) {
  alert('Buz');
} else if (userNumber % 5 === 0) {
  alert("Fiz");
} else {
  alert("ниделица -____-");
}

// Task 6 ------------------------------------------------------------

const yourAge = +prompt('Скажи свой возраст:', '');

if (yourAge > 18) {
  alert('Попей пивка');
} else if (yourAge < 16) {
  alert('Пей колу');
} else if (16 <= yourAge <= 18) {
  alert('Можешь выкурить сигаретку, только маме не говори');
}

// Task 7 ------------------------------------------------------------

let myAsk = prompt('Куда едем?', '');

while(true) {
  switch (myAsk) {
    case 'юг':
      console.log('на юг пойдешь счастье найдешь');
      break;
    case 'север':
      console.log('на север пойдешь много денег найдешь');
      break;
    case 'запад':
      console.log('на запад пойдешь верного друга найдешь');
      break;
    case 'восток':
      console.log('на восток пойдешь разработчиком станешь');
      break;
    default:
      myAsk = prompt('Куда едем?', '');       
  }
}

// Task 1 Hard ------------------------------------------------------------

let str = prompt('Как вас величать?', '');

let arr = str.split(' ');

let userName = arr[0].toLowerCase();
let userSurname = arr[1].toLowerCase();

alert(`Привет, ${userName[0].toUpperCase()}${userName.substring(1)} ${userSurname[0].toUpperCase()}${userSurname.substring(1)}`);

// Task 2 Hard ------------------------------------------------------------

const firstNumber = +prompt('Введи число:', '');
const secondNumber = +prompt('Сколько отнять:', '');
const thirdNumber = +prompt('Сколько прибавить:', '');
const fourthNumber = +prompt('На сколько умножить:', '');
const fifthNumber = +prompt('На сколько разделить от предыдущего результата:', '');

alert(`((((${fifthNumber} - ${secondNumber}) + ${thirdNumber}) * ${fourthNumber}) / ${fifthNumber} = ${(((firstNumber - secondNumber) + thirdNumber) * fourthNumber) / 2})`);

// Task 3 Hard ------------------------------------------------------------

let n = +prompt('Enter your number:', '');
let strr = '';

for (let i = 0; i < n; i += 1) {
  strr += '#';
  console.log(strr);
}
