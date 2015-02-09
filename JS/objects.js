//OBJECTS

var obj = new Object();
obj.name = 'Simon';
obj.greet = function() {
	console.log('Hi ' + this.name);
}

obj.greet();

var obj1 = {
	name: 'Marta',
	greet: function() {
		console.log('Hi ' + this.name);
	}
};

obj1.greet();

function Person(name, age)
{
	this.name = name;
	this.age = age;
}

Person.prototype.greet = function() {
	console.log('hi ' + this.name);
}

var You = new Person("Carlos", 24); 
You.greet();