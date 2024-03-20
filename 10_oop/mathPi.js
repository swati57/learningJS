//change value of PI in JS
//it can't be changed as it is a const
//but there is more behind the scene
//For all objects like Math.PI, it has some property:
// {
// value: 3.141592653589793,
// writable: false,
// enumerable: false,
// configurable: false
// }
// this writable property can't be made true, so value cant be changed

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);

//does not work
// Object.defineProperty(Math, "PI", {
//     writable: true
// })
// Math.PI = 4;
// console.log(descriptor);

//modfy writable

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai ordered");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false, //"name" cant be updated
    enumerable: false //now "name" cant be iterated over
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
