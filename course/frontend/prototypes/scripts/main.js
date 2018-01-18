var fxx = new Ferrari('fxx', 5000);

console.log(0, 'fxx.brand should be ferrari', fxx.brand);
console.log(0.1, 'fxx.model should be fxx', fxx.model);
console.log(0.2, 'fxx.motor should be petrol', fxx.motor);
console.log(1, 'fxx.start() should start big motor', fxx.start());
console.log(2, 'fxx.stop() should stop big motor', fxx.stop());

var fiesta = new Car('ford', 'fiesta');

console.log(1, 'fiesta.brand should be ford', fiesta.brand);
console.log(2, 'fiesta.model should be fiesta', fiesta.model);
console.log(3, 'fiesta.motor should be petrol', fiesta.motor);
console.log(4, 'fiesta.start() should start petrol motor', fiesta.start());
console.log(4, 'fiesta.stop() should stop petrol motor', fiesta.stop());

var fiestaD = new Car('ford', 'fiesta', 'diesel');

console.log(1, 'fiestaD.brand should be ford', fiestaD.brand);
console.log(2, 'fiestaD.model should be fiesta', fiestaD.model);
console.log(3, 'fiestaD.motor should be diesel', fiestaD.motor);
console.log(4, 'fiestaD.start() should start diesel motor', fiestaD.start());
console.log(4, 'fiestaD.stop() should stop diesel motor', fiestaD.stop());

// Alex añade esto

function Person(firstName, lastName, age, gender, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.title = gender === 'm' ? 'Mr' : 'Mrs';
    this.pronom = gender === 'm' ? 'he' : 'she';


}
var person = new Person('Alex', 'Gonzalez', 34, 'male', ['music', 'cinema', 'development', 'natacion'])
Person.prototype.greeting = function () { return "I'm " + person.firstName }
Person.prototype.farewell = function () { return person.firstName + ' has left the building. Bye for now!' }
Person.prototype.bio = function () {

    return person.firstName + ' ' + person.lastName + ' is ' + person.age + ' years old.\n' + person.pronom + ' likes ' + person.interests.toString().replace(/,/g, ' and ')
}

console.log(person.bio())

function Student(firstName, lastName, age, gender, interests) {
    Person.call(this, firstName, lastName, age, gender, interests)
}

Student.prototype.constructor = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var studentLuisa = new Student('Luisa', 'Garcia', 18, 'male', ['maths', 'soccer'])
Student.prototype.greeting = function () { return "Yo! I'm " + studentLuisa.firstName }


console.log(studentLuisa.greeting())


function Teacher(firstName, lastName, age, gender, interests, subject) {
    Person.call(this, firstName, lastName, age, gender, interests)
}

Teacher.prototype.constructor = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

var teacher = new Teacher('Manu', 'Barzi', 40, 'male', ['maths', 'java', 'javascript'], 'Web development')
Teacher.prototype.greeting = function () {
    return "Hello. My name is " + teacher.title + ' ' + teacher.lastName + " and I teach " + teacher.subject + "."
}

console.log(teacher.greeting())

