/* Scopes:- scope refers to the current context of your code, which determines the accessibility or visibility of variables, functions, and objects. It defines where in your code you can access and use specific identifiers.*/


// var c = 300
let a = 300

if (true) {           // the code we write between these {} should not be accessed outside of this block and it is a block scope
    let a = 10        // that's why its recommended that we never use var variable
    const b = 20
    // var c = 30        // because var is global scope variable, so we can access it anywhere. Even if we declared it inside the block scope
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "aryan"

    function two(){                 // child function can access the parent function variable
        const website = "google"
        // console.log(username);
    }
    // console.log(website);
    // two()
}
// one()



if(true){
    const username = "aryan"
    if(username === "aryan"){
        const website = " google"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



/****************************************************************************** Intersting concept ******************************************************************************/

console.log(addOne(5))    // here we can call function before its declaration
function addOne(num){
    return num + 1
}


// but in this method we cannot access function before its declaration
// because here along with declaring the function we have also held it in a variable.
addTwo(5) 
const addTwo = function(num){  // it is also a function but sometimes we call it expression

    return num + 2             // in JS we can store function in variable
}