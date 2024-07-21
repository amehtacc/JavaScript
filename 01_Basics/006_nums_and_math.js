/************************************************************* Numbers *************************************************************/

const score = 400
// console.log(score);

const balance = new Number(100) // here we dedicately defined that we need number value
// console.log(balance);

// console.log(balance.toString().length); // it will convert the number into string than it gives the length of that string
// console.log(balance.toFixed(2)); // it will precise the value after decimal according to given argument. Here we gave it 2 so it will round off two values after decimal

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // We can give the argument between the range 1-21. And it returns a string either in exponential or fixed-point notation.

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // it will shows in US standards by default 
// console.log(hundreds.toLocaleString('en-IN')); // now it will shows in Indian standards



/************************************************************** Maths **************************************************************/

// console.log(Math);
// console.log(Math.abs(-4)); // Returns the absolute value of a number. simply it will convert negative value into positive value.
// console.log(Math.round(4.6)); // it will round off the values like we do it in our regular days with numbers
// console.log(Math.ceil(4.2)); // it will also round off the value but it choose the top value
// console.log(Math.floor(4.9)); // it will also round off the value but it choose the lower value
// console.log(Math.min(4, 3, 6, 8)); // using this function we can get minimum value
// console.log(Math.max(4, 3, 6, 8)); // and it will give maximum value


// console.log(Math.random()); // it will provide any random value between 0-1
// console.log((Math.random()*10) + 1); // now the math.random() * 10 will shift the value to the left but may be it can give 0 value sometimes in the case of 0.01, so here we add 1 with it.
// console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
/* Break above concept to understand it later

   console.log(Math.random());
   console.log(Math.random() * (max - min + 1)); // (max - min) will provide us the range of value and also we add 1 to avoid zeros.
   console.log(Math.floor(Math.random() * (max - min + 1))); // now we put above equation into Math.floor function which will round off the value to lower value.
   console.log(Math.floor(Math.random() * (max - min + 1)) + min); // finally we add min value to get the output between 10-20.

   run it step by step for better understanding

*/
