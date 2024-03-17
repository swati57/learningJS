function setUsername(username){
    //complex db calls
    this.username = username
}

//when a function is called from inside another function, outer function context is not passed.
// so inner func is called and removed from the execution context with no link with the outer function context
//inner function is executed on global context
function createUser(username, email, password){
    // setUsername(username) // doesnot set name
    //use call to hold the reference and send the execution context
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const u1 = new createUser("user1","user1@gmail.com", "123")
console.log(u1);