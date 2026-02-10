//JSON.stringify//

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/

/*
JSON.stringify can be applied to primitives as well.

JSON supports following data types:

Objects { ... }
Arrays [ ... ]
Primitives:
strings,
numbers,
boolean values true/false,
null.
*/

//Formatting: space//

let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert(JSON.stringify(user, null, 2));
/* two-space indents:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/* for JSON.stringify(user, null, 4) the result would be more indented:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/

//Custom “toJSON”//

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room
};

alert( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // (1)
    "room": {"number":23}               // (2)
  }
*/

//JSON.parse//

//let value = JSON.parse(str[, reviver]);

//Using reviver//

// title: (meetup title), date: (meetup date)
let strd = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetups = JSON.parse(str);

alert( meetup.date.getDate() ); // Error!

