var myObject = {
	data: {
		num1: parseInt(process.argv[2]),
		num2: parseInt(process.argv[3]),
	},
	operations: { 
		add: function(){
			return myObject.data.num1 + myObject.data.num2;
		},
		substract: function(){
			return myObject.data.num1 - myObject.data.num2;
		},
		multiply: function(){
			return myObject.data.num1 * myObject.data.num2;
		},
		divide: function(){
			var res = myObject.data.num1 / myObject.data.num2;
			if (!isFinite(res))	return 'Divided by zero!!!';	
			return	res;
		}
	}
}

console.log(myObject.operations.add());