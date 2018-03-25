/**
 * Spotify API client based on jQuery AJAX.
 *
 * @version 1.0.0
 */
var spotifyApi;
(function () {
  'use strict';

  function call(path, handleSuccess, handleError) {
    $.ajax({
      url: inst.baseUrl + path,
      headers: { Authorization: 'Bearer ' + inst.token },
      timeout: inst.timeout,
      success: handleSuccess,
      error: handleError
    });
  }

  var inst = {
    baseUrl: 'https://api.spotify.com/v1/',

    token:
      'BQBYglQ3pgysTwXgZA1JYDWDF7qp8XlxYvrFxqXmU7-rROKeVfmJu3ToGTF50h8IqsxIE3D50-bhJ6H9hXXUcKRP44gHsRB-x5EkXNegVsrpNU8Dko0zmAwjSU38jh-kwmfkOcRInylcNnk',

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
    searchArtists: function (query, handleResults, handleError) {
      call(
        'search?type=artist&q=' + query,
        function (results) {
          handleResults(results.artists.items);
        },
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
    retrieveAlbums: function (artistId, handleResults, handleError) {
      call(
        'artists/' + artistId + '/albums',
        function (results) {
          handleResults(results.items);
        },
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
    retrieveTracks: function (albumId, handleResults, handleError) {
      call(
        'albums/' + albumId + '/tracks',
        function (results) {
          handleResults(results.items);
        },
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
    retrieveTrack: function (id, handleResults, handleError) {
      call(
        'tracks/' + id,
        handleResults,
        handleError
      );
    }
  };

  spotifyApi = inst;
})();
