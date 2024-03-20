class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    //static used to restrict access to object and child
    static createId(){
        return `123`
    }
}

const u1 = new User("swati")
// console.log(u1.createId());

class Teacher extends User{
    constructor(username, email)
    {
        super(username)
        this.email = email
    }
}

const t1 = new Teacher("nivedita", "n@gmail.com")
// console.log(t1.createId());

