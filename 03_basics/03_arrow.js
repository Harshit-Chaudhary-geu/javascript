const user = {
    username: "Harsh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to Website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this)

// function oneChai(){
//     let username = "harsh"
//     console.log(this);   
//     console.log(this.username); // ye object k andr kaam krta hai baas  
// }
// oneChai()

// const chai = function (){
//     let username = "harsh"
//     console.log(this.username)
// }
// chai()

// const chai =  () => {
//     let username = "harsh"
//     console.log(this)
// }
// chai()

// const add2 = (num1,num2) => {
//     return num1 + num2
// }
//const add2 = (num1,num2) => num1 + num2
// const add2 = (num1,num2) => ( num1 + num2 )
const add2 = (num1,num2) => ( {username: "harsh"} )
console.log(add2(3,4))

