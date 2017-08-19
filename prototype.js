var Person = function(name){
	this.name = name;
};

Person.prototype;
Person.prototype.name = "kim";

Person.prototype.speakName = function(number){
	for(var i = 0 ; i < number; i ++)
	{
		console.log("my name is " + this.anme);
	}
};

var kim = new Person("kim");
kim.speakName(10);


// var Person2 = function(name){
// 	if(name)
// 		this.name = name;
// };