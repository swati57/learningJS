let myDate = new Date()
console.log(myDate.toString());
console.log(typeof myDate);
console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

// let newDate = new Date(2023,0,23);
// console.log(newDate.toDateString());
// let newDate = new Date(2023,0,23,5,3);
// let newDate = new Date("2023-01-23");
let newDate = new Date("01-23-2023");
console.log(newDate.toLocaleString());

let myTimestamp = Date.now()
//both time can be compared now
// console.log(myTimestamp);
// console.log(newDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDatee = new Date()
console.log(newDatee.getDate()); 
//format customization
console.log(newDatee.toLocaleString('default', {
    weekday: "long"
}));

