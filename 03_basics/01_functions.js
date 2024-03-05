function greet(name = 'Sam') {//default value
    //undefined if no arg passed
    if(!name)
    {
        console.log("Please enter name");
        return
    }
    console.log(`Hello ${name}`);
}
function add(a,b) {
    return a+b;
}
//rest operator to handle multiple args
function calculateCartPrice(...num1)
{
    return num1 //array of num1 returned
}
const user = {
    name: "hari",
    price: 200
}
function handle(obj)
{
    console.log(`Name: ${obj.name} and price: ${obj.price}`);
}
// greet //function reference
greet() //fun execute 
greet("Swati")
// console.log(add(3,4));
const result = add(3,4);
console.log(result);
console.log(calculateCartPrice(200,300,400));
handle(user)
