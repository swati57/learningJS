//resizable and heterogenous
const myArr = [4,5.3,true,"swati"]
//const a = new Array(1,2,3,4);
//shallow copy on array copy
const arr = myArr;
arr[0]=0;
// console.log(arr);
// console.log(myArr);

//array method
// myArr.push(6);
// console.log(myArr);
// myArr.pop();

// myArr.unshift(90); //push in begin: tedious task
// console.log(myArr);
// myArr.shift(); //pop from begin
// console.log(myArr);

const ar = myArr.join(); //bind and converted to string

// console.log(ar);

//slice, splice

console.log("Slice A ",myArr);

const arr1 = myArr.slice(1,3);
console.log(arr1);
console.log("B ",myArr);

console.log("Splice A ",myArr);

//splice manipulate arr by removing element from original element
// and also includes last element in the new array
const arr2 = myArr.splice(1,3);
console.log(arr2); 
console.log("B ",myArr);
