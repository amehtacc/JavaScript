const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}



/* falsy values */
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


/* truthy values */
// "0", 'false', " ", [], {}, function(){}



// to check array is empty or not
// const emptyArr = []
// if(emptyArr.length === 0) {
//     console.log("Array is empty");
// }


// to check object is empty or not
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }



/* Nullish Coalescing Operator (??): null undefined */

let val1;                   // sometimes we get null or undefined values from third party which is not good because we don't know how it comes from
// val1 = 5 ?? 10           // so instead of null or undefined values we simply put any flag value like true, false. or put any other function
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);



/* Ternary Operator */
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")