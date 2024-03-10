// for(let i=0;i<10;i++)
// console.log(i);

//for of loop
const arr = [1,2,3,4,5]

// for(const num of arr) {
//     console.log(num);
// }
//for in loop
// for(const num in arr) {
//     console.log(num+" "+arr[num]);
// }

// const greetings = "Hello World"
// for(const greet of greetings) {
//     if(greet == ' ') continue;
//     console.log(`Each char is ${greet}`);
// }

//maps
const map = new Map()
map.set('IN',"India")
map.set('FR',"France")

// console.log(map);

// for(const [key,value] of map)
// {
//     console.log(key+" -> "+value);
// }

//map is not iterable
//does not work
// for(const key in map)
// {
//     console.log(key+" -> "+value);
// }

//does not work
// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for(const [key,value] of myObject)
// {
//     console.log();
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby'
}

// for(const key in myObject){
//     console.log(key+" "+myObject[key]);
// }

//for each loop
const coding = ["js","ruby","java","python","cp"]

//higher order functions
//callback func dont have any name
// coding.forEach( function (item){
//     console.log(item);
// } )
// //arrow fun
// coding.forEach( (item) => {
//     console.log(item);
// })

//ref function
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding = [
    {
        languageName: "javascript",
        langiageFileName: "js"
    },
    {
        languageName: "java",
        langiageFileName: "java"
    },
    {
        languageName: "ruby",
        langiageFileName: "rb"
    }
]

myCoding.forEach((item) =>{
    console.log(item.languageName);
})