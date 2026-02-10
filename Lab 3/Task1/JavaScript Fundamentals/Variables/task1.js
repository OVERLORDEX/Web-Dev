//A variable//

let message;

message = 'Hello'; // store the string 'Hello' in the variable named message//

//let user = 'John', age = 25, message = 'Hello';//

//Variable naming//

let userName;
let test123;

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

/*let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name*/

//Constants//

const myBirthday = '18.04.1982';

const myBiirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!

//Uppercase constants//

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

//solution 1//

let admin, name; // can declare two variables at once

name = "John";

admin = name;

alert( admin ); // "John"

//solution 2//

let ourPlanetName = "Earth";

let currentUserName = "John";

//solution 3//

const birthday = '18.04.1982';

const age = someCode(birthday)

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?