var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());

var products = {
	1: {title: 'The history of web'},
	2: {title: 'The next web'},
	3: {title: 'The last web'},
	4: {title: 'The final web'}
};

app.get('/products', (req, res)=>{
	var output = '';
	for(var name in products){
		output += `
			<li>
				<a href="/cart/${name}">${products[name].title}</a>
			</li>
		`
	}
	res.send(`<h1>Products</h1><ul>${output}</ul><a href="/cart">Cart</a>`)
})

app.get('/cart/:id', (req, res)=>{
	var id = req.params.id;
	if(req.cookies.cart){
		var cart = req.cookies.cart
		console.log(1,cart);
	}else{
		var cart = {};
	}
	console.log(cart);
	if(!cart[id]){
		cart[id] = 0;
		console.log(2, cart[id]);
	}
	cart[id] = parseInt(cart[id]) + 1;
	console.log(3, cart[id]);
	res.cookie('cart', cart);
	res.redirect('/cart');
})

app.get('/cart', (req,res)=>{
	var cart = req.cookies.cart;
	if(!cart){
		res.send(`Empty!<br><a href="/products">Product list</a>`)
	}else{
		var output = ' ';
		for(var id in cart){
			output += `<li>${products[id].title} (${cart[id]})</li>`
		}
	}
	res.send(`<h1>Cart</h1>
			<ul>${output}</ul>
			<a href="/products">Product list</a>
		`);
})


app.get('/count', (req, res)=>{
	if(req.cookies.count){
		var count = parseInt(req.cookies.count);
	}else{
		var count = 0
	}
	count = count + 1;
	res.cookie('count', count);
	res.send('count: ' + count);
});

app.listen(3003, function(){
	console.log('Connected 3003 port!!');
})

