const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
    
//     return acc + currVal
// }, 0 )// 0 is value of accumulator




const myTotal = myNums.reduce( (acc,currVal) => acc + currVal, 0 )

console.log(myTotal);


const shoppingCart = [
    {
        itemName: " js course ",
        price: 999
    },
    {
        itemName: " mobile course ",
        price: 2999
    }   
]

const priceToday = shoppingCart.reduce( (acc,item) => acc + item.price, 0 )

console.log(priceToday);
