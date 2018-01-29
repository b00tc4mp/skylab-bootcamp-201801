function hi() { console.log('hi!'); }

true && hi(); // => hi!

false && hi(); // => hi is not executed

// ...

var a = undefined;

b = a || 1; 

console.log(b); // => 1