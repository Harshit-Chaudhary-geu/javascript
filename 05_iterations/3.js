// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [ 1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {
    //console.log(`each char is ${greet}`);   
}

// Maps

const map = new Map()

map.set("IN", "INDIA")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("FR", "FRANCE")
map.set("IN", "INDIA") // 1 hi bar count hoga

console.log(map);

for(const [key, value] of map){
    console.log(key, ':-', value); 
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObj) {
    //console.log(key, ":-", value); 
    // this is not gonna work
}

