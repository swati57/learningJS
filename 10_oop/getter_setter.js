class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    //if getter is there, setter should also be there
    //if value assigned at both constructor and get/set, stack will be full
    //use _propertyName inside getter, setter to override values
    //_propertty is private property
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const u1 = new User("user1","user1@gmail.com", "abc")
console.log(u1.password);
console.log(u1.email);
console.log(u1._email);
