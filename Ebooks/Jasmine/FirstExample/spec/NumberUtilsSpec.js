describe("NumberUtils", function() {
	var util;

	beforeEach(function() {
		util = new NumberUtils();
	});

	it("should return 0 when getting double value for 0", function() {
		var number = 0;
		var result = util.toDouble(number);
		expect(result).toEqual(0);
	});

	it("should return positive double value when getting double value for negative number", function() {
		var number = -5;
		var result = util.toDouble(number);
		expect(result).toEqual(5);
	});
});