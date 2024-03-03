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