/* Objects: Objects are variables too. But objects can contain many values.

const car = { 
    type:"Fiat", 
    model:"500", 
    color:"white"
};
*/

const mySym = Symbol("key1")

// Using an Object Literals:- An object literal is a list of key:value pairs inside curly braces {}.
const JsUser = {
    name: "Aryan",
    "full Name": "Aryan Mehta",
    age: 23,
    [mySym]: "myKey1",    // to access symbol we need to write key in brackets[]
    location: "Banglore",
    email: "aryan@coding.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],
}

//this are multiple ways of accessing objects key:value
// console.log(JsUser.email);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);       // symbols can only accessed with square brackets[]


JsUser.email = "mehta@coding.com"
// Object.freeze(JsUser)          // Using this method we can lock the object by which no one can change the values
JsUser.email = "aryanmehta@coding.com" // thats why here we update the value of email but it will not affected in the object
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello this is my first class of JavaScript Objects");
}

JsUser.greetingTwo = function(){
    console.log(`Hello my name is ${this.name} and today I am learning JavaScript Objects`); // here we use this property to reference same object properties
}

JsUser.greeting();
JsUser.greetingTwo();