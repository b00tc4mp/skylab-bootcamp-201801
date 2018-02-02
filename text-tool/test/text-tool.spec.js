describe("Text tool", function () {
	// v1+

	it('should wrap', function () {
		var res = text('something').wrap('$').wrap('[', ']').wrap('{', '}').wrap('<', '>').wrap('#').toString();

		expect(res).toEqual('#<{[$something$]}>#');
	});

	// v2+

	it('should wrap and provide String methods', function () {
		var res = text('something').wrap('$').wrap('[', ']').wrap('{', '}').wrap('<', '>').wrap('#').toUpperCase();

		// NOTE: in v1 this could be solved by doing ...wrap('#').toString().toUpperCase()

		expect(res).toEqual('#<{[$SOMETHING$]}>#');
	});

	// v2.0.0.0js +

	it('should wrap and doOnChars and provide String methods', function () {
		var res = text('something').wrap('$').wrap('[', ']').wrap('{', '}').wrap('<', '>').wrap('#').doOnChars().toString();

		expect(res).toEqual('[#][<][{][[][$][s][o][m][e][t][h][i][n][g][$][]][}][>][#]');
	});
});