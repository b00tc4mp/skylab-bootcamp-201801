


/* is_object

Write a JavaScript function to check whether an input is an object or not.
 */

 function isObject(obj) {
   if (obj !== null && typeof obj === "object") { 
       return true
       } 
    return false;
 }
var a = [1,2,3];
var b = {};
var c;

/* console.log('null should return false => ' +  isObject(null));
console.log('hello should return false => ' +  isObject("hello"));
console.log('1 should return false => ' +  isObject(1));
console.log('a should return true => ' +  isObject(a));
console.log('b should return true => ' +  isObject(b));
console.log('c should return false => ' +  isObject(c));
console.log('undefined should return false => ' +  isObject(undefined)); */



/* Create object car

Write an object that represents a car with three properties: brand, model, color. Add a method that shows the following message: 'My black Sean León is great!' (Hint: use this)

Use literal notation, and object constructor notation.
 */


function Car(brand, color, model) {
    this.brand = brand;
    this.color = color;
    this.model = model;
} 
Car.prototype.message = function () {
    return 'My ' + this.color +' '+ this.brand +' '+ this.model + ' is great!';
}

var car = new Car('Seat', 'black', 'León');

console.log('This should show "My black Sean León is great!" => '+car.message())


Car2 = {
    brand: 'Seat',
    color: 'black',
    model: 'León' 
}

Car2.message = function () {
    return 'My ' + this.color + ' ' + this.brand + ' ' + this.model + ' is great!';
}

var car2 = new Car('Seat', 'black', 'León');

console.log('This should show "My black Sean León is great!" => ' + car2.message())



