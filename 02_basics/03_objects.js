// 1. singleton: made using constructor
// Object.create()
// 2. object literal- way to declare object(non singleton)
const mySym = Symbol("key1")
//key is always in string form by default, value can be any datatype
const JsUser = {
    "full name": "Swati Agarwal",
    age: 17,
    // mySym: "myKey1" //wrong way to declare unique symbol,  it's taken as string
    [mySym]: "myKey1", //correct
    loction: "Kolkata",
    email: "swato@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday"]
}

console.log(JsUser.email); //not good practice
// console.log(JsUser."full name"); //as here it fails
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym], typeof JsUser[mySym]);

//updating object
JsUser.email = "swatoi@gmail.com"
// Object.freeze(JsUser) //cant update object now
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greeting1 = function(){
    console.log(`Hello JS User, ${this["full name"]}`);
}
console.log(JsUser.greeting());
JsUser.greeting1();