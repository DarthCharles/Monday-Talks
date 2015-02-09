//Control Structures

//IF
var name = "kittens";
if (name == "puppies") {
	name += "!";
} else if (name == "kittens") {
	name += "!!";
} else {
	name = "!" + name;
}
console.log(name);

//FOR
for (var i = 0; i < 5; i++) {
	console.log(i);

};

//WHILE
while (false) {
  console.log('Nunca saldré de aquí');
}

//DO WHILE
var input;
do {
  input = 4;
  console.log(input);
} while (input < 3);

//SWITCH
var number = 4;
switch(number) {
    case 1:
        console.log(1);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log('No existe');
}
