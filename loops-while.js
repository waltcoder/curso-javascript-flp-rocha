let index = 0;
while (index < 10) {
	console.log('Index é menor que 10');

	// index = index + 1;
	// index += 1;
	// Mesma coisa que acima
	index++;
}

const person = {
	name: 'Walt',
	age: '17',
};

for (property in person) {
	console.log(property);
}
