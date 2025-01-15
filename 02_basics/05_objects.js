const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "harsh"
}

//course.courseInstructor
const {courseInstructor: instructor} = course// {} here are used for destructuring

console.log(instructor);

// JASON api are given in obj format
// {
//     "name": "harsh",
//     "courseName": "js",
//     "price": "free"
// }

//api's given in array format 
[
    {},
    {},
    {},
]