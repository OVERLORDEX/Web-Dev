//Brevity is the soul of wit//

// taken from a well-known javascript library
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

//Use abbreviations//

/*
Like this:

list → lst.
userAgent → ua.
browser → brsr.
…etc
*/

//Reuse names//

/*
Once the whole is divided, the parts
need names.
There are already enough names.
One must know when to stop.
*/

function ninjaFunction(elem) {
  // 20 lines of code working with elem

  elem = clone(elem);

  // 20 more lines, now working with the clone of the elem!
}

//Overlap outer variables//

/*
let user = authenticateUser();

function render() {
  let user = anotherValue();
  ...
  ...many lines...
  ...
  ... // <-- a programmer wants to work with user here and...
  ...
}
*/

