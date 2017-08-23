var express =require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser')


//jade, bodyparser
app.set('view engine', 'jade');
app.set('views', './views');
app.locals.pretty = true;
app.use(bodyParser.urlencoded({ extended: false}));

//wait for connection to 3000
app.listen(3000, ()=>{
	console.log('connected! 3000 port');
});


//index page
app.get('/', (req,res)=>{

	res.send('hi this is basic web appp');
})

//page using jade engine
app.get('/topic/new', (req,res)=>{
	fs.readdir('./data', function(err, files){
		if(err){
			console.log(err);
			res.status(500).send('Internal server error');
		}

	res.render('new',{topics: files});
	})

})

//receive info. from topic/new
app.post('/topic', (req, res)=>{
	var description = req.body.description;
	var title = req.body.title;
	fs.writeFile('./data/'+title, description,(err)=>{
		if(err){
			console.log(err);
			res.status(500).send('Internal server error');
		}
		res.redirect('/topic/'+title);

	});
})

//topic, topic/id 를 위한 라우팅 
app.get(['/topic', '/topic/:id'], (req,res)=>{
	fs.readdir('./data', function(err, files){
		if(err){
			console.log(err);
			res.status(500).send('Internal server error');
		}
		var id=req.params.id;
		//when id 
		if(id){
			fs.readFile('./data/'+ id, 'utf8', function(err, data){
				if(err){
					console.log(err);
					res.status(500).send('Internal server error');
				}
				res.render('view', {title:id, topics: files, desc: data})
			})
		}else {
			res.render('view', {topics: files, title:'Welcome', desc: 'Hello server'});
		}
	})
})




















