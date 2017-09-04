var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({
	secret: '$#224##!@#341212#!@#!$12312!@$!',
	resave: false,
	saveUninitialized: true,
}));

app.get('/count', (req, res)=>{
	if(req.session.blah){
		req.session.blah++;
	}else{
		req.session.blah=1;
	}
	res.send('count : ' + req.session.blah);
});

app.listen(3003, function(){
	console.log('Connected 3003 port!!');
});