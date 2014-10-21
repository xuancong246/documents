/* Creating example about Inheritance in JS */
function Person(fullName) {
	this.fullName = fullName;
};

Person.prototype.sayHello = function() {
	alert("Hello, my name is " + this.fullName + ".");
};

function Student(fullName, subject) {
	Person.call(this, fullName);
	this.subject = subject;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayHello = function() {
	alert("Hello, my name is " + this.fullName + ". I'm studying " + this.subject + ".");
};

Student.prototype.study = function() {
	alert(this.fullName + " is studying.");
};

function Worker(fullName, companyName) {
	Person.call(this, fullName);
	this.companyName = companyName;
};

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.sayHello = function() {
	alert("Hello, my name is " + this.fullName + ". I'm working for " + this.companyName + ".");
};

var janet = new Person("Janet Picky");
var peter = new Student("Peter Doe", "Applied Physics");
var jimmy = new Worker("Jimmy Jack", "Vinh Phat Constructor");

var people = [];
people.push(janet);
people.push(peter);
people.push(jimmy);

for (var i = 0; i < people.length; i ++) {
	people[i].sayHello();
}