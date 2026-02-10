//Array destructuring//

// we have an array with a name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
//let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith

//let [firstName, surname] = "John Smith".split(' ');
alert(firstName); // John
alert(surname);  // Smith

//The rest ‘…’//

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar
// Further items aren't assigned anywher

//Default values//

//let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefine

// default values
//let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    // Julius (from array)
alert(surname); // Anonymous (default used)

//Object destructuring//

//let {var1, var2} = {var1:…, var2:…}

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

//let options = {
  title: "Menu",
  //width: 100,
  //height: 200
//};

// { sourceProperty: targetVariable }
//let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200

//let options = {
  title: "Menu"
//};

//let {width = 100, height = 200, title} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

//let options = {
  title: "Menu"
//};

//let {width = 100, height = 200, title} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

//The rest pattern “…”//

//let options = {
  title: "Menu",
  //height: 200,
  //width: 100
//};

// title = property named title
// rest = object with the rest of properties
//let {title, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100

//Nested destructuring//

//let options = {
  //size: {
    width: 100,
    //height: 200
  //},
  //items: ["Cake", "Donut"],
  //: true
//};

// destructuring assignment split in multiple lines for clarity
//let {
  //size: { // put size here
    //width,
    //height
 // },
  //items: [item1, item2], // assign items here
  //title = "Menu" // not present in the object (default value is used)
//} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut

//Smart function parameters//

// we pass object to function
//let options = {
  title: "My menu",
  //items: ["Item1", "Item2"]
//};

// ...and it immediately expands it to variables
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – taken from options,
  // width, height – defaults used
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2
}

//showMenu(options);