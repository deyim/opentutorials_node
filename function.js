function compare (a,b){
	return a> b;
}

var a = compare(4,5);
compare(4,a);
compare();

console.log(a);
console.log(compare(4,a));
console.log(compare());
console.log(compare(false,true));