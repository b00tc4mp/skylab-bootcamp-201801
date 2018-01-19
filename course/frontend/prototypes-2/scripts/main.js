/* Person
a) Write a constructor function called Person and that has the following arguments: */

function Person(firstName, lastName, age, gender, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

/* b) Write the following three methods for Person. */

Person.prototype.greeting = function () {
    return "Hi, I'm " + this.firstName;
};

Person.prototype.farewell = function () {
    return this.firstName + " has left the building. Bye for now!";
};

Person.prototype._bio = function () {
    return this.firstName + ' ' + this.lastName + ' is ' + this.age + ' years old. ' + (this.gender == 'm' ? 'He' : 'She') + ' likes ' + this.interests;
};

Person.prototype.bio = function () {
    var r, inter = 'interested in ';
    r = this.firstName + ' ' +
        this.lastName + ' is ' +
        this.age + ' years old. And ' +
        (this.gender === 'male' ?
            'he' :
            (this.gender === 'female' ? 'she' : 'it')) + ' has ';

    this.interests.forEach(function(el, idx, arr) {
        inter += el + (idx < (arr.length - 2) ? ', ' : (idx < (arr.length - 1) ? ' and ' : ''));
    });

    return r + inter;
}


var woman = new Person("Maria", "Lopez", 29, "female", ["internet", "travel", "singing", "reading"]);
var man = new Person("Pedro", "Gomez", 19, "male", ["games", "futbol", "beer", "films"]);

console.log(1, 'woman should be a woman', woman);
console.log(2, 'man should be a man', man);

console.log(3, 'woman.bio() should show woman\'s bio', woman.bio());
console.log(4, 'man.bio() should be a ma\'s bio', man.bio());

/* Student
a) Write a constructor function called Student that inherit from Person and that has the following arguments:
b) The Student must inherit all methods from Person and overwrite greeting method to change its behavior to print:
*/

function Student(firstName, lastName, age, gender, interests) {
    Person.call(this, firstName, lastName, age, gender, interests)
}

Student.prototype = new Person();

Student.prototype.greeting = function () {
    return "Yo! I'm " + this.firstName;
};

var student = new Student("Paco", "Gomez", 119, "male", ["games", "futbol", "beer", "films"]);

console.log(1, 'student should be a student', student);
console.log(2, 'student.greeting() should result an informal greeting', student.greeting());

/* Teacher
a) Write a constructor function called Teacher that inherit from Person and that has the following arguments:
b) The Teacher must inherit all methods from Person and overwrite greeting method to change its behavior to print:
*/

function Teacher(firstName, lastName, age, gender, interests, subject) {
    this.subject = subject;
    Person.call(this, firstName, lastName, age, gender, interests);
}

Teacher.prototype = new Person();

Teacher.prototype.greeting = function () {
    return 'Hello. My name is ' + (this.gender === "male" ? "Mr. " : "Mrs. ") +  this.lastName + ' and I teach '  + this.subject;
};

var teacher = new Teacher("Natxo", "Gomez", 47, "male", ["games", "futbol", "beer", "films"], "english");
var femaleTeacher = new Teacher("Vic", "Kirkham", 29, "female", ["reading", "teaching", "series"], "english");

console.log(1, 'teacher should be a teacher', teacher);
console.log(2, 'female teacher should be a female teacher', femaleTeacher);
console.log(3, 'teacher.greeting() should contain Mr...', teacher.greeting());
console.log(3, 'femaleTeacher.greeting() should contain Mrs...', femaleTeacher.greeting());