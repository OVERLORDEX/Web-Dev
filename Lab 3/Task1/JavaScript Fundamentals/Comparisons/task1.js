//Boolean is the result//

/*
true – means “yes”, “correct” or “the truth”.
false – means “no”, “wrong” or “not the truth”.
*/

alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

//String comparison//

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

//Comparison of different types//

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

alert( true == 1 ); // true
alert( false == 0 ); // true

//Strict equality//

alert( 0 == false ); // true

alert( '' == false ); // true

alert( 0 === false ); // false, because the types are different

//Comparison with null and undefined//

alert( null === undefined ); // false

alert( null == undefined ); // true

//Strange result: null vs 0//

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

//An incomparable undefined//

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

//solution 1//

/*
5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false
*/