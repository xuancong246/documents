module("String Utility");

QUnit.test("Test concat function", function(assert) {
	assert.strictEqual(
			StringUtils.prototype.concat('Hello', 'world!', ' '), 
			'Hello world!', 'should return Hello world!');
});

QUnit.test("Test isExist function", function(assert) {
	assert.ok(
			StringUtils.prototype.isExist('Hello world!', 'world'), 
			'should Hello world exists world');
})