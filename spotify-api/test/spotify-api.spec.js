describe("Spotify API", function() {
  beforeEach(function() {
    spotifyApi.token =
      "BQB9jM-R2ggfuz5VwExC21rCU0lY6-_fScopU8sraMGWp0M9yqlNSPmxC7rKyWiw_qM2KPBpraT6rcQboWZhaAw7I0I6A3Z2zkn2y8qiGJBB9eCagtjDltIoOmmcG7mwiXcPDnt7sO3GLfg";
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
