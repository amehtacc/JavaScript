/* if */
//syntax
// if (condition) {    // 'if' is only executed when it get the true condition
//     Statement;
// }


// if(2 == 3) {
//     console.log("executed");
// }




/* if-else */
const temperature = 35
/*
if(temperature < 33) {
    console.log("temperature is less than 33");
}
else {
    console.log("temperature is greater than 33");
}

console.log("Execute");
*/



const score = 200
/*
if(score > 100) {            // The variable which we have declared using const and let between this {} cannot be used outside this bracket {}
    let power = "fly"
    console.log(`I can ${power}`);
}
console.log(`I can ${power}`);
*/



const balance = 1000
/*
if(balance > 500) console.log("Yes"), console.log("Yes Yes");
// we can write 'if' condition like this
// here we are not using {} and we called it implicit scope means we assume that it have {} here
// we can also write multiple line of code here by using coma ,
// but this is not the right way to write it, it's not a good practice to write a code. So never use it
*/



/* nested if */
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {                 // &&(And) operator
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {   // ||(Or) operator
    console.log("User logged in");
}