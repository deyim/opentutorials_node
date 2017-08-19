class Article{
	constructor(title, contents){
		this.title = title;
		this.contents = contents;
		this.created = new Date();
		
		Article.list.push(this);
	}

	print(){
		console.log(this.title, this.contents, this.created);
	}

	static printAll(){
		console.log("Print all instances of articles");
		for(var i = 0 ; i < Article.list.length ; i++){
			var article = this.list[i];
			article.print();
		}

	}
}

Article.list = [];

var article1 = new Article('title1', 'content1');
var article2 = new Article('title1', 'content2');
article1.print();
Article.printAll();

