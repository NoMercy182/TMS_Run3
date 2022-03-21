'use strict';

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