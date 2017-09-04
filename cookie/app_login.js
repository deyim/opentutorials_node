var express = require('express');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var bodyParser = require('body-parser');
var app = express();

var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Rkdska1355ml',
    database: 'login_test'
};
 
var sessionStore = new MySQLStore(options);

app.use(bodyParser.urlencoded({ extended: false}))
app.use(session({
	secret: '$#224##!@#341212#!@#!$12312!@$!',
	resave: false,
	saveUninitialized: true,
	store: sessionStore,
}));

app.get('/auth/login', (req, res)=>{
	var output = `
		<form action="/auth/login" method="post">
			<p>
				<input type="text" name="username" placeholder="username" />
			</p>
			<p>
				<input type="password" name="password" placeholder="password" />
			</p>
			<p>
				<input type="submit"  />
			</p>
		</form>
	`;
	res.send(output);
})

app.post('/auth/login', (req, res)=>{
	var user={
		username: 'yde',
		password: '111',
		displayName: 'YDE'
	}
	var uname = req.body.username;
	var pwd = req.body.password;
	if(uname === user.username && pwd === user.password){
		req.session.displayName = user.displayName;
		res.redirect('/welcome');
	}else{
		res.send('Who are you? <a href="/auth/login">login</a>');
	}
});


app.get('/welcome', (req,res)=>{
	if(req.session.displayName){ //how does it work?!
		res.send(`
			<h1>Hello, ${req.session.displayName}</h1>
			<a href="/auth/logout">logout</a>
			`);
	}else{
		res.send(`
			<h1>Welcome!!</h1>
			<a href="/auth/login">login</a>
		`);
	}

});

app.get('/auth/logout', (req,res)=>{
	delete req.session.displayName;
	res.redirect('/welcome');
})

app.listen(3003, function(){
	console.log('Connected 3003 port!!');
});

















