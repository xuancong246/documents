// All types: Human, Fish, Bird, Plane, Boat, Monkey
// Properties: type, age

function Item(type, age) {
	this.type = type;
	this.age = age;
}

Item.prototype.fly = function() {}
Item.prototype.swim = function() {}

function Human(age) {
	Item.call(this, "Human", age);
}
Human.prototype = Object.create(Item.prototype);
Human.prototype.constructor = Human;

Human.prototype.fly = function() {
	console.log("A human OR a boat cannot fly.");
}
Human.prototype.swim = function() {
	if (this.age >= 10) {
		console.log("The human can swim over water face.");
	}
	else {
		console.log("The human is too young to swim.");
	}
}

function Fish(age) {
	Item.call(this, "Fish", age);
}
Fish.prototype = Object.create(Item.prototype);
Fish.prototype.constructor = Fish;

Fish.prototype.fly = function() {
	console.log("A fish cannot fly. Except Fly Fish.");
}
Fish.prototype.swim = function() {
	console.log("A fish can swim under water face.");
}

function Bird(age) {
	Item.call(this, "Bird", age);
}
Bird.prototype = Object.create(Item.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function() {
	if (this.age < 1) {
		console.log("The bird is too young to fly.");
	}
	else {
		console.log("The bird can fly.");
	}
}
Bird.prototype.swim = function() {
	console.log("A bird cannot swim except duck.");
}

function Plane(age) {
	Item.call(this, "Plane", age);
}
Plane.prototype = Object.create(Item.prototype);
Plane.prototype.constructor = Plane;

Plane.prototype.fly = function() {
	console.log("A plane can fly.");
}
Plane.prototype.swim = function() {
	console.log("A plane cannot swim except Water Fly plane.");
}

function Boat(age) {
	Item.call(this, "Boat", age);
}
Boat.prototype = Object.create(Item.prototype);
Boat.prototype.constructor = Boat;

Boat.prototype.fly = function() {
	console.log("A human OR a boat cannot fly.");
}
Boat.prototype.swim = function() {
	console.log("A boat can swim over water face.");
}

function Monkey(age) {
	Item.call(this, "Monkey", age);
}
Monkey.prototype = Object.create(Item.prototype);
Monkey.prototype.constructor = Monkey;

Monkey.prototype.fly = function() {
	console.log("A monkey cannot fly. It only can jump from one place to another one.");
}
Monkey.prototype.swim = function() {
	console.log("A monkey cannot swim.");
}

var items = [];
items.push(new Human(9));
items.push(new Human(15));
items.push(new Fish(0));
items.push(new Bird(0));
items.push(new Bird(3));
items.push(new Plane(0));
items.push(new Boat(0));
items.push(new Monkey(0));

for (var i = 0; i < items.length; i ++) {
	items[i].fly();
	items[i].swim();
}
