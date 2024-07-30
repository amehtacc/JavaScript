const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {     // The forEach loop in JavaScript does not return a value. 
    // console.log(item);                      // It is designed to execute a provided function once for each element in an array, and it simply returns undefined.
    return item
} )

// console.log(values);



// const newNums = []

myNums.forEach( (num) => {       // here we create an empty array where we push the values then we print that array
    if (num > 4) {               // as i already tell forEach loop does not return a value. 
        newNums.push(num)
    }
} )
// console.log(newNums);





/* Filter method in JS */
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
// It return the true value

//Example-1
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   // filter method can return a value

// const newNums = myNums.filter( (num) => {   // in this syntax we use a scope {} that's why we need to use return keyword to return a value
//     return num > 4
// } )

const newNums = myNums.filter((num) => num > 4); // but here in this syntax return keyword is not required

// console.log(newNums);



//Example-2
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { return bk.publish >= 1995 && bk.genre === "History" })
  console.log(userBooks);