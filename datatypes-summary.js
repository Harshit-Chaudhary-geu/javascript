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
