describe('Spotify API Client based on Fetch API', () => {
  'use strict'

  let target = spotifyApi
  
  spotifyApi = undefined

  beforeEach(() => {
    target.token = 'BQBYglQ3pgysTwXgZA1JYDWDF7qp8XlxYvrFxqXmU7-rROKeVfmJu3ToGTF50h8IqsxIE3D50-bhJ6H9hXXUcKRP44gHsRB-x5EkXNegVsrpNU8Dko0zmAwjSU38jh-kwmfkOcRInylcNnk'
  })

  describe('search artists', () => {
    let artists

    beforeEach(done => {
      target.searchArtists('madonna')
        .then(_artists => {
          artists = _artists

          done()
        })
        .catch(done)
    })

    it('should get results on search', () => {
      expect(artists).not.toBeUndefined()

      expect(artists.length > 0).toBeTruthy()
    })
  })

  describe('retrieve albums', () => {
    let albums

    beforeEach(done => {
      target.retrieveAlbums('6tbjWDEIzxoDsBA1FuhfPW')
        .then(_albums => {
          albums = _albums

          done()
        })
        .catch(done)
    })

    it('should get items on retrieve', () => {
      expect(albums).not.toBeUndefined()

      expect(albums.length > 0).toBeTruthy()
    })
  })

  describe('retrieve tracks', () => {
    let tracks

    beforeEach(done => {
      target.retrieveTracks('391y4N0CepQ4aH3KdL0lPh')
        .then(_albums => {
          tracks = _albums

          done()
        })
        .catch(done)
    })

    it('should get items on retrieve', () => {
      expect(tracks).not.toBeUndefined()

      expect(tracks.length > 0).toBeTruthy()
    })
  })

  describe('retrieve track', () => {
    let track

    beforeEach(done => {
      target.retrieveTrack('4bs4s1VuZInTSdQksBdRfL')
        .then(_track => {
          track = _track

          done()
        })
        .catch(done)
    })

    it('should get item on retrieve', () => {
      expect(track).not.toBeUndefined()

      expect(track.name).not.toBeUndefined()
    })
  })
})