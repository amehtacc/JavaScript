// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10 })

const newNums = myNumers
                .map(( num) => num * 10 )       // So this concept is called chaining. In which we can use multiple method 
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);