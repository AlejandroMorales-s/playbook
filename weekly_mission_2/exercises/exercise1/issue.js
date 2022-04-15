const issue = {
	title: "Error in code",
	repositoryNameAssociated: "MissionNodeJS",
	status: "closed",
	numberOfComments: 3,
	labels: "bug",
	author: "JuanManuel",
	dateCreated: "11/04/2022",
	lastUpdated: "2 days ago",
	getTitleAndAuthor: function(){
		return `This issue ${this.title} was created by ${this.author}`
	},
	getGeneralInfo: function(){
		return `This issue was created at ${this.dateCreated} and the status is: ${this.status}`
	}
}

console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());
