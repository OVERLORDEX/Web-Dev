//The “while” loop//

while (condition) {
  // code
  // so-called "loop body"
}

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

//The “do…while” loop//

do {
  // loop body
} while (condition);

//let i = 0;//
do {
  alert( i );
  i++;
} while (i < 3);

//The “for” loop//

for (begin; condition; step) {
  // ... loop body ...
}

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

//Skipping parts//

//let i = 0; // we have i already declared and assigned//

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}

//Breaking the loop//

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );

//Continue to the next iteration//

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}

//Labels for break/continue//

for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}

alert('Done!');

