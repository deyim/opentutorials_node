function divide(x, y){
	if(y == 0){
		var err = new Error("Cannot divide by 0");
		throw(err);
	}
	return x/y;
}
var a = divide(10, 5);
var b = divide(10, 0);
console.log(a);
console.log(b);

console.log("Error emerged");


