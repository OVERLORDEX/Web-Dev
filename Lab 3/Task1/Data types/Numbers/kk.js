//More ways to write a number//

let billion = 1000000000;

//let billion = 1_000_000_000;//

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

//Hex, binary and octal numbers//

alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides

//toString(base)//

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

//Rounding//

/*
Math.floor
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
Math.ceil
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
Math.round
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4. In the middle cases 3.5 rounds up to 4, and -3.5 rounds up to -3.
Math.trunc (not supported by Internet Explorer)
*/

//Imprecise calculations//

alert( 1e500 ); // Infinity

alert( 0.1 + 0.2 == 0.3 ); // false

alert( 0.1 + 0.2 ); // 0.30000000000000004

//Tests: isFinite and isNaN//

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

alert( NaN === NaN ); // false

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity

//let num = +prompt("Enter a number", '');//

// will be true unless you enter Infinity, -Infinity or not a number
alert( isFinite(num) );

//parseInt and parseFloat//

alert( +"100px" ); // NaN

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

//Other math functions//

alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1

alert( Math.pow(2, 10) ); // 2 in power 10 = 1024

