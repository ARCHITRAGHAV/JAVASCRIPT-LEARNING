const accountId = 144553;
let accountEmail = "architraghav2004@gmail.com";
var accountPassword = "12345";
accountCity = "Ghaziabad";
let accountState;

// accountId = 2 // not allowed

accountEmail = "jh@.com";
accountPassword = "423523";
accountCity = "vizag";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState
]);