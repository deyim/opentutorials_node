// var Person = function(name){
// 	this.name = name;

// 	Person.list.push(this);
// };

// Person.list=[];
// Person.speakName = function(){
// 	Person.list.forEach(function(person){
// 			console.log(person.name);
// 	});
// }

// var son = new Person("SON");
// var kim = new Person("kim");

// Person.speakName();

var Dog = function(name, age, color){
	this.name = name;
	this.age = age;
	this.color = color;
	this.constructor.totalDog++;
}

Dog.prototype.speakName = function(){
	console.log("hi my name is " + this.name + " and my age is " + this.age);
}

Dog.totalDog = 0;
Dog.printTotalDog = function(){
	console.log("All " , Dog.totalDog);
}

var mong = new Dog("mong", 6, "Black and white");
var mung = new Dog("mung", 3, "white");
mung.speakName();
Dog.printTotalDog();