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


//var Person = function(firstName, lastName) {
//	this.firstName = firstName;
//	this.lastName = lastName;
//	
//	this.sayHello = function() {
//		alert("Hello " + firstName + " " + lastName);
//	}
//};
//
//describe("Person", function() {
//	var person;
//	beforeEach(function() {
//		person = new Person("Harry", "Potter");
//	});
//	
//	afterEach(function() {
//		person = null;
//	});
	
//	it('tracks if it was called at all', function() {
//		spyOn(person, 'sayHello');
//		expect(person.sayHello.calls.any()).toEqual(false);
//		person.sayHello();
//		expect(person.sayHello.calls.any()).toEqual(true);
//	});

//	it('tracks the number of times it was called', function() {
//		spyOn(person, 'sayHello');
//		person.sayHello();
//		person.sayHello();
//		person.sayHello();
//		expect(person.sayHello.calls.count()).toEqual(3);
//	});
	
//	it("tracks the arguments of each call", function() {
//		spyOn(person, 'sayHello');
//		person.sayHello(123);
//		person.sayHello(456, "baz");
//		person.sayHello();
//	
//		expect(person.sayHello.calls.argsFor(0)).toEqual([123]);
//		expect(person.sayHello.calls.argsFor(1)).toEqual([456, "baz"]);
//		expect(person.sayHello.calls.argsFor(2)).toEqual([]);
//	});
	
//	it("tracks the arguments of all calls", function() {
//		spyOn(person, 'sayHello');
//		person.sayHello(123);
//		person.sayHello(456, "baz");
//		person.sayHello();
//	
//		expect(person.sayHello.calls.allArgs()).toEqual([[123], [456, "baz"], []]);
//	});
	
//	it("can provide the context and arguments to all calls", function() {
//		spyOn(person, 'sayHello');
//		person.sayHello(123);
//		person.sayHello(456, "baz");
//	
//		expect(person.sayHello.calls.all()).toEqual(
//				[{object: person, args: [123]}, 
//				 {object: person, args: [456, "baz"]}]);
//	});
	
//	it("has a shortcut to the most recent call", function() {
//		spyOn(person, 'sayHello');
//		person.sayHello(123);
//		person.sayHello(456, "baz");
//	
//		expect(person.sayHello.calls.first()).toEqual(
//				{object: person, args: [123]});
//	});

//	it("tracks the context", function() {
//		var spy = jasmine.createSpy('spy');
//		var foo = {
//			fn: spy
//		};
//		var baz = {
//			fn: spy
//		};
//		foo.fn(123);
//		foo.fn('abc');
//		baz.fn(456);
//	
//		expect(spy.calls.first().object).toBe(foo);
//		expect(spy.calls.mostRecent().object).toBe(baz);
//	});
	
//	it("can be reset", function() {
//		spyOn(person, 'sayHello');
//		person.sayHello(123);
//		person.sayHello(456, "baz");
//		
//		expect(person.sayHello.calls.any()).toBe(true);
//		person.sayHello.calls.reset();
//		expect(person.sayHello.calls.any()).toBe(false);
//	});
	
//	var sampleSpy;
//	beforeEach(function() {
//		sampleSpy = jasmine.createSpy("sample spy");
//	});
//	
//	it("checking the spy was called", function() {
//		sampleSpy("sample Spy");
//		expect(sampleSpy).toHaveBeenCalled();
//		expect(sampleSpy).toHaveBeenCalledWith("sample Spy");
//		sampleSpy.calls.reset();
//	});
	
//	var tapeObj;
//	beforeEach(function() {
//		tapeObj = jasmine.createSpyObj("tape", ["play", "pause", "stop"]);
//	});
//	
//	it ("checking each method was called", function() {
//		tapeObj.play();
//		tapeObj.pause();
//		tapeObj.stop();
//		expect(tapeObj.play).toHaveBeenCalledWith();
//		expect(tapeObj.play.calls.mostRecent()).toEqual({object: tapeObj, args: []});
//		tapeObj.stop.calls.reset();
//	});
//});

describe("jasmine.any function", function() {
	it("matching any value", function() {
		expect({}).toEqual(jasmine.any(Object));
		expect(123).toEqual(jasmine.any(Number));
		expect('123').toEqual(jasmine.any(String));
		expect(true).toEqual(jasmine.any(Boolean));
		expect(new Date()).toEqual(jasmine.any(Date));
	});
});

describe("when used with a spy", function() {
	it("is useful for comparing arguments", function() {
		var foo = jasmine.createSpy('foo baz');
		foo(12, function() {
			return true;
		});

		expect(foo).toHaveBeenCalledWith(
				jasmine.any(Number), jasmine.any(Function));
	});
});

describe("jasmine.objectContaining", function() {
	var foo;
	beforeEach(function() {
		foo = {a: 1, bar: "bar"}
	});
	it("should contain partial", function() {
		expect(foo).toEqual(jasmine.objectContaining({bar: "bar"}));
	});
});

describe("jasmine.objectContaining", function() {
	it("should contain partial with spy", function() {
		var callback = jasmine.createSpy("callback");
		callback(123, {a: 1, foo: "foo"});
		
		expect(callback).toHaveBeenCalledWith(
				jasmine.any(Number), 
				jasmine.objectContaining({foo: "foo"}));
	});
});