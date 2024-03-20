const myArr = []
%DebugPrint(myArr)  //run using v8 debug. jsvu in vscode

//twwo types of arrays: continuous, Holey
//these arrays can contain 3 types of element:
//SMI (small integer)
//Packed element
//Double (float, string, function)
//In terms of optimization, continuous arrays are more efficient and 
//optimized for various operations compared to holey arrays.

const arrTwo = [1,2,3,4,5,6]
//Packed_SMI_elements

arrTwo.push(6.0)  //packed double element
//packed double element array can not be converted to packed smi no matter what

arrTwo.push("5")

arrTwo[10]=11
//holey_element

//deep dive into finding element at a specific index e.g. arr[9]
// bound check
//hasOwnProperty(arrTwo ,9)
//hasOwnProperty(arrTwo.protoType ,9)
//hasOwnProperty(Object.prototype ,9)
//hasOwnProperty is one of the most expensive check in js
//holes are very expensive in js


const arrThree = [1,2,3,4,5,6]

// SMI > DOUBLE > PACKED
//H_SMI > H_DOUBLE > H_PACKED  //HOLEY

const arrFour = new Array(3)
//just 3 holes: HOLEY_SMI_ELEMENTS
arrFour[0]='1' //holey_elements
arrFour[1]='2' //holey_elements
arrFour[2]='3' //holey_elements
//not good approach as first holey is created then downgraded by storing string values

//optimized alternative: now it's empty in start so its packed, not holey
const arrFive = []
arrFive.push('1') //packed_element
arrFive.push('2') //packed_element
arrFive.push('3') //packed_element


const arrSix = [1,2,3,4,5]

arrSix.push(NaN) //NaN, infinite push will make it packed_double

