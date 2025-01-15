function sayMyName(){
    console.log("h")
    console.log("a")
    console.log("r")
    console.log("s")
    console.log("h")
}

//sayMyName()

function addTwoNum(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNum(1,2)
//console.log("Result: ", result);

function loginUserMessage(username){
    if(!undefined){// == checks the value are equal or not === checks value but also its type
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage())// if no value is given it gives undefined

function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200, 400, 500, 1000, 2000));

const user = {
    username: "harsh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user)

handleObject({
    username: "sam",
    price: 200
})

const mynewArr = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(mynewArr));
