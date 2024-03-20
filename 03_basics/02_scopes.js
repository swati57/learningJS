//global scope
//var: has scope all over the code file, soshould not be used
//let: has global and block scope as usual
let a=30
if(true) {
    //block scope
    let a=10
    const b=20
    var c=30 //c is accessable outside this scope
}
// console.log(a); //error if a defined inside
// console.log(b); //error
// console.log(c);

function one(){
    const username = "swati"
    function two(){
        const websites = "youtube"
        console.log(username);
    }
    // console.log(websites); //error
    two()
}
one()

//+++++++interesting
console.log(addOne(5)); //fun call before definition works here
//named func
function addOne(num) {
    return num+1
}

//fun call before definition does not works 
//hoisting, execution context
//anonymous func
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5)); 
