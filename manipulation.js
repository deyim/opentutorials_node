document.addEventListener("DOMContentLoaded", 
	function(event){
		function sayHello(){
			console.log(this);
			this.textContent = "Said it!!"
			var name = document.getElementById("name").value;

			var message = document.getElementById("name").value + "'s news feed";

			document.getElementById("content").textContent = message;

			title = document.querySelector("h1").textContent;
			title = title + "Hi, " + name;
			document.querySelector("h1").textContent = title;
		}
		document.querySelector("button").addEventListener("click",sayHello);
	}

	

);

//this가 button을 가리킴

//document.querySelector("button").onclick = sayHello();
//마찬가지