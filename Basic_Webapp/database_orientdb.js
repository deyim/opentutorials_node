var OrientDB = require('orientjs');

var server = OrientDB({
	host: 'localhost',
	port: 2424,
	username: 'root',
	password: 'Rkdska1355ae%'
});

var db = server.use('daeun');

db.record.get('#22:0')
.then(function (record){ //if bring the record, then do this~
	//console.log('Loaded record: ', record);
});


//CREATE
var sql = 'SELECT FROM theme 쪼ㄸㄲㄷ';
db.query(sql).then(function(results){
	console.log(results);
})

