let score = "Aryan"
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* Test cases that we apply here:-

"16" => 16
"16abc" => NaN  //Not a Number
null => 0
undefined => NaN
true => 1; false => 0
"Aryan" => NaN

*/



let isLoggedIn = "Aryan"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

/* Test cases that we apply here:-

1 => true; 0 => false
"" => false
" " => true
"Aryan" => true

*/



let someNumber = 16

let stringSomeNumber = String(someNumber)
console.log(typeof stringSomeNumber);
console.log(stringSomeNumber);
