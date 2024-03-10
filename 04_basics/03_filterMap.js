// const coding = ["js","ruby","java","python","cp"]

// const values = coding.forEach((item) => {
//     return item
// })
// console.log(values);  //undefined always, for each doesn not return value

//filters
const myNums = [1,2,3,4,5,6,7]

// const values = myNums.filter((num) => num>5);
// const values = []
// myNums.forEach( (num) => {
//     if(num>4){
//         values.push(num)
//     }
// }) 
// console.log(values);

const books = [
    { title: "Book1", genre: "Fiction", publish: 1900, edition: 2000},
    { title: "Book2", genre: "SciFi", publish: 1800, edition: 2010},
    { title: "Book3", genre: "Kids", publish: 1907, edition: 2020},
    { title: "Book4", genre: "Fiction", publish: 1700, edition: 2020},
]
//fiction books
// const userBooks = books.filter( (bk) => {
//     return bk.genre === 'Fiction'
// })

//published after 1900
const userBooks = books.filter( (bk) => bk.publish>=1900 && bk.genre==='Fiction')
console.log(userBooks);

//maps
// const newNums = myNums.map( (num) => num+10)

const newNums = myNums
                .map((num) => num*10)
                .map( (num) => num+1)
                .filter( (num) => num>50)
console.log(newNums);

//reduce
// const myTotal =  myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)

const myTotal = myNums.reduce( (acc,currval) => acc+currval, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 4999
    },
    {
        itemName: "flutter course",
        price: 6999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => item.price+acc,0)
console.log(priceToPay);