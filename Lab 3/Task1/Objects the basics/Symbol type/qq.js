//Symbols//

/*
let id = Symbol();

// id is a symbol with the description "id"
let id = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
*/


//“Hidden” properties//

let user = { // belongs to another code
  name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] ); // we can access the data using the symbol as the key

/*
// ...
let id = Symbol("id");

user[id] = "Their id value";
*/

//Symbols in an object literal//

/*
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not "id": 123
};
*/


//Symbols are skipped by for…in//

/*
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] ); // Direct: 123
*/

//Global symbols//

/*
// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true
*/

//Symbol.keyFor//

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

//System symbols//

/*
Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive
…and so on.
*/