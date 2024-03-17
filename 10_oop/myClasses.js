//es6

// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const u1 = new User("user1","user1@gmail.com", "123")

// console.log(u1.encryptPassword());
// console.log(u1.changeUsername());

//behind the scene

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const u2 = new User("user2","user2@gmail.com", "123")


console.log(u2.encryptPassword());
console.log(u2.changeUsername());