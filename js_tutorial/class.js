class User{
	constructor(name, type, email){
		this.name = name;
		this.type = type;
		this.email = email;
	}
	speak(){
		console.log("My name is " + this.name);
	}
}

var user1 = new User('kim', 'admin', 'kim@purdue.edu');
var user2 = new User('son', 'normal', 'son@purdue.edu');

console.log(user1, user2);
user1.speak();
user2.speak();

