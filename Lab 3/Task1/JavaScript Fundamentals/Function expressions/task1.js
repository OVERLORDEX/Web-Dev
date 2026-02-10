function sayHi() {
  alert( "Hello" );
}

let sayHi = function() {
  alert( "Hello" );
};

//Function is a value//

function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // shows the function code

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

//Callback functions//

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

//Function Expression vs Function Declaration//

// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
let sum = function(a, b) {
  return a + b;
};

// Function Expression
let sum = function(a, b) {
  return a + b;
};

