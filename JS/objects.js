//OBJECTS

//First way
var obj = new Object();
obj.name = 'Simon';
obj.greet = function() {
	console.log('Hi ' + this.name);
}

obj.greet();

//Second way
var obj1 = new Object();
obj1['name'] = 'Charles';
obj1['greet'] = function() {
	console.log('Hi ' + this.name);
}

console.log(obj1);
obj1.greet();

//Third way
var obj2 = {
	name: 'Marta',
	greet: function() {
		console.log('Hi ' + this.name);
	}
};

obj2.greet();

//Fourth way
function Person(name, age)
{
	this.name = name;
	this.age = age;
}

Person.prototype.setName = function(name) {
	this.name = name;
}

Person.prototype.setAge = function(age) {
	this.age = age;
}

Person.prototype.greet = function() {
	console.log('hi ' + this.name);
}

var You = new Person("Erick", 24); 
You.greet();

//Prototype Inheritance
var carlos = Object.create(You);
carlos.setName('Carlos');
carlos.setAge(23);

Person.prototype.sayGoodBye = function() {
	console.log('Bye People! ' + this.name);
}

carlos.sayGoodBye = function() {
		console.log('Bye venus!')
}

carlos.sayGoodBye();








