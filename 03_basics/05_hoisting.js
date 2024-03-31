//hoisting: memory allocation of variables during memory creation phase
//during memory creation phase, the sayHello() fun code is stored in memory
//but the var i is just created with value undefined
//hence on execution, function gets executed but i remains undefined
sayHello();
console.log(i);

function sayHello(){
    console.log("hello");
}

//this wil throw error as function is defined in var keyword and thence value will be undefined during memory creation phase
// var sayHello = function(){
//     console.log("hello");
// }
var i=10;

//let, const values are hoisted but remains unaccessible(temporal deadzone) till values are initialized in them, hense give error
