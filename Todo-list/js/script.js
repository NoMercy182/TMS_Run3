"use strict";

const root = document.getElementById('root');

const todoApp = document.createElement('div');
todoApp.classList.add('appContainer');

// ------------------------------- navUp ---------------------------------

const navUp = document.createElement('div');
navUp.classList.add('navUp');

const btnDeleteAll = document.createElement('button');
btnDeleteAll.classList.add('navUp__btn', 'btn');
btnDeleteAll.textContent = 'Delete All';

const btnDeleteLast = document.createElement('button');
btnDeleteLast.classList.add('navUp__btn', 'btn');
btnDeleteLast.textContent = 'Delete Last';

const toDoInput = document.createElement('input');
toDoInput.classList.add('navUp__input', 'input');
toDoInput.placeholder = 'Enter To Do ...';

const btnAdd = document.createElement('button');
btnAdd.classList.add('navUp__btn', 'btn');
btnAdd.textContent = 'Add';

// ------------------------------- navDown ---------------------------------

const navDown = document.createElement('div');
navDown.classList.add('navDown');

const counterAll = document.createElement('p');
counterAll.classList.add('navDown__counter1');
counterAll.innerText = 'All: 0';

const counterCompleted = document.createElement('p');
counterCompleted.classList.add('navDown__counter2');
counterCompleted.innerText = 'Completed: 0';

const btnShowAll = document.createElement('button');
btnShowAll.classList.add('navDown__btn', 'btn');
btnShowAll.textContent = 'ShowAll';

const btnShowCompleted = document.createElement('button');
btnShowCompleted.classList.add('navDown__btn', 'btn');
btnShowCompleted.textContent = 'ShowCompleted';

const searchInput = document.createElement('input');
searchInput.classList.add('navDown__input', 'input');
searchInput.placeholder = 'Search ...';

const btnSearchInput = document.createElement('button');
btnSearchInput.classList.add('navDown__btn', 'btn', 'btn-search');

// ------------------------------- Arrays ---------------------------------

let array = [];      // Массив с .card
let arrayDone = [];  // Массив с .done
let arrayAll = [];   // Массив с .card и .card .done
let countAll;     
let countDone;

// ------------------------------- card ---------------------------------

function getToDoCard(text) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardLeftContainer = document.createElement('div');
  cardLeftContainer.classList.add('card__LeftContainer');

  const btnCheck = document.createElement('button');
  btnCheck.classList.add('card__LeftContainer__btn', 'btn', 'btnCkeck');
  btnCheck.innerText = '';
  
  const textArea = document.createElement('p');
  textArea.classList.add('card__LeftContainer__textArea');
  textArea.innerText = text;

  const cardRightContainer = document.createElement('div');
  cardRightContainer.classList.add('card__RightContainer');

  const btnClose = document.createElement('button');
  btnClose.classList.add('card__RightContainer__btn', 'btn', 'btnClose');
  btnClose.innerText = '✗';

  const cardDate = document.createElement('p');
  cardDate.classList.add('card__RightContainer__date');
  cardDate.innerText = (new Date()).toLocaleString();

  card.append(cardLeftContainer, cardRightContainer);
  cardLeftContainer.append(btnCheck, textArea);
  cardRightContainer.append(btnClose, cardDate);

  // ------------------------------- btnCheck -----------------------------------

  btnCheck.addEventListener('click', () => {
    btnCheck.innerText = btnCheck.innerText === '' ? '✓' : '';
    card.classList.toggle('done');
    array = Array.from(array = document.querySelectorAll('.card:not(.done)'));
    arrayDone = Array.from(document.querySelectorAll('.done'));
    countDone = arrayDone.length;
    counterCompleted.innerText = `Completed: ${countDone}`;
  });

  // ------------------------------- btnClose -----------------------------------

  btnClose.addEventListener('click', () => {
    card.remove();
    array = Array.from(array = document.querySelectorAll('.card:not(.done)'));
    arrayDone = Array.from(document.querySelectorAll('.done'));
    countDone = arrayDone.length;
    countAll = array.length + arrayDone.length;
    counterAll.innerText = `All: ${countAll}`;
    counterCompleted.innerText = `Completed: ${countDone}`;
    arrayAll.pop();
  });

  return card;
}

// ------------------------------- btnDeleteLast -----------------------------------

btnDeleteLast.addEventListener('click', () => {
  document.querySelectorAll('.card')[document.querySelectorAll('.card').length - 1].remove();
  array = Array.from(array = document.querySelectorAll('.card:not(.done)'));
  arrayDone = Array.from(document.querySelectorAll('.done'));
  countDone = arrayDone.length;
  countAll = array.length + arrayDone.length;
  counterAll.innerText = `All: ${countAll}`;
  counterCompleted.innerText = `Completed: ${countDone}`;
  arrayAll.pop();
});

// ------------------------------- btnDeleteAll -----------------------------------

btnDeleteAll.addEventListener('click', () => {
  document.querySelectorAll('.card').forEach(item => item.remove());
  array = [];
  arrayDone = [];
  arrayAll = [];
  countDone = arrayDone.length;
  countAll = array.length + arrayDone.length;
  counterAll.innerText = `All: ${countAll}`;
  counterCompleted.innerText = `Completed: ${countDone}`;
});

// ------------------------------- showAll ----------------------------------------

btnShowAll.addEventListener('click', () => {
  arrayAll.forEach(item => todoApp.append(item));
  countDone = arrayDone.length;
  countAll = array.length + arrayDone.length;
  counterAll.innerText = `All: ${countAll}`;
  counterCompleted.innerText = `Completed: ${countDone}`;
});

// --------------------------- btnShowCompleted------------------------------------

btnShowCompleted.addEventListener('click', () => {
  arrayAll = [...array, ...arrayDone];
  document.querySelectorAll('.card').forEach(item => item.remove());
  arrayDone.forEach(item => {
    todoApp.append(item);
  });
});

// ------------------------------- createCard -------------------------------------

const createCard = () => {
  const text = toDoInput.value;
  todoApp.append(getToDoCard(text));
  toDoInput.value = '';
  array = Array.from(array = document.querySelectorAll('.card:not(.done)'));
  arrayDone = Array.from(document.querySelectorAll('.done'));
  arrayAll = [...array, ...arrayDone];
  countAll = array.length + arrayDone.length;
  counterAll.innerText = `All: ${countAll}`;
};

btnAdd.addEventListener('click', createCard);

 //------------------------------- searchInput -------------------------------
  //------------------------------- btn-Search --------------------------------

  btnSearchInput.addEventListener('click', () => {
    document.querySelectorAll('.card').forEach(i => i.remove());
    arrayAll.filter(item => {
      if (item.innerText[0] == searchInput.value[0] ||
          item.innerText[1] == searchInput.value[0]) {
        todoApp.append(item);
      }
    });
  });

// ------------------------------- append -----------------------------------

todoApp.append(navUp, navDown);

navUp.append(btnDeleteAll, btnDeleteLast, toDoInput, btnAdd);

navDown.append(counterAll, counterCompleted, btnShowAll, btnShowCompleted, searchInput, btnSearchInput);

root.append(todoApp);
