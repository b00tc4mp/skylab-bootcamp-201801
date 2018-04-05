describe("Pink Panther API", function () {
	describe("get type popular movies", function () {
		var popular;

		beforeEach(function (done) {
			pinkPanterApi.getTypePopular(
				"movie", 1).then((_popular) => {
					popular = _popular;

					done();
				})
				.catch(error => {
					done()
				})


		});

		it("should get results on search", function () {
			expect(popular).not.toBeUndefined();

			expect(popular.length > 0).toBeTruthy();
		});
	});

	describe("get type popular series", function () {
		var popular;

		beforeEach(function (done) {
			pinkPanterApi.getTypePopular(
				"tv", 1).then((_popular) => {
					popular = _popular;

					done();
				})
				.catch(error => {
					done()
				})


		});

		it("should get results on search", function () {
			expect(popular).not.toBeUndefined();

			expect(popular.length > 0).toBeTruthy();
		});
	});

	describe("get detaills id type movies", function () {
		var detaills;

		beforeEach(function (done) {
			pinkPanterApi.getDetaillsIdType(
				"movie", 211672).then((_detaills) => {
					detaills = _detaills;

					done();
				})
				.catch(error => {
					done()
				})
		});

		it("should get results on search", function () {
			expect(detaills).not.toBeUndefined();

			expect(Object.keys(detaills).length > 0).toBeTruthy();
		});
	});

	describe("get detaills id type series", function () {
		var detaills;

		beforeEach(function (done) {
			pinkPanterApi.getDetaillsIdType(
				"tv", 211672).then((_detaills) => {
					detaills = _detaills;

					done();
				})
				.catch(error => {
					done()
				})
		});

		it("should get results on search", function () {
			expect(detaills).not.toBeUndefined();

			expect(Object.keys(detaills).length > 0).toBeTruthy();
		});
	});

	describe("get search movies or series", function () {
		var search;

		beforeEach(function (done) {
			pinkPanterApi.getSearch(
				"flash", 1).then((_search) => {
					search = _search;

					done();
				})
				.catch(error => {
					done()
				})
		});

		it("should get results on search", function () {
			expect(search).not.toBeUndefined();

			expect(search.length > 0).toBeTruthy();
		});
	});

	describe("get search movies or series", function () {
		var search;

		beforeEach(function (done) {
			pinkPanterApi.getSearch(
				"arrow", 1).then((_search) => {
					search = _search;

					done();
				})
				.catch(error => {
					done()
				})
		});

		it("should get results on search", function () {
			expect(search).not.toBeUndefined();

			expect(search.length > 0).toBeTruthy();
		});
	});

	describe("get cast movie", function () {
		var cast;

		beforeEach(function (done) {
			pinkPanterApi.getCast(
				"movie", 211672).then((_cast) => {
					cast = _cast;

					done();
				})
				.catch(error => {
					done()
				})
		});

		it("should get results on search", function () {
			expect(cast).not.toBeUndefined();

			expect(cast.length > 0).toBeTruthy();
		});
	});

	describe("get cast serie", function () {
		var cast;

		beforeEach(function (done) {
			pinkPanterApi.getCast(
				"tv", 1418).then((_cast) => {
					cast = _cast;

					done();
				})
				.catch(error => {
					done()
				})
		});

		it("should get results on search", function () {
			expect(cast).not.toBeUndefined();

			expect(cast.length > 0).toBeTruthy();
		});
	});

	describe("get videos movie", function () {
		var video;

		beforeEach(function (done) {
			pinkPanterApi.getVideos(
				"movie", 211672).then((_video) => {
					video = _video;

					done();
				})
				.catch(error => {
					done()
				})
		});

		it("should get results on search", function () {
			expect(video).not.toBeUndefined();

			expect(video.length > 0).toBeTruthy();
		});
	});
});