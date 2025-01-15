//const tinderUser = new Object() // this is singleton object 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "harsh"
tinderUser.isLoggedIn = false


//console.log(tinderUser);
const regularUser = {
    email: "some@google.com",
    fullName: {
        userFullname: {
            firstname: "harsh",
            lastname: "chaudhary"
        }
    }
}

console.log(regularUser.fullName.userFullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = {
    5: "e",
    6: "f"
}

const obj4 = {...obj1,...obj2,...obj3}// it is used more 
//const obj4 = Object.assign({},obj1,obj2,obj3)// target , source here {} is treated as target and everything will be added to {}. if excluded all the data will be added onto obj1.

console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },{
        id: 3,
        email: "h3@gmail.com"
    }
]

users[1].email
console.log((tinderUser));

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));