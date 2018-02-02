describe("Spotify API", function() {
  beforeEach(function() {
    spotifyApi.token =
      "BQDFceRaJ09Lm0fIlOXdCyo3_JOFSsrOXSUHdppYcPiS_w8o55QErZZtl6XSS2GIFQUSTpHEngeaCbrHprjleqYSKbAicjnhEXGflyv-HmTFQEVG9S9qjoDa-vkD-xuEt3q3WW_cszWbHjQ";
  });

  describe("search artists", function() {
    var artists;

    beforeEach(function(done) {
      spotifyApi.searchArtists(
        "madonna",
        function(_artists) {
          artists = _artists;

          done();
        },
        function(error) {
          done();
        }
      );
    });

    it("should get results on search", function() {
      expect(artists).not.toBeUndefined();

      expect(artists.length > 0).toBeTruthy();
    });
  });

  describe("retrieve albums", function() {
    var albums;

    beforeEach(function(done) {
      spotifyApi.retrieveAlbums(
        "6tbjWDEIzxoDsBA1FuhfPW",
        function(_albums) {
          albums = _albums;

          done();
        },
        function(error) {
          done();
        }
      );
    });

    it("should get items on retrieve", function() {
      expect(albums).not.toBeUndefined();

      expect(albums.length > 0).toBeTruthy();
    });
  });

  describe("retrieve tracks", function() {
    var tracks;

    beforeEach(function(done) {
      spotifyApi.retrieveTracks(
        "391y4N0CepQ4aH3KdL0lPh",
        function(_albums) {
          tracks = _albums;

          done();
        },
        function(error) {
          done();
        }
      );
    });

    it("should get items on retrieve", function() {
      expect(tracks).not.toBeUndefined();

      expect(tracks.length > 0).toBeTruthy();
    });
  });

  describe("retrieve track", function() {
    var track;

    beforeEach(function(done) {
      spotifyApi.retrieveTrack(
        "4bs4s1VuZInTSdQksBdRfL",
        function(_track) {
          track = _track;

          done();
        },
        function(error) {
          done();
        }
      );
    });

    it("should get item on retrieve", function() {
      expect(track).not.toBeUndefined();

      expect(track.name).not.toBeUndefined();
    });
  });
});
