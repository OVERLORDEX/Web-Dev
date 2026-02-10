//The “non-existing property” problem//

/*
let user = {}; // a user without "address" property

alert(user.address.street); // Error!

// document.querySelector('.elem') is null if there's no element
let html = document.querySelector('.elem').innerHTML; // error if it's null

//Optional chaining//

let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)

let html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element

let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined
*/

//Short-circuiting//

let user = null;
let x = 0;

user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

alert(x); // 0, value not incremented

//Other variants: ?.(), ?.[]//

let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

