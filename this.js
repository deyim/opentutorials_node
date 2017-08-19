

// function test(){
// 	console.log(this);
// 	this.name = "GJGJ";
// 	console.log(this.name);
// };

// test();
// console.log(this.name);

// console.log(this);


// function Circle(radius){
// 	this.radius = radius;
// }

// var myCircle = new Circle(10);
// console.log(myCircle);


var Circle = {
	radius: 10,
	getArea: function(){
		var self = this;
		console.log(this.radius);
		var increaseRadius = function(){
			self.radius = 30;
		};
		increaseRadius();
		console.log(this.radius);
		return Math.PI * Math.pow(this.radius,2);
	}
};

console.log(Circle.getArea());
