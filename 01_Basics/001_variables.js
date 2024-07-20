const accountId = 157997
let accountEmail = "aryan@google.com"
var accountPassword = "123456"
accountCity = "Bengaluru"
let accountState;

// accountId = 2  // Constant Variable cannot be re-declared or updated.It's a block scope variable.

accountEmail = "am@google.com"
accountPassword = "54321"
accountCity = "Ahmedabad"

/*
Prefer not to use var
because it can be re-declared & updated. And its a global scope variable.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])