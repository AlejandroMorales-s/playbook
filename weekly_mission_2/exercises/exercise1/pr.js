const pr = {
	title: "My first PR",
	author: "AlejandroMorales-s",
	branchName: "main",
	dateCreated: "09/04/2022",
	status: "open",
	repositoryNameAssociated: "visualpartnership",
	getStatus: function(){
		return `The status of this PR is: ${this.status}`
	},
	getTitleAndAuthor: function(){
		return `This PR ${this.title} was created by ${this.author}`
	}
}

console.log(pr.getStatus());
console.log(pr.getTitleAndAuthor());
