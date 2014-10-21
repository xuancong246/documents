module("Number Utility");

QUnit.test("Test multiple function", function(assert) {
	assert.strictEqual(
			NumberUtils.prototype.multiple(4, 5), 
			20, 'should return 20 with 4 multiple 5');
});

QUnit.test("Test divide function", function(assert) {
	assert.strictEqual(
			NumberUtils.prototype.divide(8, 2), 4, 
			'should return 4 with 8 divide 2');
	assert.ok(
			isNaN(NumberUtils.prototype.divide(2, 0)), 
			'should return NaN with 2 divide 0');
})