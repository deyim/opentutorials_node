class AccountBook{
	constructor(name, author){
		this.name = name;
		this.author = author;
		this.list = [];
		this.total = 0;
		AccountBook.instances.push(this);
	}

	deposit(comment, amount){
		if(this.total + amount < 0 ){
			throw new Error('Not enough balance for ${this.name}');
		}
		this.total += amount;
		this.list.push({comment: comment, amount: amount,});
	}

	print(){
		var result = `====${this.name} by ${this.author} ====\n`;
		for(var i =0 ; i < this.list.length; i++){
			var item = this.list[i];
			result += `${item.amount < 0 ? "출금": "입금"}\t${item.comment}\t${item.amount}\n`
		}
		result += `====        ${this.total}       ====\n`;
		console.log(result);
	}

	/* ''  `` 는 각각 다른 역할을 한다!!! */
}

AccountBook.instances = [];
AccountBook.printAll = function(){
	for(var i = 0 ; i < AccountBook.instances.length; i++){
		var accountBook = AccountBook.instances[i];
		accountBook.print();
	}
}

var ac1 = new AccountBook('장부1', 'Mr. Kim');
ac1.deposit('월급', 300);
ac1.deposit('집세', -150);
var ac2 = new AccountBook('장부2', 'Ms. Yim');

AccountBook.printAll();








