const coding = ["js", "ruby", "java", "py", "cpp"]

coding.forEach( function (val) {
    //console.log(val);
}  )

coding.forEach( (val) => {
    //console.log(val); 
} )

function printMe(item){
    //console.log(item);   
}

//coding.forEach(printMe)



coding.forEach ( (item, index, arr) => {
    //console.log(item, index, arr); 
})


const myCoding = [
    {
        langName: "javascript",
        langFilename: "js"
    },
    {
        langName: "java",
        langFilename: "java"
    },
    {
        langName: "python",
        langFilename: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);  
} )