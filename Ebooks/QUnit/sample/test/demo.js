/*QUnit.test('Demo first test', function(assert) {
	assert.ok(1 == "1", "Test number 1 == string \"1\"");
	assert.ok(1 == false, "Test number 1 == boolean false");
	assert.ok(1 == true, "Test number 1 == boolean true");
});*/

/*QUnit.test("Test ok()", function(assert) {
	assert.ok(false, "false fails");
	assert.ok(true, "true succeeds");
	assert.ok("", "empty string fails");
	assert.ok("non-empty", "non-empty string succeeds");
	assert.ok(4 - 4, "4 - 4 = 0 fails");
	assert.ok(3 - 4, "3 - 4 = -1 (!= 0) succeeds");
	assert.ok(1 + 2, "1 + 2 = 3 (!= 0) succeeds");
});*/

/*QUnit.test("Test ok() function", function(assert) {
	assert.ok(new Date(), "new Date() succeeds");
	assert.ok(['a', 1], "array ['a', 1] succeeds");
	assert.ok({name : 'name'}, "json {name : 'name'} succeeds");
	assert.ok(function test() {}, "function test() {} succeeds");
});*/

/*QUnit.test("Test ok() function", function(assert) {
	assert.ok(parseInt("abc"), "parseInt(\"abc\") = NaN fails");
	assert.ok(null, "null fails");
	assert.ok(undefined, "undefined fails");
});*/

/*QUnit.test("Test ok() function", function(assert) {
	var zero = 0;
	assert.ok(zero, "var zero = 0 fails");
	var one = 4 - 3;
	assert.ok(one, "var one = 4 - 3 succeeds");
	var date = new Date();
	assert.ok(date, "var date = new Date() succeeds");
	var nullTest = null;
	assert.ok(nullTest, "var nullTest = null fails");
	var save = function() {};
	assert.ok(save, "var save = function() {} succeeds");
});*/

/*QUnit.test("Test equal() function", function(assert) {
	assert.equal(1, "1", "Number 1 equal string '1' succeeds");
	assert.equal("", 0, "Empty string equal 0 succeeds");
	assert.equal(false, 0, "False equal 0 succeeds");
	assert.equal(false, -1, "False equal -1 (!= 0) fails");
	assert.equal(true, 1, "True equal 1 succeeds");
	assert.equal(true, 2, "True equal 2 (!= 1) fails");
	assert.equal(null, NaN, "null equal NaN fails");
	assert.equal(null, undefined, "null equal undefined succeeds");
});*/

/*QUnit.test("Test notEqual() function", function(assert) {
	assert.notEqual(1, "1", "Number 1 notEqual string '1' fails");
	assert.notEqual("", 0, "Empty string notEqual 0 fails");
	assert.notEqual(false, 0, "False notEqual 0 fails");
	assert.notEqual(false, -1, "False notEqual -1 (!= 0) succeeds");
});*/

/*QUnit.test("Test strictEqual() function", function(assert) {
	assert.strictEqual(1, "1", "Number 1 equal string '1' succeeds");
	assert.strictEqual(false, 0, "False equal 0 succeeds");
	assert.strictEqual(true, 1, "True equal 1 succeeds");
});*/

/*QUnit.test("Test deepEqual() function", function(assert) {
	assert.deepEqual([1, false], ["1", 0], 
			"Using strictEqual so 1 != '1' and false != 0");
	assert.deepEqual([1,false], [1, false], "Comparing two arrays succeed");
	assert.deepEqual({first: 'A', last: 'B', C: 1}, {'last': 'B', 'first': 'A', C: true}, 
			"Comparing two jsons (differ order) succeed");
	assert.deepEqual(1, '1', "");
});*/

/*QUnit.test("Test propEqual function", function(assert) {
	function Foo(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
	Foo.prototype.doA = function() {};
	var foo = new Foo(1, "2", []);
	var bar = {
			x : 1,
			y : "2",
			z : []
	};
	assert.propEqual(foo, bar, 
			"Strictly the same properties without comparing objects constructors.");
});*/

/*QUnit.test("Test notPropEqual function", function(assert) {
	function Foo(x, y) {
		this.x = x;
		this.y = y;
	}
	var foo = new Foo(1, true);
	var bar = {
			x : 1,
			y : 1
	};
	assert.notPropEqual(foo, bar, "notPropEqual succeed");
});*/

/*QUnit.test("Test equal function", function(assert) {
	assert.expect(1);
	assert.equal(1, "1", "Number 1 equal string '1' succeeds");
	assert.equal("", 0, "Empty string equal 0 succeeds");
});*/

module("demo");

QUnit.assert.mod2 = function(value, expected, message) {
	var actual = value % 2;
	this.push(actual === expected, actual, expected, message);
};

QUnit.test("mod2", function(assert) {
	assert.expect(3);
	assert.mod2(2, 0, "2 % 2 == 0 succeeds");
	assert.mod2(3, 1, "3 % 2 == 1 succeeds");
	assert.mod2(3, 0, "3 % 2 == 0 fails");
});

function CustomError(message) {
	this.message = message;
}
CustomError.prototype.toString = function() {
	return this.message;
};

QUnit.test("Test throws function", function(assert) {
	assert.throws(
			function() {
				throw new CustomError();
			}, CustomError,
			"Raised error is an instance of CustomError"
	);
	assert.throws(
			function() {
				throw new CustomError("some error description");
			}, new CustomError("some error description"),
			"Raised error instance matches the CustomError instance"
	);
	assert.throws(
			function() {
				throw new CustomError("some error description");
			},
			function(err) {
				return err.toString() === "some error description";
			}, "Raised error instance satisfies the callback function"
	);
});

QUnit.begin(function( details ) {
	console.log("Test amount:", details.totalTests);
});