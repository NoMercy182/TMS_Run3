// Tasks ------------------------------------------------------------

// task 1 ------------------------------------------------------------

const a = +prompt('Enter first number:', '');
const b = +prompt('Enter second number:', '');

let result = (a + b < 4) ? 'Мало' : 'Много';

// task 2 ------------------------------------------------------------

let ask = prompt('Enter Your login:', '');
let answer;
let pass;

if (ask == 'Admin' || ask == 'admin') {
  pass = prompt('Enter password', '');
  
  if (pass == 'main') {
    answer = 'Hello';
  } else if (pass === null || pass === '') {
    answer = 'cancelled';
  } else {
    answer = 'error, try again.';
  }
  
} else if (ask === null || ask === '') {
  answer = 'cancelled';
} else {
  answer = "I don't know you";
}
alert(answer);

// task 3 ------------------------------------------------------------

const userNumber = +prompt('Enter your number: ', '');

for (let i = 0; i < userNumber; i += 1) {
  if (i % 2 != 0) {
    continue;
  }
  console.log(i);
}

// task 4 ------------------------------------------------------------

let myNumber = +prompt('Enter your numberrr: ', '');

while(true) {
  if (myNumber == 100) {
    alert('You got it!!!');
    break;
  } else {
    alert('Missed!');
    myNumber = +prompt('Enter your numberrr: ', '');
  }
}

// task 5 ------------------------------------------------------------

let whatDoing = prompt('Что делаем? "+", "-", "*", "/"');

const x = prompt('Введите первое число: ', '');
const y = prompt('Введите второе число: ', '');

switch(whatDoing) {
  case '+':
    alert(x + y);
    break;
  case '-':
    alert(x - y);
    break;
  case '*':
    alert(x * y);
    break;
  case '/':
    alert(x / y);
    break;
  default:
    alert('Error');        
}

// task 6 ------------------------------------------------------------

const userBrowzer = prompt('Какой у вас браузер?', '');

switch (userBrowzer) {
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert("Мы поддерживаем эти браузеры");
    break;
  case 'Edge':
    alert('У тебя Edge!');
    break;        
}

// task 7 ------------------------------------------------------------

const dogWeight = +prompt('Укажите вес вашей собаки:', '');

if (dogWeight >= 15) {
  console.log("Моя собака делает ГАВ-ГАВ");
} else if (dogWeight > 2 && dogWeight < 15) {
  console.log("Моя собака делает гав-гав");
} else {
  console.log("Моя собака слишком маленькая, чтобы она что-то делала");
} 