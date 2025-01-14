// Primitive 

// 7 types  : String , Number , Boalean , null , undefined , Symbol , Bigint

const score = 30
const scoreValue = 100.3

const isLoggedIn = false
const OutsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumb = 23456790986432255n

// Refrence ( Non primitive )

// Array, Objects, Functions

const couples = ["Harsh","Arushi"]

let myObj = {
    name: "Harsh",
    age: 18,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumb);
console.log(typeof couples);



// +++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive) , Heap(Non-Primitive)

//stack -  copy of file is shared over here

let myYoutubeName = "_harshitchaudhary"

let anotherName = myYoutubeName

anotherName = "harsh"

console.log(anotherName);
console.log(myYoutubeName);

// heap - refrence is shared over here

let user1 = {
    email: "xyz@google.com",
    upi: "user1@ybl"
}

let user2 = user1

user2.email = "abc@google.com"

console.log(user1.email);
console.log(user2.email);
