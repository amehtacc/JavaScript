// Array Specific Loops

/**************************************************************************** for of loop ****************************************************************************/

// let's try it On Array
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {      // here we do not need to give any condition or increment/decrement statement. It will do everything automatically
    // console.log(num);            // we just need to do is give the variable name and tell him where we required to run loop
}




// On String
const greetings = "Hello World!"
for (const greet of greetings) {
    // if(greet == " ") {
    //     continue
    // }
    // console.log(`Each char is ${greet}`);
}




// On Map
/* Maps:- Map objects are collections of key-value pairs and remembers the original insertion order of the keys.
A key in the Map may only occur once; it is unique in the Map's collection. */

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India')
// console.log(map);

for(const key of map){      // if we trying to iterate map like this then it wrill return an Array of key:value pair
    // console.log(key);
}

for (const [key, value] of map) {      // so to get the key and value separately then wee need to use []
    // console.log(key, ':-', value);
}




// On Object
const myObject = {             // here it shows Object is not iterable
    'game1': 'Bus Simulator',
    'game2': 'GTA 5'
}

// for(const [key, value] of myObject){
//     console.log(key, value);
// }

// for(const key of myObject){
//     // console.log(key);
// }