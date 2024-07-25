/************************************************************************** Functions part-1 **************************************************************************/

// Function Syntax
function sayMyName() {
    // console.log("A");
    // console.log("R");
    // console.log("Y");
    // console.log("A");
    // console.log("N");
}

// sayMyName()   // function calling, without () it just the reference of the function


function addTwoNumbers(number1, number2){
                       //parameters
    //console.log(number1 + number2);

}
// addTwoNumbers(3, 4)  //(3, 4) are arguments
             

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result                     // if we write anything after return that will never executed
    return number1 + number2             
}
// const result = addTwoNumbers(3, 4)
// console.log("Result:", result);


function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("aryan"))




/************************************************************** Functions with Objects and Array (part-2) **************************************************************/

function calculateCartPrice(val1, val2, ...num1){   //... is called rest operator and also spread operator. But it completely depends on its use cases that when it act like rest operator or spread operator
    return num1
}
// console.log(calculateCartPrice(200, 500, 300, 1500)) // rest operator will put all values into an array and return the array


const user = {
    username: "aryan",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user) // it is not necessary that we pass the object by already creating it 
handleObject({
    username: "tony",   // we can pass it directly in the calling function
    price: 399
})


const myNewArray = [200, 400, 300, 700]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 300, 700]));   // like object, here also we can pass the Array directly in the calling function
