// On Object
const myObject = {          // so for in loop is work properly on object to iterate them
    js: 'JavaScript',
    cpp: 'C++',
    py: 'Python',
    rb: 'Ruby'
}

for (const key in myObject) {
    // console.log(key);             // this will provide all the keys of object
    // console.log(myObject[key]);   // this syntax is used to get the values of keys
    // console.log(`${key} is shortcut of ${myObject[key]}`);
}




// On Array
const programmingLang = ["js", "py", "rb", "java", "cpp"]

for (const key in programmingLang) {
    // console.log(key);
    // console.log(programmingLang[key]);   // this syntax will return the values/element of array
}
// for in loop return the keys of array
// for of loop return the actual values of array




// On Map
const map = new Map()             // so here map is not iterable

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India')
// console.log(map);

for (const key in map){
    console.log(key);
}