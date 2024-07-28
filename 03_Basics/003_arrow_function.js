/* In JavaScript, 'this' keyword refers to an object.
The 'this' keyword refers to different objects depending on how it is used */


/* this keyword in Object */
const user = {
    username: "aryan",
    price: 999,

    welcomeMessage: function(){
        // console.log(`Hi ${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "tony"
// user.welcomeMessage()
// console.log(this);



/* this keyword in Function */
// function coffee() {
//     let username = "aryan"       // here in function we can not able to use this keyword as we used it in object
//     // console.log(this.username);  // it shows undefined
// }
// coffee()


// const coffee = function(){
//     let username = "aryan"
//     console.log(this);
// }


const coffee = () => {      // this keword in arrow function
    let username = "aryan"
    // console.log(this);
}
coffee()




/* Arrow Function */
// basic syntax   () => {}


// const addTwo = (num1, num2) => {     // basic arrow function
//     return num1 + num2               // we can call it explicit return. because here we have to use return keyword
// }



// const addTwo = (num1, num2) => num1 + num2      // we can also write arrow function like these which is called implicit return
                                                   // means we do not have to write {} and return keyword

const addTwo = (num1, num2) => (num1 + num2)       // here we can also write it in (num1 + num2)

// const addTwo = (num1, num2) => ({username: "aryan"})

console.log(addTwo(4,3))