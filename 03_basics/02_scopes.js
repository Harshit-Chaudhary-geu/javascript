let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
    //console.log("inner: ", a);
    
}

// console.log(a);
//console.log(b);
// console.log(c);

function one(){
    const username = "harsh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website) // error

    two()
}

//one()

if (true) {
    const username = "harsh"
    if(username === "harsh"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(webkitURL); // error
}
//console.log(username); // error

// ++++++++++++++++++++++++++++++++++++++++++++++

function add1(num){
    return num + 1
}

console.log(add1(5))