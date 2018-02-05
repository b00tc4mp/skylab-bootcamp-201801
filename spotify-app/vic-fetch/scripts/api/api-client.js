const FETCH_TIMEOUT = 3000
const spotiApi = {
	baseURL: "https://api.spotify.com/v1/",

	token: "BQCE_IS_xznlK4Ga4yyBewF4Mc17iWQvgTjDdZcL2XtP2udbTf_99pVfLhmh5lgtnP1sGqZ03Wtpe1VNjXTsnqryq4jPKAyAIyHMZbwo-SYDH2W676f5Lzqx1P7LK4qE9rxFwAXYoSk6XaO_r-98K5-pWE-vbnne-ycVkQ",

	call: function (_PATH, _header) {
		return new Promise(function (resolve, reject) {
				const timeout = setTimeout(function () {
					reject(new Error('Request timed out'));
				}, FETCH_TIMEOUT);

				fetch(_PATH, _header)
					.then(res => {
						clearTimeout(timeout);
						return resolve(res);
					})
					.catch(function (err) {
						reject(err);
					})
			})
			.then(res => res.json())
			.catch(err => {
				throw new Error(err)
			})
	},

	getArtists: function (query, type) {
		let path = this.baseURL + "search?q=" + query + "&type=" + type;
		const header = {
			headers: {
				'Authorization': 'Bearer ' + this.token
			}
		}
		return this.call(path, header)
	},
	getAlbums: function (id) {
		let path = this.baseURL + 'artists/' + id + "/albums";
		const header = {
			headers: {
				'Authorization': 'Bearer ' + this.token
			}
		}
		return this.call(path, header)
	},
	getTraks: function (id) {
		let path = this.baseURL + "albums/" + id + "/tracks"
		const header = {
			headers: {
				'Authorization': 'Bearer ' + this.token
			}
		}
		return this.call(path, header)
	}
}