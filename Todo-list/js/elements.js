export const root = document.getElementById('root');

export const todoApp = document.createElement('div');
todoApp.classList.add('appContainer');

// ------------------------------- navUp ---------------------------------

export const navUp = document.createElement('div');
navUp.classList.add('navUp');

export const btnDeleteAll = document.createElement('button');
btnDeleteAll.classList.add('navUp__btn', 'btn');
btnDeleteAll.textContent = 'Delete All';

export const btnDeleteLast = document.createElement('button');
btnDeleteLast.classList.add('navUp__btn', 'btn');
btnDeleteLast.textContent = 'Delete Last';

export const toDoInput = document.createElement('input');
toDoInput.classList.add('navUp__input', 'input');
toDoInput.placeholder = 'Enter To Do ...';

export const btnAdd = document.createElement('button');
btnAdd.classList.add('navUp__btn', 'btn');
btnAdd.textContent = 'Add';

// ------------------------------- navDown ---------------------------------

export const navDown = document.createElement('div');
navDown.classList.add('navDown');

export const counterAll = document.createElement('p');
counterAll.classList.add('navDown__counter1');
counterAll.innerText = 'All: 0';

export const counterCompleted = document.createElement('p');
counterCompleted.classList.add('navDown__counter2');
counterCompleted.innerText = 'Completed: 0';

export const btnShowAll = document.createElement('button');
btnShowAll.classList.add('navDown__btn', 'btn');
btnShowAll.textContent = 'ShowAll';

export const btnShowCompleted = document.createElement('button');
btnShowCompleted.classList.add('navDown__btn', 'btn');
btnShowCompleted.textContent = 'ShowCompleted';

export const searchInput = document.createElement('input');
searchInput.classList.add('navDown__input', 'input');
searchInput.placeholder = 'Search ...';

export const btnSearchInput = document.createElement('button');
btnSearchInput.classList.add('navDown__btn', 'btn', 'btn-search');
