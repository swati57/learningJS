//object literal: fixed value of object
const user = {
    username: 'swati',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database for "+this.username);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username, loginCount, isLoggedIn) {{
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = isLoggedIn;
    // return this; //implicit

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}}

//new created instance of object, which calls constructor function
//if new keyword not used, same user object will get modified
const user1 = new User("swati",12,true)
console.log(user1);
console.log(user1.constructor);