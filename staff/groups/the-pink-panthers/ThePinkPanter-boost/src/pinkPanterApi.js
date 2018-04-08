let pinkPanterApi;

(function () {

    const baseUrl = 'https://api.themoviedb.org/3/'

    const token = '?api_key=5aee70d47502de15fcdde658cbdcb3c7'

    pinkPanterApi = {

        call: function (url) {
            return fetch(url).then(res => res.json())
        },

        getTypePopular: function (type, page, lang) {
            let path = `${baseUrl}${type}/popular${token}&language=${lang || 'es'}&page=${page}`
            return this.call(path).then(res => res.results)
        },

        getDetaillsIdType: function (type, id, lang) {
            let path = `${baseUrl}${type}/${id}${token}&language=${lang || 'es'}`
            return this.call(path).then(res => res)
        },

        getSearch: function (query,page, lang) {
            let path = `${baseUrl}search/multi${token}&language=${lang || 'es'}&page=${page}&query=${query}`
            return this.call(path).then(res => res.results)
        },

        getCast: function (type, id) {
            let path = `${baseUrl}${type}/${id}/credits${token}`
            return this.call(path).then(res => res.cast)
        },

        getVideos: function (type, id, lang) {
            let path = `${baseUrl}${type}/${id}/videos${token}&language=${lang || 'es'}`
            return this.call(path).then(res => res.results)
        }

    }
})()

if(typeof module !== "undefined"){
    module.exports = pinkPanterApi
}