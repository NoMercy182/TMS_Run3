"use strict";

const root = document.getElementById('root');

const toDoContainer = document.createElement('div');
toDoContainer.classList.add('container');

// headerUp --------------------------------------------------

const toDoHeaderUp = document.createElement('div');
toDoHeaderUp.classList.add('headerUp');

const buttonDeleteAll = document.createElement('button');
buttonDeleteAll.classList.add('headerUp__btn');
buttonDeleteAll.textContent = 'Delete All';

const buttonDeleteLast = document.createElement('button');
buttonDeleteLast.classList.add('headerUp__btn');
buttonDeleteLast.textContent = 'Delete last';

const enterToDoField = document.createElement('input');
enterToDoField.classList.add('headerUp__input');
enterToDoField.placeholder = 'Enter todo...' ;

const buttonAdd = document.createElement('button');
buttonAdd.classList.add('headerUp__btn');
buttonAdd.textContent = 'Add';

// headerDown ------------------------------------------------

const toDoHeaderDown = document.createElement('div');
toDoHeaderDown.classList.add('headerDown');

const counterAll = document.createElement('p');
counterAll.classList.add('headerDown__counter');
counterAll.textContent = ' All: 0';

const counterCompleated = document.createElement('p');
counterCompleated.classList.add('headerDown__counter');
counterCompleated.textContent = 'Completed: 0';

const buttonShowAll = document.createElement('button');
buttonShowAll.classList.add('headerDown__btn');
buttonShowAll.textContent = 'Show All';

const buttonShowCompleated = document.createElement('button');
buttonShowCompleated.classList.add('headerDown__btn');
buttonShowCompleated.textContent = 'Show Completed';

const searchField = document.createElement('input');
searchField.classList.add('headerDown__input');
searchField.placeholder = 'Search...';

// ToDoCard ------------------------------------------------

const toDoCard = document.createElement('div');
toDoCard.classList.add('card');

const toDoCardContainerLeft = document.createElement('div');
toDoCardContainerLeft.classList.add('card__containerLeft');

const toDoCardContainerRight = document.createElement('div');
toDoCardContainerRight.classList.add('card__containerRight');

const cardCheckButton = document.createElement('button');
cardCheckButton.classList.add('card__containerLeft__btn');
cardCheckButton.innerText = '✓';

const cardInput = document.createElement('input');
cardInput.classList.add('card__containerLeft__input');
cardInput.placeholder = 'Todo text...';

const cardCloseButton = document.createElement('button');
cardCloseButton.classList.add('card__containerRight__btn');
cardCloseButton.innerText = '✗';

const cardDate = document.createElement('p');
cardDate.classList.add('card__containerRight__date');
cardDate.textContent = 'Date';


// append -----------------------------------------------------
toDoContainer.append(toDoHeaderUp, toDoHeaderDown, toDoCard);
toDoHeaderUp.append(buttonDeleteAll, buttonDeleteLast, enterToDoField, buttonAdd);
toDoHeaderDown.append(counterAll, counterCompleated, buttonShowAll, buttonShowCompleated, searchField);
toDoCard.append(toDoCardContainerLeft, toDoCardContainerRight);
toDoCardContainerLeft.append(cardCheckButton, cardInput);
toDoCardContainerRight.append(cardCloseButton, cardDate);

root.append(toDoContainer);
