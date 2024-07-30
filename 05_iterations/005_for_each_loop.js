const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){    // because its a callback function, so it doesn't have a name
    // console.log(val);           // this function is running inside the array, so it takes the value of an array as a parameter
} )


// we can also use the Arrow function
coding.forEach( (item) => {
    // console.log(item);
} )


function printMe(item){     // we can write the function separatly and can call it directly in the loop
    // console.log(item);
}
coding.forEach(printMe)  // we just need to give the reference of an function, do not execute it. It means () are not required


coding.forEach( (item, index, arr)=> {   // for each loop also have other parameters
    // console.log(item, index, arr);
} )



// What if we get an Array of Objects from datatbase
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )