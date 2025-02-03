const user = {
    username: "harsh",
    loginCount: 8,
    signedIn: true,

    getUserdetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
        
    }
}

const user2 = {
    username: "harsh",
    loginCount: 8,
    signedIn: true,

    getUserdetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`);
       // console.log(this);
        
        
    }
}


//console.log(user.username);
// console.log(user.getUserdetails());
// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("harsh", 12, true)
const userTwo = new User("harshit", 11, false)
console.log(userOne.constructor)
//console.log(userTwo)

// new :-- new object created 
// constructor function is called with new and all the data is passed on
// finally got updated