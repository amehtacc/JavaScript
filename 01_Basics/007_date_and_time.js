/************************************************************* Date *************************************************************/

let myDate = new Date()
//console.log(typeof myDate);    // Date is an Object in javascript


/* different functions of Date */
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());




/* here we can customize date using this method */
let myCreatedDate = new Date(2024, 0, 22)              // Month will start from 0 in javascript
// let myCreatedDate = new Date(2024, 0, 22, 6, 01, 60)
// let myCreatedDate = new Date("2024-01-14")                // But if we use DD-MM-YYYY method than month will start from 01
// let myCreatedDate = new Date("01-14-2024")   // another way of writing date
// console.log(myCreatedDate.toLocaleString());




/* get functions of date by which we can access day , month, year, etc. */
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());        // It starts from Monday(1)
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());

// console.log(`Today is ${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()} and i have written this code`);




/* Here in this method we can declare multiple properties like weekday, day, year everything in one object */
/* let objectDate = newDate.toLocaleString('default', {
    weekday: "long",
    month: "short",
    day: "2-digit",
    year: "numeric"
})
console.log(objectDate); */





/************************************************************* Time *************************************************************/

let myTimeStamp = Date.now()

// console.log(myTimeStamp);  // It shows time in milliseconds
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  // It will convert time into seconds