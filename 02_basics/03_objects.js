// singleton
//Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Harsh",// default name is treated as string "name"
    "full Name": "Harsh Chaudhary",//now it cant be accessed through dot
    [mySym]: "mykey1",// correct syntax
    age: 19,
    location: "Dehradun",
    email: "harsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full Name"]);
console.log(typeof jsUser[mySym]);
console.log(jsUser[mySym]);

jsUser.email = "harsh@hotmail.com"
//Object.freeze(jsUser)
jsUser.email = "harsh@yahoo.com"
console.log(jsUser)
// here in last mySym will be projected as [Symbol(key1)]: 'mykey1'


jsUser.greeting = function(){
    console.log("Hello Js User")
}
jsUser.greeting1 = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(jsUser.greeting1())