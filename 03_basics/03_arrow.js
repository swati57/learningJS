const user = {
    username: "Swati",
    price: 999,

    welcomeMsg: function() {
        console.log(`${this.username}, Welcome `);
        console.log(this);
    }
}

user.welcomeMsg()
user.username = "sam" //changed context
user.welcomeMsg()

console.log(this);  //empty object in global

// function one()
// {
//     console.log(this); //lot of output
//     let username =  "Hi"
//     console.log(this.username); //undefined as this works in objects, not in functions
// }
// one()

// const one = function()
// {
//     console.log(this); //lot of output
//     let username =  "Hi"
//     console.log(this.username); //undefined as this works in objects, not in functions
// }
// one()

// const one = () => 
// {
//     console.log(this); //empty here in arrow func
//     let username =  "Hi"
//     console.log(this.username); //undefined as this works in objects, not in functions
// }
// one()

//arrow func
//curly func + return
// const add = (n,m) => {
//     return n+m
// }

//implicit return: normal return
// const add = (n,m) =>  (n+m)

//object is always returned wrapped in parenthesis
const add = (n,m) =>  ({username:"hari"})
console.log(add(3,4));



