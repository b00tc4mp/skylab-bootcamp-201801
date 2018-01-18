function Person(firstName, lastName, age, gender, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;


}
var person = new Person('Alex', 'Gonzalez', 34, 'male', ['music', 'cinema', 'development', 'natacion'])
Person.prototype.greeting = function () { return "I'm " + person.firstName }
Person.prototype.farewell = function () { return person.firstName + ' has left the building. Bye for now!' }
Person.prototype.bio = function () {
    if (person.gender === 'male') {
        return person.firstName + ' ' + person.lastName + ' is ' + person.age + ' years old.\n' + 'He likes ' + person.interests.toString().replace(/,/g, ' and ')
    } else {
        return person.firstName + ' ' + person.lastName + ' is ' + person.age + ' years old.\n' + 'She likes ' + person.interests.toString().replace(/,/g, ' and ')
    }

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


function Person(firstName, lastName, age, gender, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;


}
var person = new Person('Alex', 'Gonzalez', 34, 'male', ['music', 'cinema', 'development', 'natacion'])
Person.prototype.greeting = function () { return "I'm " + person.firstName }
Person.prototype.farewell = function () { return person.firstName + ' has left the building. Bye for now!' }
Person.prototype.bio = function () {
    if (person.gender === 'male') {
        return person.firstName + ' ' + person.lastName + ' is ' + person.age + ' years old.\n' + 'He likes ' + person.interests.toString().replace(/,/g, ' and ')
    } else {
        return person.firstName + ' ' + person.lastName + ' is ' + person.age + ' years old.\n' + 'She likes ' + person.interests.toString().replace(/,/g, ' and ')
    }

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
    if (teacher.gender === 'male') {
        return "Hello. My name is Mr. " + teacher.lastName + " and I teach " + teacher.subject + "."

    } else {
        return "Hello. My name is Mrs. " + teacher.lastName + " and I teach " + teacher.subject + "."

    }
}

console.log(teacher.greeting())

