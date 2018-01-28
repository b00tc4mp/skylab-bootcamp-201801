//Person object constructor
function Person(first, last, age, gender, interests){
    this.first_name = first;
    this.last_name = last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}
//Person members greetins, farewell and bio
Person.prototype.greetings = function(){
    return 'Hi! I\'m ' + this.first_name;
}
Person.prototype.farewell = function () { 
    return this.first_name + " has left the building. Bye for now!";
 }
 Person.prototype.bio = function() {
     var gender = this.gender == 'f'? 'she': 'he';
     var interests = this.interests;
      var ints = interests.map(function(el, index) {
       if (index == interests.length - 1) {
         return el = "and " + el;
       } else if (index == interests.length - 2) {
         return el;
       } else {
         return el + ',';
       }
     });
    
   return this.first_name + ' ' + this.last_name + ' is ' + this.age + ' years old ' + gender + ' likes ' + ints.join(' ');
 };

var Alex = new Person('Alex','Spalato', 18, 'f',['cinema','programming','travelling']);
console.log(Alex.greetings());
console.log(Alex.farewell());
console.log(Alex.bio());


//Student object constructor extends Person object
function Student(first,last,age,gender,interests){
  Person.call(this,first,last,age,gender,interests);
}

// Add Person prototype to Student to have the same members
Student.prototype = new Person();

//Modify the greetings memner for student
Student.prototype.greetings = function() {
  return "Yo! I'm " + this.first_name;
};

var Nacho = new Student('Nacho', 'Miralles',34, 'm', ['programing','hiking']);
console.log(Nacho.greetings());
console.log(Nacho.farewell());
console.log(Nacho.bio());

// Teacher Object constructor extends Person Object, and add subject additional property
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

//add person proto to teacher
Teacher.prototype = new Person();

//modify greetings for teacher
Teacher.prototype.greetings = function() {
  return "Hello. My name is " + this.first_name + ' ' + this.last_name + ' and I teach ' + this.subject;
};

var manuel = new Teacher ('Manuel','Barzi', 35, 'm',['javascript','java'],'javascript')
console.log(manuel.greetings());
