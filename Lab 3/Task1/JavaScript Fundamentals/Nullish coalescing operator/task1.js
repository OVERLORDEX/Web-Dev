result = (a !== null && a !== undefined) ? a : b;

let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined

//Comparison with ||//

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

//Precedence//

let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000

//Using ?? with && or ||//

//let x = 1 && 2 ?? 3; // Syntax error//

let x = (1 && 2) ?? 3; // Works

alert(x); // 2

// set height=100, if height is null or undefined
height = height ?? 100;

