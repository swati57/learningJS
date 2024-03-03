const name = new String("Swati-Agarwal")
console.log(name);
// console.log(name.__proto__);
// console.log(name.toUpperCase());
// console.log(name.charAt(1));
// console.log(name.indexOf('t'));

const newName = name.substring(0,4);
console.log(newName);

const sliceName = name.slice(-12,4);
console.log(sliceName);

name.replace("wati","weta");
console.log(name);

console.log(name.includes("swati"));

console.log(name.split('-'));