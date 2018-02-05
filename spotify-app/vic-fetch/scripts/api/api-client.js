const spotiApi = {
	baseURL: "https://api.spotify.com/v1/",

	token: "BQC7gVrjIfVrm0QdpZWHmAppJZ_ppamf0mgewKvPZg17QOGYkyoHz4VNewAnoydsaBaFbvEfhDs9GnU6WfT-znfTFlEUjlzgnLatBnRk9vpqN3IZVopJzOAQd42FriykyrjTLsxEEuWnibM",

	getHeaders: function() {
		return {
			headers: {
				'Authorization': 'Bearer ' + this.token
			}
		}
	},

	timeout: 2000,

	call: function (_PATH) {
		return new Promise((resolve, reject) => {
				const timeout = setTimeout(function () {
					reject(new Error('Request timed out'));
				}, this.timeout);

				fetch(_PATH, this.getHeaders())
					.then(res => {
						clearTimeout(timeout);

						return res.json();
					})
					.then(data => resolve(data))
					.catch(function (err) {
						reject(err);
					})
			})
			.catch(err => {
				throw new Error(err)
			})
	},

	getArtists: function (query, type) {
		let path = this.baseURL + "search?q=" + query + "&type=" + type;
		
		return this.call(path).then(res =>  res.artists.items)
	},

	getAlbums: function (id) {
		let path = this.baseURL + 'artists/' + id + "/albums";
		
		return this.call(path).then(res =>  res.items)
	},

	getTraks: function (id) {
		let path = this.baseURL + "albums/" + id + "/tracks"

		return this.call(path).then(res =>  res.items)
	}
}