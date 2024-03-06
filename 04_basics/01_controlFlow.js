const email = ""

if(email)
{
    console.log("Got user email");
}
else
{
    console.log("Dont have user email");
}

//falsy values
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN
//  rest all are truthy value
// like these too: "0",'false', " ", [], {}, function(){}

//so for empty arr, check like this
const arr=[]
// if(arr.length==0)
//and for empty object, check like this
const emptyObj = {}
// if(Object.keys(emptyObj).length===0 ){}

//false == 0  //true
//false == ''  //true
//0==''  //true

//nullish Coalescing Operator (??) : null undefined
//callback to check safety if null is returned from somewhere then assign 2nd value to variable
let val1;
val1 = 5 ?? 10
console.log(val1);  //5
val1 = null ?? 10
console.log(val1);  //10

//ternary operator
// condition ? true :false