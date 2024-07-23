/********************************************************************** Using the new Keyword **********************************************************************/

// const tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton object

tinderUser.id = "u125ar"
tinderUser.Name = "Tony Stark"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {            // Object can be a nested object
    email: "aryan@coding.com",
    fullName: {
        userFullName: {
            firstName: "Aryan",
            lastName: "Mehta"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}    // if we use this method to combine both object than it will put object inside object
// const obj3 = Object.assign(obj1, obj2) // using this method we can combine objects perfectly and this method also have another syntax which is ({}, obj1, obj2)

// Like array, we can use spread operator here also
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// so when we get values from database, it will comes in the form of Array of objects like below
const users = [
    {
        id: 1,
        email: "a@google.com"
    },
    {
        id: 2,
        email: "b@google.com"
    },
    {
        id: 3,
        email: "c@google.com"
    }
]

/* to access values from this array we can use its index value */
// console.log(users[1].email);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));    // this method will separate the keys and put it into an array, and return the array
// console.log(Object.values(tinderUser));  // this method will separate the values and put it into an array, and return the array
// console.log(Object.entries(tinderUser)); // this method will create the array for key:value pair and put it into an another array

// console.log(tinderUser.hasOwnProperty('isLogged')); // using this method we can check the given argument is present in the object or not






/********************************************************************** Object de-structure **********************************************************************/

const course = {
    courseName: "complete javascript in hindi",
    price: "999",
    courseInstructor: "Tony Stark"
}

// console.log(course.courseInstructor); // we already know using this method we can access object values

/* But here we have another way for accessing all this values */
const {courseInstructor} = course
// console.log(courseInstructor);

/* we can furthur more de-structure it */
const {courseInstructor: Instructor} = course
console.log(Instructor);



// Using an Object Constructor




/********************************************************************** JSON format **********************************************************************/

// usually we get API in the form of Objects
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// but sometimes we can get API in the form of Array
[
    {},
    {},
    {}
]