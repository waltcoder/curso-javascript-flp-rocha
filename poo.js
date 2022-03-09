class Person {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
	getFullName() {
		console.log(`${this.firstName} ${this.lastName}`);
	}
	static speak() {
		console.log('Hello World');
	}
}

const person = new Person('Walt', 'Doe', 16);

console.log(person);
person.getFullName();
Person.speak();

class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(`${this.name} made some noise`);
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
	}
	speak() {
		console.log(`${this.name} barked!`);
	}
}

const animal = new Animal('Simba');
const dog = new Dog('Bob');
animal.speak();
dog.speak();
