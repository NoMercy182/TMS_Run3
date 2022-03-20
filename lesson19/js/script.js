"use strict";

// Task 1 -----------------------------------------------------------

const randomObj = {
  color: 'red',
  width: 40,
};

for (let key in randomObj) {
  delete randomObj[key];
}

console.log(randomObj);

// Task 2 -----------------------------------------------------------

const randomObj1 = {
  color: 'black',
  width: 60,
};

function keyInObj(key, obj) {
  return key in obj ? true : false;
}

console.log(keyInObj('color', randomObj1));

// Task 3 -----------------------------------------------------------

const student = {
  name: 'John',
  age: 19,
  isHappy: true
};

for (let key in student) {
  console.log(key);
  console.log(student[key]);
}

// Task 4 -----------------------------------------------------------

const colors = {
  'ru pum pu ru rum': {
      red: 'красный',
      green: 'зеленый',
      blue: 'синий'
  },
};

const {red, blue} = colors['ru pum pu ru rum'];
console.log(red, blue);

// Task 5 -----------------------------------------------------------

const salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  lesha: 664,
  alexandra: 199,
};

const humans = Object.keys(salaries);
let sumSalaries = 0;

for (let key in salaries) {
  sumSalaries += salaries[key];
}

const averageSalary = sumSalaries / humans.length;
console.log(averageSalary);

// Task 6 -----------------------------------------------------------

const usersDB = {
  user01 : {}
};

usersDB.user01.login = prompt('Enter your login:', '');
usersDB.user01.password = prompt('Enter your password:', '');

while (true) {
  let ask1 = prompt('Confirm login:', '');
  let ask2 = prompt('Confirm password:', '');
  if (  ask1 === '' || ask2 === '' || ask1 === null || ask2 === null) {
    alert("You're out");
    break;
  } else if (ask1 === usersDB.user01.login && ask2 === usersDB.user01.password) {
    alert("Welcome");
    break;
  } else {
    alert('Try again');
    let ask1 = prompt('Confirm login:', '');
    let ask2 = prompt('Confirm password:', '');
  }
}

console.log(usersDB);

// Task 1* -----------------------------------------------------------

function footballScore(score) {
  const scoreDB = {
    zero : '0',  
    one : '1',  
    two : '2',  
    three : '3',  
    four : '4',  
    five : '5',  
    six : '6',
    seven : '7',  
    eight : '8',  
    nine : '9',  
  };

  let array = score.split(':');
  let result1;
  let result2;

  for (let key in scoreDB) {
    if (scoreDB[key] == array[0]) {
      result1 = key;
    }
  }

  for (let key in scoreDB) {
    if (scoreDB[key] == array[1]) {
      result2 = key;
    }
  }

  console.log(`${result1}:${result2}`);
}

footballScore('2:5');

// Task 2* -----------------------------------------------------------

let student1 = {
  name: 'Polina',
  age: 27,
};

let student2 = {
  name: 'Polina',
  age: 27,
};

function compareObjects(obj1, obj2) {
  let arrKeys1 = Object.keys(obj1);
  let arrKeys2 = Object.keys(obj2);
  let arrProperty1 = [];
  let arrProperty2 = [];

  for (let key in obj1) {
    arrProperty1.push(obj1[key]);
  }
  
  for (let key in obj2) {
    arrProperty2.push(obj2[key]);
  }

  let string1 = (arrKeys1.concat(arrProperty1)).join('');
  let string2 = (arrKeys2.concat(arrProperty2)).join('');
  
  let result = string1 === string2 ? true : false;
  console.log(result);
}

compareObjects(student1, student2);
