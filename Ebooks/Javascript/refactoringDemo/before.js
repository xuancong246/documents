// All types: Human, Fish, Bird, Plane, Boat, Monkey
// Properties: type, age
var items = [];
items.push({type: "Human", age: 9});
items.push({type: "Human", age: 15});
items.push({type: "Fish", age: 0});
items.push({type: "Bird", age: 0});
items.push({type: "Bird", age: 3});
items.push({type: "Plane", age: 0});
items.push({type: "Boat", age: 0});
items.push({type: "Monkey", age: 0});

for (var i = 0; i < items.length; i ++) {
	fly(items[i]);
	swim(items[i])
}

function fly(item) {
	if (item.type === "Human" || item.type === "Boat") {
		console.log("A human OR a boat cannot fly.");
	}
	else if (item.type === "Fish") {
		console.log("A fish cannot fly. Except Fly Fish.");
	}
	else if (item.type === "Bird" || item.type === "Plane") {
		if (item.type === "Bird") {
			if (item.age < 1) {
				console.log("The bird is too young to fly.");
			}
			else {
				console.log("The bird can fly.");
			}
		}
		else {
			console.log("A plane can fly.");
		}
	}
	else if (item.type === "Monkey") {
		console.log("A monkey cannot fly. It only can jump from one place to another one.");
	}
}

function swim(item) {
	if (item.type === "Human" || item.type === "Boat") {
		if (item.type === "Human") {
			if (item.age >= 10) {
				console.log("The human can swim over water face.");
			}
			else {
				console.log("The human is too young to swim.");
			}
		}
		else {
			console.log("A boat can swim over water face.");
		}
	}
	else if (item.type === "Fish") {
		console.log("A fish can swim under water face.");
	}
	else if (item.type === "Bird" || item.type === "Plane") {
		if (item.type === "Bird") {
			console.log("A bird cannot swim except duck.");
		}
		else {
			console.log("A plane cannot swim except Water Fly plane.");
		}
	}
	else if (item.type === "Monkey") {
		console.log("A monkey cannot swim.");
	}
}