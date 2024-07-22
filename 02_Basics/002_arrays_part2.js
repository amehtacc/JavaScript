const marvel_heros = ["Ironman", "Hulk", "Thor"]
const dc_heros = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heros) //push method will push the element into an existing array
// console.log(marvel_heros); 


const allHeros = marvel_heros.concat(dc_heros) //Concat method combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(allHeros);


// here we have another easy method to do the same things like concat
// which is spread operator
const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usable_another_array = another_array.flat(Infinity)  // here we need to give a number for depth that how depth we need to solve it. We can also give infinity as a depth.
// console.log(usable_another_array);


// console.log(Array.isArray("Aryan")); // it will check the given argument is array or not
// console.log(Array.from("Aryan")); // this method will convert the given argument into an array
// console.log(Array.from({name: "aryan"})); // here we have to ask that we need to create array of key or values, otherwise it give an empty array


let score1 = 100
let score2 = 200
let score3 = 300

/* instead of Array.from we can use Array.of */

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements