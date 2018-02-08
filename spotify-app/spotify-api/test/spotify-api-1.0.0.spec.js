describe('Spotify API', function () {
  var target = spotifyApi;

  spotifyApi = undefined;

  beforeEach(function () {
    target.token = 'BQBYglQ3pgysTwXgZA1JYDWDF7qp8XlxYvrFxqXmU7-rROKeVfmJu3ToGTF50h8IqsxIE3D50-bhJ6H9hXXUcKRP44gHsRB-x5EkXNegVsrpNU8Dko0zmAwjSU38jh-kwmfkOcRInylcNnk';
  });

  describe('search artists', function () {
    var artists;

    beforeEach(function (done) {
      target.searchArtists(
        'madonna',
        function (_artists) {
          artists = _artists;

          done();
        },
        function (error) {
          done();
        }
      );
    });

    it('should get results on search', function () {
      expect(artists).not.toBeUndefined();

      expect(artists.length > 0).toBeTruthy();
    });
  });

  describe('retrieve albums', function () {
    var albums;

    beforeEach(function (done) {
      target.retrieveAlbums(
        '6tbjWDEIzxoDsBA1FuhfPW',
        function (_albums) {
          albums = _albums;

          done();
        },
        function (error) {
          done();
        }
      );
    });

    it('should get items on retrieve', function () {
      expect(albums).not.toBeUndefined();

      expect(albums.length > 0).toBeTruthy();
    });
  });

  describe('retrieve tracks', function () {
    var tracks;

    beforeEach(function (done) {
      target.retrieveTracks(
        '391y4N0CepQ4aH3KdL0lPh',
        function (_albums) {
          tracks = _albums;

          done();
        },
        function (error) {
          done();
        }
      );
    });

    it('should get items on retrieve', function () {
      expect(tracks).not.toBeUndefined();

      expect(tracks.length > 0).toBeTruthy();
    });
  });

  describe('retrieve track', function () {
    var track;

    beforeEach(function (done) {
      target.retrieveTrack(
        '4bs4s1VuZInTSdQksBdRfL',
        function (_track) {
          track = _track;

          done();
        },
        function (error) {
          done();
        }
      );
    });

    it('should get item on retrieve', function () {
      expect(track).not.toBeUndefined();

      expect(track.name).not.toBeUndefined();
    });
  });
});
