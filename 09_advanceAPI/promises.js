const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    // db calls, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "Chai", email: "chai@gmail.com"})
    }, 1000)
})

promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({userName: "swati", password: "123"})
        }
        else {
            reject('Error: something went wrong')
        }
    }, 1000)
})
 
promise4.then((user) => {
    console.log(user);
    return user.userName
}).then((userName) => {
    console.log(userName);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({userName: "javascript", password: "js123"})
        }
        else {
            reject('Error: js went wrong')
        }
    }, 1000)
})

async function consumePromise5(){
    try {
        const response = await promise5
        console.log(response);
    }
    catch(error) {
        console.log(error);
    }
}

consumePromise5()

async function getAllUsers(){
   try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
   }
   catch(error){
    console.log("Error "+error);
   }
}

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))