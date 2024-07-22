/* Array:- It is used to store multiple values in a single variable name. It can hold various data types and allows for dynamic resizing(resizable).

Array Element: Each value within an array is called an element. Elements are accessed by their index, starting from 0.

Array Index: A numeric representation that indicates the position of an element in the array. JavaScript arrays are zero-indexed, meaning the first element is at index 0.

Array Length: The number of elements in an array. It can be retrieved using the length property. */



// first way of Array declaration
const myArr = [5, 6, 2, 7, 9, 3]
const myHeros = ["Krishna", "Shiv", "Ram", "Hanuman"]

// second way of Array declaration
const myArr2 = new Array(5, 6, 2, 7, 9, 3)

// console.log(myHeros[3]);


/* Now lets discuss some methods of Array */
// myArr.push(10) // push method is used to add element at the end of the array
// myArr.push(8)

// myArr.pop() // pop method will remove the last element of an array

// myArr.unshift(13) // this method will add the element at the the start of an array and shift other elements towards right
// myArr.shift() //  it will remove the first element of an array and shift other elements towards left.

// console.log(myArr);

// console.log(myArr.includes(3)); // this function will check whether the element is available in the array or not
// console.log(myArr.indexOf(7)); // it will shows the index of an element


const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr); 
// console.log(typeof newArr);  //join method will change the type of an array



/* Slice and Splice method */

console.log("A", myArr);

const myNewArr1 = myArr.slice(1, 3)
console.log(myNewArr1);

console.log("B", myArr);

const myNewArr2 = myArr.splice(1, 3) // splice method will not just take all values but it also manipulate the original array
console.log(myNewArr2);

console.log("C", myArr);