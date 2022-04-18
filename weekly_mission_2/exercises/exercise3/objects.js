// Uber class
class uber {
    constructor(username, uberPass, paymentMethods, accountTime) {
        this.username = username;
        this.uberPass = uberPass;
        this.paymentMethods = paymentMethods;
        this.accountTime = accountTime;
    }
    getInfo() {
        return `${this.username} has Uber Pass? ${this.uberPass}`;
    }
}
const profile1 = new uber(
    'Alejandro',
    true,
    ['Credit card', 'Paypal', 'Debit card', 'Cash'],
    '1 year'
);

console.log(profile1.getInfo());


// Facebook class
class fb {
    constructor(username, numberOfFriends, accountTime, posts, likes, comments, shares) {
        this.username = username;
        this.numberOfFriends = numberOfFriends;
        this.accountTime = accountTime;
        this.posts = posts;
        this.likes = likes;
        this.comments = comments;
        this.shares = shares;
    }
    getInfo() {
        return `${this.username} has ${this.numberOfFriends} friends and has ${this.posts} posts!`;
    }
}
const fbProfile = new fb(
    'Alejandro',
    '1.5k',
    '5 years',
    259,
    '1.5k',
    '1k',
    '1k'
);

console.log(fbProfile.getInfo());