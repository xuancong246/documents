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

QUnit.test("Test strictEqual() function", function(assert) {
	assert.strictEqual(1, "1", "Number 1 equal string '1' succeeds");
	assert.strictEqual(false, 0, "False equal 0 succeeds");
	assert.strictEqual(true, 1, "True equal 1 succeeds");
});
