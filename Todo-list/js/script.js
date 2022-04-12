import {root, todoApp, navUp, btnDeleteAll, btnDeleteLast, toDoInput, btnAdd, 
        navDown, counterAll, counterCompleted, btnShowAll, 
        btnShowCompleted, searchInput, btnSearchInput} from './elements.js';

// ------------------------------- Arrays ---------------------------------

let cardsArray = [];      // Массив с .card
let arrCounter = [];      // счетчик индекса в объекте cardObj
let comleteCounter = 0;

// ------------------------------- card ---------------------------------

function getToDoCard({id, text, date, isChecked}) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('id', `card-${id}`);

  const cardLeftContainer = document.createElement('div');
  cardLeftContainer.classList.add('card__LeftContainer');

  const btnCheck = document.createElement('button');
  btnCheck.classList.add('card__LeftContainer__btn', 'btn', 'btnCkeck');
  btnCheck.innerText = isChecked ? '✓' : '';
  
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
  cardDate.innerText = date;

  card.append(cardLeftContainer, cardRightContainer);
  cardLeftContainer.append(btnCheck, textArea);
  cardRightContainer.append(btnClose, cardDate);

  // ------------------------------- btnCheck -----------------------------------

  const checkCard = () => {
    cardsArray.filter(item => {
      if (item.id == `card-${id}`) {
        if (item.className == 'card') {
          item.className = 'card done';
          card.classList = 'card done';
          isChecked = true;
          btnCheck.innerText = '✓';
          item.firstChild.firstChild.innerText = '✓';
        } else if (item.className == 'card done') {
        item.className = 'card';
        card.classList = 'card';
        isChecked = false;
        btnCheck.innerText = '';
        item.firstChild.firstChild.innerText = '';
        }
      }
    });
     comleteCounter = cardsArray.filter(item => item.className == 'card done').length;
     counterCompleted.innerText = `Completed: ${comleteCounter}`;
     console.log(cardsArray);
  };

  btnCheck.addEventListener('click', checkCard);

  // ------------------------------- btnClose -----------------------------------
  
  const closeCard = () => {
    cardsArray = cardsArray.filter(item => !(item.id == `card-${id}`)); // -________-
    card.remove();
    counterAll.innerText = `All: ${cardsArray.length}`;
    comleteCounter = cardsArray.filter(item => item.className == 'card done').length;
    counterCompleted.innerText = `Completed: ${comleteCounter}`;
    console.log(cardsArray);
  };

  btnClose.addEventListener('click', closeCard);
  
  return card;
}

// ------------------------------- btnDeleteLast -----------------------------------

const deleteLast = () => {
  cardsArray.pop();
  document.querySelectorAll('.card').forEach(item => item.remove());
  cardsArray.forEach(item => {
    todoApp.append(item);
  });
  counterAll.innerText = `All: ${cardsArray.length}`;
  comleteCounter = cardsArray.filter(item => item.className == 'card done').length;
  counterCompleted.innerText = `Completed: ${comleteCounter}`;
  console.log(cardsArray);
};

btnDeleteLast.addEventListener('click', deleteLast);

// ------------------------------- btnDeleteAll -----------------------------------

const deleteAll = () => {
  cardsArray.splice(0, cardsArray.length);
  document.querySelectorAll('.card').forEach(item => item.remove());
  counterAll.innerText = `All: ${cardsArray.length}`;
  comleteCounter = cardsArray.filter(item => item.className == 'card done').length;
  counterCompleted.innerText = `Completed: ${comleteCounter}`;
  console.log(cardsArray);
};

btnDeleteAll.addEventListener('click', deleteAll);

// ------------------------------- showAll ----------------------------------------

const showAll = () => {
  document.querySelectorAll('.card').forEach(item => item.remove());
  cardsArray.forEach(item => {
    todoApp.append(item);
  });
  counterAll.innerText = `All: ${cardsArray.length}`;
  comleteCounter = cardsArray.filter(item => item.className == 'card done').length;
  counterCompleted.innerText = `Completed: ${comleteCounter}`;
  console.log(cardsArray);
};

btnShowAll.addEventListener('click', showAll);

// --------------------------- btnShowCompleted------------------------------------

const showCompleted = () => {
  document.querySelectorAll('.card').forEach(item => item.remove());
  cardsArray.forEach(item => {
    if (item.className == 'card done') {
      todoApp.append(item);
    }
  });
  console.log(cardsArray);
};

btnShowCompleted.addEventListener('click', showCompleted);

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

//------------------------------- btn-Search --------------------------------

const search = () => {
  document.querySelectorAll('.card').forEach(i => i.remove());
  cardsArray.filter(item => {
    if (item.innerText[0] == searchInput.value[0] ||
        item.innerText[1] == searchInput.value[0]) {
      todoApp.append(item);
    }
  });
  searchInput.value = '';
  console.log(cardsArray);
};

btnSearchInput.addEventListener('click', search);

// ------------------------------- append -----------------------------------

todoApp.append(navUp, navDown);

navUp.append(btnDeleteAll, btnDeleteLast, toDoInput, btnAdd);

navDown.append(counterAll, counterCompleted, btnShowAll, btnShowCompleted, searchInput, btnSearchInput);

root.append(todoApp);
