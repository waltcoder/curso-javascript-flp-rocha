/*
const items = document.querySelector('.items');
removendo os items
items.remove();

items.firstElementChild.remove();
items.lastElementChild.remove();

Mudando os valores dos items através do DOM
items.children[1].textContent = '1';
items.lastElementChild.innerHTML = '<h1>Hello World</h1>';
*/

/*
const form = document.querySelector('#form');
const submitButton = document.querySelector('#submitButton');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const items = document.querySelector('.items');
submitButton.addEventListener('click', function (e) {
	e.preventDefault();
	const nameValue = nameInput.value;
	const emailValue = emailInput.alue;
	items.firstElementChild.textContent = nameValue;
	items.children[1].textContent = emailValue;
});
*/

const submitButton = document.querySelector('#submitButton');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

const items = document.querySelector('.items');

submitButton.addEventListener('click', function (e) {
	e.preventDefault();
	const nameValue = nameInput.value;
	const emailValue = emailInput.value;
	if (nameValue === '' || emailValue === '') {
		msg.textContent = 'Campos Inválidos';
		msg.classList = 'msgNoValid';
		setTimeout(() => {
			msg.textContent = '';
			msg.classList = '';
		}, 3000);
		return;
	}
	if (nameValue !== '' || emailValue !== '') {
		msg.textContent = 'Campos válidos';
		msg.classList = 'msgValid';
		setTimeout(() => {
			msg.textContent = '';
			msg.classList = '';
		}, 3000);
	}
	const li = document.createElement('li');
	li.classList = 'item';
	li.innerHTML = `<strong>Nome:</strong> ${nameValue} <br/> <strong>Email:</strong> ${emailValue}`;
	items.appendChild(li);

	nameValue = '';
	emailValue = '';
});
