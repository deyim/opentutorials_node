//synchronously sending emails to multiple people
var fs = require('fs');
console.log(1);
var data = fs.readFileSync('data.txt', {encoding: 'utf8'});
console.log(data);

console.log(3);
var data2 = fs.readFile('data.txt', {encoding: 'utf8'}, function(err,data2){
	if(err) throw err;
	console.log(4);
	console.log(data2);
});
console.log(5);
//3->5->4
//readfile 실행이 되자 마자 5가 프린트되고, readFile이 실행이 끝나자마자 4를 프린트하는거지. 

//파일 읽는데 10분이 걸리면 비동기

//asynchronously sending emaails to multiple people
