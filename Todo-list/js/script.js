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

// ------------------------------- Array ---------------------------------

let array = [];
let arrayComleted = [];

// ------------------------------- Functins ---------------------------------

const createCard = () => {
  const text = toDoInput.value;
  todoApp.append(getToDoCard(text));
  toDoInput.value = '';

  array = Array.from(array = document.querySelectorAll('.card'));

  console.log(array);
  counterAll.innerText = `All: ${array.length}`;
};


const deleteAllCard = () => {
  while (true) {
    array.pop();
    if (array.length === 0) {
      break;
    }
  }
  while (true) {
    arrayComleted.pop();
    if (arrayComleted.length === 0) {
      break;
    }
  }
  document.querySelectorAll('.card').forEach(item => item.remove());
  counterAll.innerText = `All: ${array.length}`;
  counterCompleted.innerText = `Completed: ${arrayComleted.length}`;
};

const deleteLastCard = () => {
  document.querySelectorAll('.card')[document.querySelectorAll('.card').length - 1].remove();
  array.pop();
  console.log(array.length);
  console.log(array);
  counterAll.innerText = `All: ${array.length}`;
  counterCompleted.innerText = `Completed: ${arrayComleted.length}`;
};

btnDeleteLast.addEventListener('click', deleteLastCard);

// ------------------------------- card ---------------------------------

function getToDoCard(text) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardLeftContainer = document.createElement('div');
  cardLeftContainer.classList.add('card__LeftContainer');

  const btnCheck = document.createElement('button');
  btnCheck.classList.add('card__LeftContainer__btn', 'btn', 'btnCkeck');
  btnCheck.innerText = '';
  
// ------------------------------- btnChech ---------------------------------

  btnCheck.addEventListener('click', ()=> {
    btnCheck.innerText = btnCheck.innerText === '' ? '✓' : '';
    card.classList.toggle('done');
    arrayComleted = Array.from(arrayComleted = document.querySelectorAll('.done'));
    console.log(arrayComleted);
    counterCompleted.innerText = `Completed: ${arrayComleted.length}`;

  });

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

  // ------------------------------- closeThisCard ---------------------------------

  const closeThisCard = () => {
    if (card.classList.contains('done')) {
      card.remove();
      arrayComleted.pop(card);
    }
    card.remove();
    array.pop(card);
    counterAll.innerText = `All: ${array.length}`;
    counterCompleted.innerText = `Completed: ${arrayComleted.length}`;
  };

  btnClose.addEventListener('click', closeThisCard);

  // ------------------------------- showCompletedCards ---------------------------------

  const showCompletedCards = () => {
    document.querySelectorAll('.card').forEach(item => item.remove());
    arrayComleted.forEach(item => {
      todoApp.append(item);
    });
  };
  btnShowCompleted.addEventListener('click', showCompletedCards);

  // ------------------------------- showAllCards ---------------------------------

  const showAllCards = () => {
    array.forEach(item => {
      todoApp.append(item);
    });
  };
  btnShowAll.addEventListener('click', showAllCards);

  // ------------------------------- deleteLastCard ---------------------------------

  return card;
}

// ------------------------------- ClickButton ------------------------------

btnAdd.addEventListener('click', createCard);
btnDeleteAll.addEventListener('click', deleteAllCard);

// ------------------------------- append -----------------------------------

todoApp.append(navUp, navDown);

navUp.append(btnDeleteAll, btnDeleteLast, toDoInput, btnAdd);

navDown.append(counterAll, counterCompleted, btnShowAll, btnShowCompleted, searchInput);

root.append(todoApp);

// каждому действию приписать новый класс и хуячить его в массив
