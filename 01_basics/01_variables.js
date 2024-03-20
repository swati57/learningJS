const id = 123;
let email = "swati@gmail.com"
//use const and let only
//prefer not to use var bcoz of issue in its block scope and function
var pass="123"
city="kolkata" //this is also possible but not preferred(dangerous as it has global scope)
let state //undefined

email = "swati1@gmail.com"
pass="1233"
city="kolkataa"

console.table([id,email,pass,city,state])