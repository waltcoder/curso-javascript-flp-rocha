const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// Multiplicar valores por 2
const numbersMultipliedByTwo = numbers.map(function (number) {
	return number * 2;
});
console.log(numbersMultipliedByTwo);
// Filtrar os números pares
const ages = [23, 4324, 456436, 65785623423, 23423, 32423, 423423423, 34];
const evenAges = ages.filter(function (age) {
	return age % 2 === 0;
});
console.log(evenAges);
// Somar os valores do array
const sumOfAges = ages.reduce(function (age, accumulator) {
	return accumulator + age;
}, 0);

console.log(sumOfAges);
