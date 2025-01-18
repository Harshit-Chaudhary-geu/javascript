const promise1 = new Promise(function(resolve, reject){
    // Do and async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})

promise1.then(function(){
    console.log("Prmoise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const Promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", enail: "chai@example.com"})
    },1000)
})

Promise3.then(function(user){
    console.log(user)
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"Harsh",password: "123"})
        }
        else {
            reject("ERROR: Something went wrong")
        }
    },1000)
})

const username = promise4.then((user)=>{
    console.log(user);
    return user.username
    
})
.then((username)=>{
    console.log(username)
})
.catch(function(eror){
    console.log('error');  
})
.finally(() => console.log("The promise is either resolved or rejected"))


const promise5 = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"javascript",password: "123"})
        }
        else {
            reject("ERROR: Js went wrong")
        }
    },1000)
})

async function consumePromise5(){
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromise5()

// async function getAllUsers(){
//     const response = await fetch('https://api.github.com/users/Harshit-Chaudhary-geu')
//     const data = await response.json()
//     console.log(data);
    
// }
// getAllUsers()

fetch('https://api.github.com/users/Harshit-Chaudhary-geu')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})