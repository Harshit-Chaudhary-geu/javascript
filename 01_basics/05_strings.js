const name = "harsh"
const repoCount = 1

//console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new String('harsh')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length); // 5
console.log(gameName.toUpperCase()); // HARSH
console.log(gameName.charAt(2)); // r
console.log(gameName.indexOf('a')); // 1

const newString = gameName.substring(0,2)// negative value doesnt obey over here
console.log(newString);// ha

const anotherString = gameName.slice(-5,3)// start , end 
// in harsh h = -5,0 ; a = -4,1 ; r = -3,2 ; s = -2,3 ; h = -1,4 these are indexes in simple words
console.log(anotherString);// har

const string2 = "  harsh   "
console.log(string2);
console.log(string2.trim());// remove spaces

const url = "https://harsh.com/harsh%20chaudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('harsh'));


const id = "harsh-hc-learning-javascript"
console.log(id.split('-',3));// seperator,limit

