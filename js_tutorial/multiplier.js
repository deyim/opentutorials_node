function multiplyMaker(multiplier){
	var myFunc = function(x){
		return multiplier * x;
	}
	return myFunc;
}

var multiplyBy3 = multiplyMaker(3);
console.log(multiplyBy3(10));
var doubleAll = multiplyMaker(2);
console.log(doubleAll(10));

function doOperation(num, operation){
	return operation(num);
}

var result1 = doOperation(3, multiplyBy3);
var result2 = doOperation(10, doubleAll);

console.log(result1, result2);