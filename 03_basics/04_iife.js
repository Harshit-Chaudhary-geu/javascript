// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named iife
    console.log(`DB CONNECTED`)
})();// error might happen if not semicolon here

//(defination)(executionCall)

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("harsh");