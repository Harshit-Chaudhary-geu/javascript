//Dates

let myDate = new Date()
console.log(myDate.toISOString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());


let myCreatedDate = new Date(2025, 0, 15)// month 0 se hote hai js
console.log(myCreatedDate.toDateString());// day ye khdse add krde rha woaahhh!!!


let myCreatedDate2 = new Date(2025, 0, 15, 5, 3, 1)// month 0 se hote hai js
console.log(myCreatedDate2.toLocaleString());

let anotherWay = new Date("2025-01-15")
console.log(anotherWay.toLocaleString());

// milisec
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(anotherWay.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ""
})