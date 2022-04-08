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

let cardsArray = [];      // Массив с .card
let arrCounter = [];
let comleteCounter = 0;

Array.from(cardsArray);

// ------------------------------- card ---------------------------------

function getToDoCard(cardObj) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('id', `card-${cardObj.id}`);

  const cardLeftContainer = document.createElement('div');
  cardLeftContainer.classList.add('card__LeftContainer');

  const btnCheck = document.createElement('button');
  btnCheck.classList.add('card__LeftContainer__btn', 'btn', 'btnCkeck');
  btnCheck.innerText = cardObj.isChecked ? '✓' : '';
  
  const textArea = document.createElement('p');
  textArea.classList.add('card__LeftContainer__textArea');
  textArea.innerText = cardObj.text;

  const cardRightContainer = document.createElement('div');
  cardRightContainer.classList.add('card__RightContainer');

  const btnClose = document.createElement('button');
  btnClose.classList.add('card__RightContainer__btn', 'btn', 'btnClose');
  btnClose.innerText = '✗';

  const cardDate = document.createElement('p');
  cardDate.classList.add('card__RightContainer__date');
  cardDate.innerText = cardObj.date;

  card.append(cardLeftContainer, cardRightContainer);
  cardLeftContainer.append(btnCheck, textArea);
  cardRightContainer.append(btnClose, cardDate);

  // ------------------------------- btnCheck -----------------------------------

  btnCheck.addEventListener('click', () => {
    cardObj.isChecked = !cardObj.isChecked;               // переключает true / false
    btnCheck.innerText = cardObj.isChecked ?  '✓' : '';
    card.classList.toggle('done');
    //cardsArray[cardObj.index] = document.getElementById(`card-${cardObj.id}`);
    //cardsArray = cardsArray.filter(Boolean); // чистим от 'empty'
    cardsArray = cardsArray.filter(item => !(item.id == `card-${cardObj.id}`));
    cardsArray.push(document.getElementById(`card-${cardObj.id}`));

    comleteCounter = cardsArray.filter(item => item.className == 'card done').length;
    counterCompleted.innerText = `Completed: ${comleteCounter}`;
    console.log(cardsArray.filter(item => item.className == 'card done').length);
    //console.log(cardsArray);
  });

  // ------------------------------- btnClose -----------------------------------(item.
  
  btnClose.addEventListener('click', () => {
    cardsArray = cardsArray.filter(item => !(item.id == `card-${cardObj.id}`)); // -________-
    card.remove();
    counterAll.innerText = `All: ${cardsArray.length}`;
    comleteCounter = cardsArray.filter(item => item.className == 'card done').length;
    counterCompleted.innerText = `Completed: ${comleteCounter}`;
  });

  return card;
}

// ------------------------------- btnDeleteLast -----------------------------------

btnDeleteLast.addEventListener('click', () => {
  cardsArray.pop();
  document.querySelectorAll('.card').forEach(item => item.remove());
  cardsArray.forEach(item => {
    todoApp.append(item);
  });
  counterAll.innerText = `All: ${cardsArray.length}`;
  comleteCounter = cardsArray.filter(item => item.className == 'card done').length;
  counterCompleted.innerText = `Completed: ${comleteCounter}`;
});

// ------------------------------- btnDeleteAll -----------------------------------

btnDeleteAll.addEventListener('click', () => {
  cardsArray.splice(0, cardsArray.length);
  document.querySelectorAll('.card').forEach(item => item.remove());
  counterAll.innerText = `All: ${cardsArray.length}`;
  comleteCounter = cardsArray.filter(item => item.className == 'card done').length;
  counterCompleted.innerText = `Completed: ${comleteCounter}`;
});

// ------------------------------- showAll ----------------------------------------

btnShowAll.addEventListener('click', () => {
  document.querySelectorAll('.card').forEach(item => item.remove());
  cardsArray.forEach(item => {
    todoApp.append(item);
  });
  counterAll.innerText = `All: ${cardsArray.length}`;
  comleteCounter = cardsArray.filter(item => item.className == 'card done').length;
  counterCompleted.innerText = `Completed: ${comleteCounter}`;
});

// --------------------------- btnShowCompleted------------------------------------

btnShowCompleted.addEventListener('click', () => {
  document.querySelectorAll('.card').forEach(item => item.remove());
  cardsArray.forEach(item => {
    if (item.className == 'card done') {
      todoApp.append(item);
    }
  });
});

// ------------------------------- createCard -------------------------------------

const createCard = () => {
  const text = toDoInput.value;
  toDoInput.value = '';
  let length = arrCounter.push('elem') - 1;
  const cardObj = {
    index: length,
    id: Math.floor(Math.random() * 1000) + 1,
    text: text,
    date: (new Date()).toLocaleString(),
    isChecked: false,
  };
  todoApp.append(getToDoCard(cardObj));
  cardsArray.push(getToDoCard(cardObj));
  counterAll.innerText = `All: ${cardsArray.length}`;
  comleteCounter = cardsArray.filter(item => item.className == 'card done').length;
  counterCompleted.innerText = `Completed: ${comleteCounter}`;
  console.log(cardsArray);
};


btnAdd.addEventListener('click', createCard);

 //------------------------------- searchInput -------------------------------
  //------------------------------- btn-Search --------------------------------

  btnSearchInput.addEventListener('click', () => {
    document.querySelectorAll('.card').forEach(i => i.remove());
    cardsArray.filter(item => {
      if (item.innerText[0] == searchInput.value[0] ||
          item.innerText[1] == searchInput.value[0]) {
        todoApp.append(item);
      }
    });
    searchInput.value = '';
  });

// ------------------------------- append -----------------------------------

todoApp.append(navUp, navDown);

navUp.append(btnDeleteAll, btnDeleteLast, toDoInput, btnAdd);

navDown.append(counterAll, counterCompleted, btnShowAll, btnShowCompleted, searchInput, btnSearchInput);

root.append(todoApp);
