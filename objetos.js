const person = {
	firstNane: 'Walt',
	lastName: 'Johnsley',
	age: 17,
	hobbies: ['Jogar Futebol', 'Programar'],
	dog: {
		name: 'Simba',
		age: 4,
	},
};

// const firstNane = person.firstNane;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

// console.log(firstNane);
// console.log(lastName);
// console.log(age);
// console.log(hobbies);

// Mesma coisa que acima
const { firstNane, lastName, age, hobbies } = person;

// Acessar os items da lista Hobbies
const firstItem = person.hobbies[0];
const secondItem = person.hobbies[1];

console.log(firstItem);
console.log(secondItem);

console.log(person);

const todos = [
	{
		id: 1,
		description: 'Estudar programação',
		isCompleted: false,
	},
	{
		id: 2,
		description: 'Ler',
		isCompleted: true,
	},
	{
		id: 3,
		description: 'Treinar',
		isCompleted: true,
	},
];

// Acessar o último objetos da lista
const descriptionOfLastTodo = todos[2].description;
console.log(descriptionOfLastTodo);
