//describe("A spy", function() {
//  var foo, bar = null;
//
//  beforeEach(function() {
//    foo = {
//      setBar: function(value) {
//        bar = value;
//      }
//    };
//
//    spyOn(foo, 'setBar').and.callThrough();
//  });
//
//  it("can call through and then stub in the same spec", function() {
//    foo.setBar(123);
//    expect(bar).toEqual(123);
//
//    foo.setBar.and.stub();
//    bar = null;
//
//    foo.setBar(123);
//    expect(bar).toBe(null);
//  });
//});


var Person = function(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	
	this.sayHello = function() {
		alert("Hello " + firstName + " " + lastName);
	}
};

describe("Person", function() {
	var person;
	beforeEach(function() {
		person = new Person("Harry", "Potter");
	});
	
	afterEach(function() {
		person = null;
	});
	
	it('should throw an error', function() {
		spyOn(person, 'sayHello').and.callFake(function() {
			alert(1234);
		});
		person.sayHello();
		person.sayHello.and.stub();
		person.sayHello();
		person.sayHello();
		expect(1).toBeTruthy();
	});
});