describe("Text tool", function () {
	it('should wrap', function () {
		var res = text('something').wrap('$').wrap('[', ']').wrap('{', '}').wrap('<', '>').wrap('#').toString();

		expect(res).toEqual('#<{[$something$]}>#');
	});

	// v2.0.0+

	it('should wrap and provide String methods', function () {
		var res = text('something').wrap('$').wrap('[', ']').wrap('{', '}').wrap('<', '>').wrap('#').toUpperCase();

		expect(res).toEqual('#<{[$SOMETHING$]}>#');
	});
});