/* basic syntax */
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

                    
const month = "march"

switch (month) {                      // we can also write strings or other data type instead of numbers as a value

    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}