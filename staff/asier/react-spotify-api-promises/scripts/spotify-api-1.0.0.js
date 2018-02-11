/**
 * Spotify API client.
 *
 * @version 1.0.0
 */

let spotifyApi;

(function () {
    "use strict";
    const token = 'BQCxN929BWuhFfjlx8eFFshT49IGSKdPPI_Rw1N7R3q1gGcqMTuEpqsN9bWoTfUuj95mF4AR48F_wjSyxJUew7wnTlCWrJvos-u97lvEPC8fvFKcpkJJm_lSx0AcTYobblhUNQI'
    const baseUrl = "https://api.spotify.com/v1/"
    const headers = { Authorization: 'Bearer ' + token }
    
    
    spotifyApi = {
        baseUrl,
        
        call: function (url) {
    
            return fetch(url , { headers })

                .then(res => res.json())
           
        },
        /**
         * Searches artists by matching a text.
         */

        searchArtists: function (query) {
            
            let path = this.baseUrl + "search?type=artist&q=" + query
      
            return this.call(path).then(res =>  res.artists.items )
        },

        /**
         * Retrieve albums from an artist (by artist id).
         */
        retrieveAlbums: function (artistId) {
            
            let path = this.baseUrl + "artists/" + artistId + "/albums"
            
            return this.call(path).then(res =>  res.items)

        },

        /**
         * Retrieve tracks from an album (by album id).
         */
        retrieveTracks: function (albumId, handleResults, handleError) {
           
            
            let path = this.baseUrl + "albums/" + albumId + "/tracks"

            return this.call(path).then(res => res.items)           
        },

        /**
         * Get track from an album (by track id) to play it.
         */
        retrieveTrack: function (trackId) {
           
            let path = this.baseUrl + "tracks/" + trackId
            
            return this.call(path)
                    
        }
    };
})();
