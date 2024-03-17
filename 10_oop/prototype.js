// let myName = "swati    "

// console.log(myName.length);

//question
//create a method to know true length after trim
// console.log(myName.truelength());



let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

/*
function ---
Array    --- Object  -> null
String   ---
// Any property injected to Object will be accessible to all Arrays, function and String
//as these 3 will be searching till the top of hierarchy and will find it in Object
//but if you inject it in array, it wont be accessed in the siblings
*/

//injected to top level object
Object.prototype.swati = function(){
    console.log('Swati is present in all objects');
}

Array.prototype.heySwati = function(){
    console.log("Swati says hello");
}

heroPower.swati()
// heroPower.heySwati()  //not accessible
myHeros.swati()
myHeros.heySwati() 

//inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

//oldway
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"swati".trueLength()
"iceTea".trueLength()
