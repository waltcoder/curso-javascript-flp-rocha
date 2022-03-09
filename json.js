const todos = [
	{
		id: 1,
		description: 'Estudar Programação',
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

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);
