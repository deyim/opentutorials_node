function makeRepeatFunc(f,x){
	return function(){
		for(var i = 0; i<x; i++){
			f();
		}
	};
}

function printHello(){
	console.log("Hello World");
}

var printHello3 = makeRepeatFunc(printHello, 3);
printHello3();