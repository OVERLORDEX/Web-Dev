//Creation//

let now = new Date();
alert( now ); // shows current date/time

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );

/*
getTime()
Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.

getTimezoneOffset()
Returns the difference between UTC and the local time zone, in minutes:
*/

//Setting date components//

/*
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
*/

//Autocorrection//

let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ...is 1st Feb 2013!

//Date to number, date diff//

let dates = new Date();
alert(+date); // the number of milliseconds, same as date.getTime()

let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

alert( `The loop took ${end - start} ms` );

//Date.now()//

let starts = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let ends = Date.now(); // done

alert( `The loop took ${end - start} ms` ); // subtract numbers, not dates

//Benchmarking//

// we have date1 and date2, which function faster returns their difference in ms?
function diffSubtract(date1, date2) {
  return date2 - date1;
}

// or
function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

