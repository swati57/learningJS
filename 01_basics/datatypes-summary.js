//primitive

//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
//Symbol = unique
const id=Symbol('123');
const iid=Symbol('123');
console.log(id === iid); //false

//bigint
const bigNum = 23242323454335322n
console.log(typeof bigNum);

//Non primitive - Reference type
 
//Arrays, Object, Functions
const hero = ["shaktiman", "avenger"];
let myObj = {
    name: "Swati",
    age: "20"
}

const myFun = function(){
    console.log("Hello world");
}

//type of null is object
console.log(typeof null); //object
console.log(typeof myFun); //function

//stack(primitive), heap memory(non primitive)

//stack
let name = "Swati"
let newName = name //copy of name is created as its primitive datatype
newName="Sweta"
console.log(name);
console.log(newName);

//heap provides reference of object 
let user = {
    name: "Swati",
    ahe: 22
};
let user1 = user
user1.name = "Abhay"
console.log(`${user.name} ${user1.name}`);