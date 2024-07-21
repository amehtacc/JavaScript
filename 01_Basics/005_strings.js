const name = "aryan" // this is the first way of Sting declaration
const age = 23

// console.log(name + " Mehta " + age); // older way of string Concatenation.


// Now lets take an look on new and modern way of string interpolation or string Concatenation

// console.log(`Hello my name is ${name} and my age is ${age}`);
// String interpolation and string concatenation are both used to combine strings, but they differ in how they do it.


// Another way of String declaration
const gameName = new String("aryan-mehta")


// console.log(gameName[0]);
// console.log(gameName.__proto__); //It will shows the prototypes of strings which we can check on browser


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('r'));


const newString = gameName.substring(0,4)
// console.log(newString);


const anotherString = gameName.slice(-10,4) // here in slice we can use negative values
// console.log(anotherString);


const newString1 = "    aryan    "
// console.log(newString1);
// console.log(newString1.trim()); // trim function will remove white spaces from string


const url = "https://aryan.com/javascript%20strings"
// console.log(url.replace('%20', '-'));
// console.log(url.replace('aryan', 'mehta'));  // replace function will replace any value with another value


// console.log(url.includes('aryan')); // using include function we can check whether any particular string is available or not 
// console.log(url.includes('mehta'));


console.log(gameName.split('-')); // it takes a separator(pattern) as an argument and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.