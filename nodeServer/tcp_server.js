  // 서버를 생성하기 위해서 net의 모듈을 상용합니다. 
  // net.createServer를 통해 서버 객체를 생성하고, 
  // listen을 통해 클라이언트가 5000번 포트를 통해 접속 할 수 있도록 동작을 시킵니다. 
  // createServer내부에는 callback함수가 들어있어 사용자가 요청을 하면 해당 함수가 호출이 됩니다. 
  // socket.on을 통해 다양한 기능을 구현할 수 있습니다. 
  // 'data'는  클라이언트가 전송한 데이터를 callback함수에 받아 console에 출력을 해주는 역할을 하고, 
  // 'close'를 통해 클라이언트가 접속이 끊기는 메시지를 출력할 수 있습니다.


var net = require('net');

var server = net.createServer(function(socket){
	console.log(socket.address().address + " connected.");

	//output data from client
	socket.on('data', function(data){
		console.log('rcv: ' + data);
	});

	//disconnection with client
	socket.on('close', function(){
		console.log('connection over');
	});

	//connection message to client
	socket.write('welcome to the server');
});

//에러발생시
server.on('error', function(err){
	console.log('error: ' + err);
});

//port 5000으로 접속 가능하도록 대기
server.listen(5000, function(){
	console.log('listening on 5000....');
});