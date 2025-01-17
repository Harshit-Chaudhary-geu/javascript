const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    //console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const program = ["js", "cpp", "py"]

for (const key in program) {
    //console.log(program[key])
}

const map = new Map()// it is not iterratable
map.set("IN", "INDIA")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("FR", "FRANCE")
map.set("IN", "INDIA")

for (const key in map) {
    //console.log(key);  
}