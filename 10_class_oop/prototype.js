// let myName = "harsh     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        // console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    // console.log(`Hitesh is present in all objects `);
    
}

Array.prototype.heyharsh = function(){
    // console.log(`Harsh says hello`);
}


//heroPower.hitesh()
myHeros.hitesh()
myHeros.heyharsh()
// heroPower.heyharsh()// it cant access this power 

// inheritance
const User = {
    name: "harsh",
    email: "harsh@google.com"
}
const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport ={
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern synatx
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`);
    
}


anotherUsername.trueLength()

"harsh".trueLength()
"icetea".trueLength()