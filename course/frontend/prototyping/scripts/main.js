function Person (firstName, lastName, age, gender, interests){
  this.firstName = firstName;
  this.lastName =lastName;
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

Person.prototype.greeting = function () {
  (console.log (' Hi! I\'m ' + this.firstName + ' .'))};
Person.prototype.farewell = function() {
  console.log(this.firstName + " has left the building. Bye for now!");
};
Person.prototype.showInterests = function() {
  return this.interests.join(", ");
};

Person.prototype.bio = function() {
  console.log(this.firstName + " " + this.lastName + " is " + this.age + " years old. " + (this.gender == "female" ? "She" : "He") + " likes " + this.showInterests() + ".");
};



var laura = new Person ('laura', 'sanchez', 22, 'female', ['cinema', 'play games', 'read']);
laura.farewell();
laura.greeting();
laura.bio();


// Student

function Student(firstName, lastName, age, gender, interests) {
  Person.call(this, firstName, lastName, age, gender, interests);
}

Student.prototype = new Person();

Student.prototype.greeting = function() {
  console.log(" Yo! I'm " + this.firstName + " .");
};

var alex = new Student("Alex", "Sanchez", 42, "male", [
  "tv",
  "videogames",
  "read"
]);

alex.greeting ();
alex.bio();

//Teacher

function Teacher(firstName, lastName, age, gender, interests, subject) {
  Person.call(this, firstName, lastName, age, gender, interests);
  this.subject = subject;
}
Teacher.prototype = new Person();
Teacher.prototype.greeting = function () {
  console.log(" Hello. My name is " + ((this.gender == 'male') ? 'Mr. ' : 'Mrs. ' ) + 
  this.firstName + " and I teach " + this.subject);
}

var paul = new Teacher("Paul", "Preston", 32, "male", ["tv", "videogames", "read"], 'math');

paul.greeting ();
paul.bio();

