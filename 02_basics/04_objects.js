//singleton object
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userName: {
            firstName: "Swati",
            lastName: "Agarwal"
        }
    }
}

console.log(regularUser.fullname.userName);

//merging objects
const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}
// const obj3 = {obj1,obj2}  //not correct way
//join obj1 and obj2 into new empty array, as target array is the 1st array
const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);
//another reliable way
const obj4 = {...obj1,...obj2};
console.log(obj4);

const users = [
    {
        id:1,
        email:"h1@gmail.com"
    },
    {
        id:2,
        email:"h2@gmail.com"
    },
    {
        id:3,
        email:"h3@gmail.com"
    }
]

users[1].email
//convert object keys into array, now loop can be used
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
//check if a specific key is there
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//object destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "swati"
}

const {courseInstructor : instructor} = course
console.log(instructor);
