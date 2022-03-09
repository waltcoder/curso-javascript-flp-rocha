const sum = 1 + 1;
if (sum === 2) {
	console.log('sum is 2!');
} else if (sum === 3) {
	console.log('sum is 3');
} else {
	console.log('sum is not 2!');
}

// && and - Verifica duas condições
// || or - Verifica uma condição

const sum1 = 23 + 34;
const sum2 = 3 + 3;

if (sum1 === 57 && sum2 === 7) {
	console.log('Opa');
}
if (sum1 === 57 || sum2 === 7) {
	console.log('Opa');
}

const sumFor = 1 + 1;
let number = sumFor === 2 ? 2 : 4;

console.log(sumFor);

const person = 'Walt';

switch (person) {
	case 'Walt':
		console.log('Verdadeiro');
		break;
	case 'Opa':
		console.log('falso');
}
