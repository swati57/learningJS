// inheritence: prototypal behaviour

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password =password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const t1 = new Teacher("Nivedita", "n@gmail.com","123")
t1.addCourse()

const u1 = new User("User1")

u1.logMe()

console.log(t1 === u1); //false
console.log(t1 instanceof User);  //true
