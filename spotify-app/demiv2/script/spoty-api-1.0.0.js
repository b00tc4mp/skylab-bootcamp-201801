/**
 * Spotify API client.
 *
 * @version 1.0.0
 */
var spotifyApi;
(function() {
"use strict";

    const token = "BQDei19I1VCMR-tBXvcUQRxoB7k0Cu4o546PJSWH766ZEvIpYUutQgs--gWmG4wOSK8bvYii4Sv2yZ896_MzA1JlYBmyC_liyEytaJcMXqFssbLsmWzi5_1q5ddw0x1r7hzI86l91OvGzAY";
    const headers = { Authorization: 'Bearer ' + token }

    function call(url, token, timeout, handleSuccess, handleError) {
        fetch(url, { headers }).then(res => {
            return res.json()
        })
        .then(data => {
            handleSuccess(data)
        })
        .catch( () => {
            handleError()
        })
    }

    spotifyApi = {
        baseUrl: "https://api.spotify.com/v1/",
        timeout: 2000,

        /**
         * Searches artists by matching a text.
         *
         * @see https://developer.spotify.com/web-api/console/get-search-item/
         *
         * @param {String} query - The text to search.
         * @param {Function} handleResults - Handles the results.
         * @param {Function} handleError - Handles an error.
         */

        searchArtists: function(query, handleResults, handleError) {
            call(
              this.baseUrl + "search?type=artist&q=" + query,
              this.token,
              this.timeout,
              handleResults,
              handleError
              
            );
          },

        /**
         * Retrieve albums from an artist (by artist id).
         *
         * @see https://developer.spotify.com/web-api/console/get-artist-albums/
         *
         * @param {String} artistId - The id of the artist to retrieve the albums from.
         * @param {Function} handleResults - Handles the results.
         * @param {Function} handleError - Handles an error.
         */
        retrieveAlbums: function(artistId, handleResults, handleError) {
            call(
            artistId,
            this.token,
            this.timeout,
            handleResults,
            handleError
            );
        },

        /**
         * Retrieve tracks from an album (by album id).
         *
         * @see https://developer.spotify.com/web-api/console/get-album-tracks/
         *
         * @param {String} albumId - The id of the album to retrieve the tracks from.
         * @param {Function} handleResults - Handles the results.
         * @param {Function} handleError - Handles an error.
         */
        retrieveTracks: function(trackId, handleResults, handleError) {
            call(
            trackId,
            this.token,
            this.timeout,
            handleResults,
            handleError
            );
        },

        /**
         * Retrieve track by id.
         *
         * @see https://developer.spotify.com/web-api/console/get-track/
         *
         * @param {String} id - The id of the track to retrieve information from.
         * @param {Function} handleResults - Handles the results.
         * @param {Function} handleError - Handles an error.
         */
        retrieveTrack: function(query, handleResults, handleError) {
            call(
                this.baseUrl + "tracks/" + query,
                this.token,
                this.timeout,
                handleResults,
                handleError,
                
            );
          }

    }

})();