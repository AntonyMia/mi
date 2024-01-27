let todoInput;
let errorInfo;
let addBtn;
let ulList;
let addNewToDos; //nowo dodany li, nowe zadanie
let popup; //
let popupInfo; //tekst w popupiez  <p class="popup-info"></p>
let todoToEdit; //edytowany todo
let popupInput; //input w popupie
let popupAddBtn; //przycisk zatwierdź w popupie
let popupCloseBtn; //przycisk close w popupie

const main = () => {
	prepareDomeElements();
	prepareDomeEvents();
};
//ta funkcja wywołuje pozostałe funkcje, które są dostępne na dole
const prepareDomeElements = () => {
	todoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.todolist ul');

	popup = document.querySelector('.popup');
	popupInfo = document.querySelector('.popup-info');
	popupInput = document.querySelector('.popup-input');
	popupAddBtn = document.querySelector('.accept');
	popupCloseBtn = document.querySelector('.cancel');
};
//w tej funkcji na górze pobieramy wszystkie elementy
const prepareDomeEvents = () => {
	addBtn.addEventListener('click', addNewToDo);
	ulList.addEventListener('click', checkClick);
};
//w tej funkcji na górze nadajemy nasłuchiwanie
const addNewToDo = () => {
	if (todoInput.value !== '') {
		addNewToDos = document.createElement('li');
		addNewToDos.textContent = todoInput.value;
		ulList.appendChild(addNewToDos);
		createToolsArea();
		todoInput.value = '';
		errorInfo.textContent = '';
	} else {
		errorInfo.textContent = 'Wpisz treść zadania.';
	}
};
const createToolsArea = () => {
	const createDiv = document.createElement('div');
	createDiv.classList.add('tools');
	const btnComplete = document.createElement('button');
	btnComplete.classList.add('complete');
	btnComplete.innerHTML = "<i class='fas fa-check'></i>";
	createDiv.appendChild(btnComplete);
	const btnEdit = document.createElement('button');
	btnEdit.classList.add('edit');
	btnEdit.textContent = 'EDIT';
	createDiv.appendChild(btnEdit);
	const btnDelete = document.createElement('button');
	btnDelete.classList.add('delete');
	btnDelete.innerHTML = "<i class='fas fa-times'></i>";
	createDiv.appendChild(btnDelete);
	//ewentualnie createDiv.append(btnComplete, btnDelete, btnEdit);- coś takiego nie przeszłoby z zapisem createDiv.appendChild
	addNewToDos.appendChild(createDiv);
};

const checkClick = (e) => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed');
		e.target.classList.toggle('completed');
		//powyższy kof ma wyszukać najbliższą zmienna, która jest li
	} else if (e.target.matches('.edit')) {
		editToDO();
	} else if (e.target.matches('.delete')) {
		console.log(`delete`);
	}
};
const editToDO = () => {
	popup.style.display = 'flex';
};
document.addEventListener('DOMContentLoaded', main);
//zabezpieczenie, które powoduje, że skrypy nie uruchomią się, dopóki cała strona nie zostanie wczytana; czyli dopiero kiedy załaduje się cały DOM, odpalamy funkcję main
