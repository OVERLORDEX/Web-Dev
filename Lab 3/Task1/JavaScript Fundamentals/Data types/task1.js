// no error
let message = "hello";
message = 123456;

//Number//

let n = 123;
n = 12.345;

alert( 1 / 0 ); // Infinity

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

//BigInt//

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

//String//

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3


//Boolean (logical type)//

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")

//The “null” value//

let age = null;

//The “undefined” value//

//let age;//

alert(age); // shows "undefined"

//let age = 100;//

// change the value to undefined
age = undefined;

alert(age); // "undefined"


//The typeof operator//

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)


//solution 1//

let names = "Ilya";

// the expression is a number 1
alert( `hello ${1}` ); // hello 1

// the expression is a string "names"
alert( `hello ${"names"}` ); // hello names

// the expression is a variable, embed it
alert( `hello ${names}` ); // hello Ilya