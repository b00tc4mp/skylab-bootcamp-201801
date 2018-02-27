/**
 * Spotify API client based on Fetch API.
 * 
 * @author manuelbarzi
 *
 * @version 2.0.0
 */
let spotifyApi;
(() => {
  'use strict';

  function call(path) {
    return fetch(inst.baseUrl + path, { headers: { Authorization: 'Bearer ' + inst.token } })
      .then(res => res.json())
  }

  const inst = {
    baseUrl: 'https://api.spotify.com/v1/',

    token: 'BQBYglQ3pgysTwXgZA1JYDWDF7qp8XlxYvrFxqXmU7-rROKeVfmJu3ToGTF50h8IqsxIE3D50-bhJ6H9hXXUcKRP44gHsRB-x5EkXNegVsrpNU8Dko0zmAwjSU38jh-kwmfkOcRInylcNnk',

    /**
     * Searches artists by matching a text.
     * 
     * @see https://developer.spotify.com/web-api/console/get-search-item/
     *
     * @param {String} query - The text to search.
     * @returns {Promise} - A promise that resolves if API call succeeds, otherwise rejects.
     */
    searchArtists: query => call(`search?type=artist&q=${query}`)
      .then(res => res.artists.items),

    /**
     * Retrieve albums from an artist (by artist id).
     * 
     * @see https://developer.spotify.com/web-api/console/get-artist-albums/
     *
     * @param {String} artistId - The id of the artist to retrieve the albums from.
     * @returns {Promise} - A promise that resolves if API call succeeds, otherwise rejects.
     */
    retrieveAlbums: artistId => call(`artists/${artistId}/albums`)
      .then(res => res.items),

    /**
     * Retrieve tracks from an album (by album id).
     * 
     * @see https://developer.spotify.com/web-api/console/get-album-tracks/
     *
     * @param {String} albumId - The id of the album to retrieve the tracks from.
     * @returns {Promise} - A promise that resolves if API call succeeds, otherwise rejects.
     */
    retrieveTracks: albumId => call(`albums/${albumId}/tracks`).then(res => res.items),

    /**
     * Get track from an album (by track id) to play it.
     * 
     * @see https://developer.spotify.com/web-api/console/get-track/
     *
     * @param {String} trackId - The id of the album to retrieve the tracks from.
     * @returns {Promise} - A promise that resolves if API call succeeds, otherwise rejects.
     */
    retrieveTrack: trackId => call(`tracks/${trackId}`)
  }

  spotifyApi = inst
})()
