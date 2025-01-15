// array

const myArr = [0,1,2,3,4,5]
const myHero = ["ayano","isagi"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// Array methods 

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)// places at first
myArr.shift()// deletes first value

// console.log(myArr.includes(9));// true/false
// console.log(myArr.includes(9));// gives -1 if it doesnt exist

const newArr = myArr.join()//join is used to convert the array into single string.
// comma is default seperator of in this


const newArr1 = myArr.join(' ')// now made the space as seperator.

console.log(myArr);
console.log(typeof newArr);
console.log(newArr);
console.log(newArr1);

//+++++++++++++++++++++++++++++++++++++++++++++++

//slice- 1)doesnt chnge original array
//       2)start and end 

//splice - 1)does chnge original array
//         2)start and deletecount

console.log("A ",myArr)

const myn1 = myArr.slice(1,3)
console.log("B ",myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);